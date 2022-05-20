import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Subdirs } from '../../../../model/subdirs';
import { APP_URL } from '../../../../constants/constants';
import { productSelector } from '../../../../providers/pages/product/selectors';

const ProductPageBrand = () => {
  const { manufacturer_name, manufacturer_id } = useSelector(productSelector);
  return (
    <div className="product__brand">
      <span>Brand:</span>{' '}
      <Link to={`${APP_URL}/${Subdirs.Brand}/${manufacturer_id}`}>{manufacturer_name}</Link>
    </div>
  );
};

export default ProductPageBrand;
