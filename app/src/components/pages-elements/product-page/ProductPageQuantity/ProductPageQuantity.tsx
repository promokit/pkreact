import { useSelector } from 'react-redux';
import { productSelector } from '../../../../providers/pages/product/selectors';

import './styles.scss';

const ProductPageQuantity = () => {
  const { quantity } = useSelector(productSelector);
  return (
    <div className="product-qty">
      <span>Quantity:</span> {quantity}
    </div>
  );
};

export default ProductPageQuantity;
