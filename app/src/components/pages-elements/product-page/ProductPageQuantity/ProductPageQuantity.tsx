import { useSelector } from 'react-redux';
import { productSelector } from '../../../../providers/pages/product/selectors';

import './styles.scss';

const ProductPageQuantity = () => {
  const { quantity } = useSelector(productSelector);
  return (
    <div className="product-qty">
      <span>Availability:</span> {quantity > 0 ? `${quantity} items` : 'Out of stock'}
    </div>
  );
};

export default ProductPageQuantity;
