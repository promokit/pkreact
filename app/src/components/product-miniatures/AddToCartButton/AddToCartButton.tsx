import { useEffect, useState, MouseEvent } from 'react';
import { usePsContext } from '../../../hooks/usePsContext';
import { AddToCartFormInterface } from '../../../model/interfaces';
import { AddToCartAction, NotificationType, StatusType } from '../../../model/enums';

import Button from '../../forms/Button/Button';
import AddToCartInput from '../AddToCartInput/AddToCartInput';
import Notification from '../../notifications/Notification/Notification';
import withTimer from '../../hocs/withTimer/withTimer';

import './styles.scss';

interface ComponentInterface {
  formData: AddToCartFormInterface;
  onQtyChangeHandler: (value: number) => void;
  showInput?: boolean;
  disabled: boolean;
}

const NotificationWithTimer = withTimer(Notification);

const AddToCartButton = ({
  formData,
  onQtyChangeHandler,
  showInput = true,
  disabled = false
}: ComponentInterface) => {
  const {
    cartContext: { status, message },
    setCartMessage,
    setCart
  } = usePsContext();

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
        <Button title="Add to Cart" status={status} clickHandler={addToCart} disabled={disabled} />
      </div>
      {status === StatusType.Error && (
        <Notification type={NotificationType.Error} message="Unable to Add to Cart" />
      )}
      {/* {message && <Notification type={NotificationType.Info} message={message} />} */}
      {message && (
        <NotificationWithTimer
          type={NotificationType.Info}
          message={message}
          setMessage={setCartMessage}
        />
      )}
    </div>
  );
};

export default AddToCartButton;
