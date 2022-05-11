import { useEffect, useState, MouseEvent } from 'react';
import { usePsContext } from '../../../hooks/usePsContext';
import { AddToCartFormInterface } from '../../../model/interfaces';
import { AddToCartAction, NotificationType, SidebarStates, StatusType } from '../../../model/enums';

import AddToCartInput from '../AddToCartInput/AddToCartInput';
import Notification from '../../notifications/Notification/Notification';
import ComponentLoader from '../../loaders/ComponentLoader/ComponentLoader';

import './styles.scss';

interface ComponentInterface {
  formData: AddToCartFormInterface;
  onQtyChangeHandler: (value: number) => void;
  showInput?: boolean;
}

const AddToCartButton = ({
  formData,
  onQtyChangeHandler,
  showInput = true
}: ComponentInterface) => {
  const { status, message, setCart } = usePsContext();
  const [qty, setQty] = useState<number>(1);

  useEffect(() => {
    onQtyChangeHandler(qty);
  }, [qty, onQtyChangeHandler]);

  const addToCart = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCart({ ...formData, op: AddToCartAction.Up });
  };

  return (
    <div className="add-to-cart">
      <div className="flex">
        {showInput && <AddToCartInput qty={qty} setQty={setQty} />}
        <button
          className="add-to-cart__btn button flex flex-grow"
          onClick={addToCart}
          name="addtocart"
          data-testid="addtocart"
        >
          <span>Add to Cart</span>
          {status === StatusType.Loading && <ComponentLoader />}
        </button>
      </div>
      {status === StatusType.Error && (
        <Notification type={NotificationType.Error} message="Unable to Add to Cart" />
      )}
      {message && <Notification type={NotificationType.Info} message={message} />}
    </div>
  );
};

export default AddToCartButton;
