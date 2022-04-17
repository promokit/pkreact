import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRestCartUpdate } from '../../../rest/rest';
import { AddToCartAction } from '../../../model/enums';
import { NotificationInterface } from '../../../model/interfaces';
import { setCartState } from '../../../providers/context/context.actions';
import { AppDispatch } from '../../../providers/store';
import ComponentLoader from '../../loaders/ComponentLoader/ComponentLoader';
import Notifications, { defaultMessages } from '../../notifications/Notifications/Notifications';

import './styles.scss';

interface ComponentInterface {
  id: number;
}

const AddToCartButton: React.FC<ComponentInterface> = ({ id }): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [msg, setMessage] = useState<NotificationInterface>(defaultMessages);

  const addToCart = async (id: number) => {
    try {
      setLoader(true);
      const { success, psdata } = await getRestCartUpdate(id, 1, AddToCartAction.Up);
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
      <button className="add-to-cart__btn button flex smooth200" onClick={() => addToCart(id)}>
        <span>Add to Cart</span>
        {loader && <ComponentLoader />}
      </button>
      {loader || <Notifications message={msg} />}
    </div>
  );
};

export default AddToCartButton;
