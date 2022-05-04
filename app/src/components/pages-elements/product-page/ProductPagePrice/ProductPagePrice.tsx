import { useSelector } from 'react-redux';
import { productSelector } from '../../../../providers/pages/product/selectors';

import './styles.scss';

const ProductPagePrice: React.FC = (): JSX.Element => {
  const { price, regular_price, discount_amount, cart_quantity } = useSelector(productSelector);
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
