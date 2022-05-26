import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import appConfig from '../../../../appconfig.json';
import { APP_URL } from '../../../../constants/constants';
import { productSelector } from '../../../../providers/pages/product/selectors';

const ProductPageBrand = () => {
  const { manufacturer_name, manufacturer_id } = useSelector(productSelector);
  const {
    subdirs: { manufacturer }
  } = appConfig;
  return (
    <div className="product__brand">
      <span>Brand:</span>{' '}
      <Link to={`${APP_URL}/${manufacturer}/${manufacturer_id}`}>{manufacturer_name}</Link>
    </div>
  );
};

export default ProductPageBrand;
