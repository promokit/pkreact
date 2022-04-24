import { useSelector } from 'react-redux';
import { AppState } from '../../../../providers/store';
import { ProductPageComponentInterface } from '../../../../model/interfaces';

import './styles.scss';

const ProductPagePrice: React.FC = (): JSX.Element => {
  const {
    product: {
      details: { price, regular_price, discount_amount, cart_quantity }
    }
  } = useSelector<AppState, ProductPageComponentInterface>((state) => state.pages);
  return (
    <div className="product-price">
      {cart_quantity && <span>{cart_quantity}✕</span>}
      {!discount_amount && <strong>{price}</strong>}
      {discount_amount && (
        <>
          <del>{regular_price}</del>
          <strong>{price}</strong>
        </>
      )}
    </div>
  );
};

export default ProductPagePrice;
