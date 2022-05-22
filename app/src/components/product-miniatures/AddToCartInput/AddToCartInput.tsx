import { MouseEvent, ChangeEvent } from 'react';
import Button from '../../forms/Button/Button';

interface ComponentInterface {
  qty: number;
  setQty: (value: number) => void;
}

const AddToCartInput = ({ qty = 1, setQty }: ComponentInterface) => {
  const onDownClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setQty(qty > 1 ? qty - 1 : 1);
  };

  const onUpClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setQty(qty + 1);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const qty = Number(e.target.value);
    setQty(qty > 1 ? qty : 1);
  };

  return (
    <div className="add-to-cart__qty flex">
      <Button title="+" clickHandler={onUpClickHandler} />
      <input type="text" name="quantity" value={qty} onChange={onChangeHandler} />
      <Button title="-" clickHandler={onDownClickHandler} />
    </div>
  );
};

export default AddToCartInput;
