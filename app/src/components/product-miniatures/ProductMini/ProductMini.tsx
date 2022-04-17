import { Link } from 'react-router-dom';
import { ProductInterface } from '../../../model/interfaces';
import './styles.scss';

interface ComponentInterface {
  product: ProductInterface;
}

const ProductMini: React.FC<ComponentInterface> = ({ product }): JSX.Element => (
  <div className="product-mini grid">
    <Link to={`/product/${product.id_product}`} className="product-mini__img">
      <img
        className="img"
        src={product.cover.url}
        width={product.cover.width}
        height={product.cover.height}
        alt="product-miniature"
      />
    </Link>
    <div className="product-mini__details flex-grow">
      <Link to={`/product/${product.id_product}`} className="product-mini__title">
        {product.name}
      </Link>
      <div className="product-mini__price">
        <strong>{product.price}</strong>
      </div>
    </div>
  </div>
);

export default ProductMini;
