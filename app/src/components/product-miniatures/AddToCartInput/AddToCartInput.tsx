import { MouseEvent, ChangeEvent } from 'react';

import Button from '../../forms/Button/Button';

interface ComponentInterface {
  qty: number;
  setQty: (value: number) => void;
}

const AddToCartInput = ({ qty = 1, setQty }: ComponentInterface) => {
  const handleDownClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setQty(qty > 1 ? qty - 1 : 1);
  };

  const handleUpClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setQty(qty + 1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const qty = Number(e.target.value);
    setQty(qty > 1 ? qty : 1);
  };

  return (
    <div className="add-to-cart__qty flex">
      <Button title="+" clickHandler={handleUpClick} />
      <input type="text" name="quantity" value={qty} onChange={handleChange} />
      <Button title="-" clickHandler={handleDownClick} />
    </div>
  );
};

export default AddToCartInput;
