import { Link } from 'react-router-dom';
import { PREFIX_URL } from '../../../constants/constants';
import { ProductInterface } from '../../../model/interfaces';
import ProductImage from '../ProductImage/ProductImage';
import ProductPrice from '../ProductPrice/ProductPrice';

import './styles.scss';

interface ComponentInterface {
  product: ProductInterface;
}

const ProductNormal: React.FC<ComponentInterface> = ({ product }): JSX.Element => (
  <div className="product-normal" data-id={product.id_product}>
    <ProductImage id_product={product.id_product} cover={product.cover.large} />
    <Link to={`${PREFIX_URL}/product/${product.id_product}`} className="product-normal__title">
      {product.name}
    </Link>
    <ProductPrice product={product} />
  </div>
);

export default ProductNormal;
