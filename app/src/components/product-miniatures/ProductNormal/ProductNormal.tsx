import { ProductInterface } from '../../../model/interfaces';
import './styles.scss';

interface ComponentInterface {
  product: ProductInterface;
}

const ProductNormal: React.FC<ComponentInterface> = ({
  product,
}): JSX.Element => (
  <div className="product-normal">
    <img
      className="img"
      src={product.cover.url}
      width={product.cover.width}
      height={product.cover.height}
      alt="product-miniature"
    />
    <div className="product-normal__title">{product.name}</div>
    <div className="product-normal__price">
      <strong>{product.price}</strong>
    </div>
  </div>
);

export default ProductNormal;
