import { AddToCartAction } from '../../../model/enums';

interface ComponentInterface {
  qty: number;
  setQty: Function;
}

const AddToCartInput: React.FC<ComponentInterface> = ({ qty = 1, setQty }): JSX.Element => {
  const cartClickHandler = (event: React.MouseEvent<HTMLButtonElement>, act: AddToCartAction) => {
    event.preventDefault();
    act === AddToCartAction.Up && setQty(qty + 1);
    act === AddToCartAction.Down && setQty(qty > 1 ? qty - 1 : 1);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const qty = Number(event.target.value);
    setQty(qty > 1 ? qty : 1);
  };

  return (
    <div className="add-to-cart__qty flex">
      <button className="button" onClick={(e) => cartClickHandler(e, AddToCartAction.Up)}>
        +
      </button>
      <input type="number" value={qty.toString()} onChange={changeHandler} />
      <button className="button" onClick={(e) => cartClickHandler(e, AddToCartAction.Down)}>
        –
      </button>
    </div>
  );
};

export default AddToCartInput;
