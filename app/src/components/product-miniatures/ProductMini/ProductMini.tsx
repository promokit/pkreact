import { Link } from 'react-router-dom';
import { PREFIX_URL } from '../../../constants/constants';
import { ProductInterface } from '../../../model/interfaces';
import ProductImage from '../ProductImage/ProductImage';
import ProductPrice from '../ProductPrice/ProductPrice';

import './styles.scss';

interface ComponentInterface {
  product: ProductInterface;
}

const ProductMini: React.FC<ComponentInterface> = ({ product }): JSX.Element => (
  <div className="product-mini grid" data-id={product.id_product}>
    <ProductImage id_product={product.id_product} cover={product.cover.medium} />
    <div className="product-mini__details flex-grow">
      <Link to={`${PREFIX_URL}/product/${product.id_product}`} className="product-mini__title">
        {product.name}
      </Link>
      <ProductPrice product={product} />
    </div>
  </div>
);

export default ProductMini;
