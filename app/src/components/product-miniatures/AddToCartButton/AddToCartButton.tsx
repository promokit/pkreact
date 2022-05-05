import { useEffect, useState, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { getRestCartUpdate } from '../../../rest/rest';
import { AddToCartAction } from '../../../model/enums';
import { usePsContext } from '../../../hooks/usePsContext';
import { contextCartSelector } from '../../../providers/context/selectors';
import {
  AddToCartFormInterface,
  CartInterface,
  NotificationInterface
} from '../../../model/interfaces';
import AddToCartInput from '../AddToCartInput/AddToCartInput';
import ComponentLoader from '../../loaders/ComponentLoader/ComponentLoader';
import Notifications, { defaultMessages } from '../../notifications/Notifications/Notifications';

import './styles.scss';

interface ComponentInterface {
  formData: AddToCartFormInterface;
  onQtyChangeHandler: Function;
  showInput?: boolean;
}

const AddToCartButton = ({
  formData,
  onQtyChangeHandler,
  showInput = true
}: ComponentInterface) => {
  const { setCart } = usePsContext();
  const contextCart = useSelector(contextCartSelector);
  const [qty, setQty] = useState<number>(1);
  const [loader, setLoader] = useState<boolean>(false);
  const [cart, setCartState] = useState<CartInterface>(contextCart);
  const [msg, setMessage] = useState<NotificationInterface>(defaultMessages);

  useEffect(() => {
    onQtyChangeHandler(qty);
  }, [qty, onQtyChangeHandler]);

  useEffect(() => {
    setCart(cart);
  }, [cart, setCart]);

  const addToCart = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      setLoader(true);
      const { id_product, id_product_attribute, qty } = formData;
      const { success, psdata } = await getRestCartUpdate(
        id_product,
        id_product_attribute,
        qty,
        AddToCartAction.Up
      );

      if (!success) throw new Error();

      setCartState(psdata);
      setMessage((msg) => ({ ...msg, info: 'Product added to your cart' }));
    } catch (error) {
      setMessage((msg) => ({ ...msg, error: 'Unable to Add to Cart' }));
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="add-to-cart">
      <div className="flex">
        {showInput && <AddToCartInput qty={qty} setQty={setQty} />}
        <button
          className="add-to-cart__btn button flex flex-grow"
          onClick={addToCart}
          name="addtocart"
        >
          <span>Add to Cart</span>
          {loader && <ComponentLoader />}
        </button>
      </div>
      {!loader && <Notifications message={msg} />}
    </div>
  );
};

export default AddToCartButton;
