import { Link } from 'react-router-dom';
import { PREFIX_URL } from '../../../constants/constants';
import { ImageInterface } from '../../../model/interfaces';

interface ComponentInterface {
  id_product: number;
  cover: ImageInterface;
}

const ProductImage: React.FC<ComponentInterface> = ({ id_product, cover }) => (
  <Link to={`${PREFIX_URL}/product/${id_product}`} className="product-image">
    <img
      loading="lazy"
      className="img"
      src={cover.url}
      width={cover.width}
      height={cover.height}
      alt="product-miniature"
    />
  </Link>
);

export default ProductImage;
