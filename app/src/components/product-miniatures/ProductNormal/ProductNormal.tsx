import { Link } from 'react-router-dom';
import { ProductInterface } from '../../../model/interfaces';

import './styles.scss';

interface ComponentInterface {
  product: ProductInterface;
}

const ProductNormal: React.FC<ComponentInterface> = ({ product }): JSX.Element => (
  <div className="product-normal" data-id={product.id_product}>
    <Link to={`/product/${product.id_product}`}>
      <img
        className="img"
        src={product.cover.url}
        width={product.cover.width}
        height={product.cover.height}
        alt="product-miniature"
      />
    </Link>
    <Link to={`/product/${product.id_product}`} className="product-normal__title">
      {product.name}
    </Link>
    <div className="product-normal__price">
      <strong>{product.price}</strong>
    </div>
  </div>
);

export default ProductNormal;
