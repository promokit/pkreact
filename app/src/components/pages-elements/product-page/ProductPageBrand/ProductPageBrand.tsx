import { useSelector } from 'react-redux';
import { productSelector } from '../../../../providers/pages/product/selectors';

const ProductPageBrand = () => {
  const { manufacturer_name } = useSelector(productSelector);
  return (
    <div className="product__brand">
      <span>Brand:</span> {manufacturer_name}
    </div>
  );
};

export default ProductPageBrand;
