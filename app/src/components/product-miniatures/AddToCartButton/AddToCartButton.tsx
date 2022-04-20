import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRestCartUpdate } from '../../../rest/rest';
import { AddToCartAction } from '../../../model/enums';
import { AppDispatch } from '../../../providers/store';
import { NotificationInterface } from '../../../model/interfaces';
import { setCartState } from '../../../providers/context/context.actions';
import AddToCartInput from '../AddToCartInput/AddToCartInput';
import ComponentLoader from '../../loaders/ComponentLoader/ComponentLoader';
import Notifications, { defaultMessages } from '../../notifications/Notifications/Notifications';

import './styles.scss';

interface ComponentInterface {
  id: number;
  showInput?: boolean;
}

const AddToCartButton: React.FC<ComponentInterface> = ({ id, showInput = true }): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const [qty, setQty] = useState<number>(1);
  const [loader, setLoader] = useState<boolean>(false);
  const [msg, setMessage] = useState<NotificationInterface>(defaultMessages);

  const addToCart = async (id: number, qty: number) => {
    try {
      setLoader(true);
      const { success, psdata } = await getRestCartUpdate(id, qty, AddToCartAction.Up);
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
      <button className="add-to-cart__btn button flex" onClick={() => addToCart(id, qty)}>
        <span>Add to Cart</span>
        {loader && <ComponentLoader />}
      </button>
      {loader || <Notifications message={msg} />}
    </div>
  );
};

export default AddToCartButton;
