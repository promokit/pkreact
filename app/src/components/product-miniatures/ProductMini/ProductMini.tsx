import { ProductInterface } from '../../../model/interfaces';
import './styles.scss';

interface ComponentInterface {
  product: ProductInterface;
}

const ProductMini: React.FC<ComponentInterface> = ({
  product,
}): JSX.Element => (
  <div className="product-mini flex">
    <img
      className="img"
      src={product.cover.url}
      width={product.cover.width}
      height={product.cover.height}
      alt="product-miniature"
    />
    <div className="product-mini__details flex-grow">
      <div className="product-mini__title">{product.name}</div>
      <div className="product-mini__price">
        <strong>{product.price}</strong>
      </div>
    </div>
  </div>
);

export default ProductMini;
