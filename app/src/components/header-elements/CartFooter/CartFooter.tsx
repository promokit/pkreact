import { CartTotalInterface } from '../../../model/interfaces';

import './styles.scss';

interface ComponentInterface {
  total: CartTotalInterface;
}

const CartFooter = ({ total }: ComponentInterface) => {
  return (
    <div className="cart-footer">
      <div className="flex">
        <div className="flex-grow">{total.label}</div>
        <div>{total.value}</div>
      </div>
      <div className="cart-footer__button">
        <button className="button">Checkout</button>
      </div>
    </div>
  );
};

export default CartFooter;
