import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRestCartUpdate } from '../../../rest/rest';
import { setCartState } from '../../../providers/context/context.actions';
import { AppDispatch } from '../../../providers/store';
import { AddToCartAction } from '../../../model/enums';
import { AddToCartFormInterface, NotificationInterface } from '../../../model/interfaces';
import AddToCartInput from '../AddToCartInput/AddToCartInput';
import ComponentLoader from '../../loaders/ComponentLoader/ComponentLoader';
import Notifications, { defaultMessages } from '../../notifications/Notifications/Notifications';

import './styles.scss';

interface ComponentInterface {
  formData: AddToCartFormInterface;
  onQtyChangeHandler: Function;
  showInput?: boolean;
}

const AddToCartButton: React.FC<ComponentInterface> = ({
  formData,
  onQtyChangeHandler,
  showInput = true
}): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const [qty, setQty] = useState<number>(1);
  const [loader, setLoader] = useState<boolean>(false);
  const [msg, setMessage] = useState<NotificationInterface>(defaultMessages);

  useEffect(() => {
    onQtyChangeHandler(qty);
  }, [qty, onQtyChangeHandler]);

  const addToCart = async (event: React.MouseEvent<HTMLButtonElement>) => {
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
      if (success) {
        setMessage((msg) => ({ ...msg, info: 'Product added to your cart' }));
        dispatch(setCartState(psdata));
      }
    } catch (error) {
      setMessage((msg) => ({ ...msg, error: 'Unable to Add to Cart' }));
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="add-to-cart">
      {showInput && <AddToCartInput qty={qty} setQty={setQty} />}
      <button className="add-to-cart__btn button flex" onClick={addToCart}>
        <span>Add to Cart</span>
        {loader && <ComponentLoader />}
      </button>
      {!loader && <Notifications message={msg} />}
    </div>
  );
};

export default AddToCartButton;
