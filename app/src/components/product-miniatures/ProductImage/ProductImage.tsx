import { Link } from 'react-router-dom';
import appConfig from '../../../appconfig.json';
import { APP_URL } from '../../../constants/constants';
import { ImageInterface } from '../../../model/interfaces';

interface ComponentInterface {
  id_product: number;
  cover: ImageInterface;
}

const ProductImage = ({ id_product, cover: { url, width, height } }: ComponentInterface) => (
  <Link to={`${APP_URL}/${appConfig.subdirs.product}/${id_product}`} className="product-image">
    <img
      loading="lazy"
      className="img"
      src={url}
      width={width}
      height={height}
      alt="product-miniature"
    />
  </Link>
);

export default ProductImage;
