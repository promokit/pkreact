import { Link } from 'react-router-dom';
import appConfig from '../../../appconfig.json';
import { APP_URL } from '../../../constants/constants';
import { ProductInterface } from '../../../model/interfaces';

import ProductImage from '../ProductImage/ProductImage';
import ProductPrice from '../ProductPrice/ProductPrice';
import RemoveFromCartButtom from '../RemoveFromCartButton/RemoveFromCartButton';

import './styles.scss';

interface ComponentInterface {
  product: ProductInterface;
  closeSidebar?: () => void;
}

const ProductMini = ({ product, closeSidebar }: ComponentInterface) => {
  const { id_product, cover, name, cart_quantity, attributes_small } = product;
  const { subdirs } = appConfig;
  return (
    <div className="product-mini grid" data-id={id_product}>
      <div onClick={closeSidebar}>
        <ProductImage id_product={id_product} cover={cover.medium} />
      </div>
      <div className="product-mini__details flex-grow">
        <Link
          to={`${APP_URL}/${subdirs.product}/${id_product}`}
          className="product-mini__title"
          onClick={closeSidebar}
        >
          {name}
        </Link>
        {cart_quantity && <small>{attributes_small}</small>}
        <ProductPrice product={product} />
        {cart_quantity && <RemoveFromCartButtom product={product} />}
      </div>
    </div>
  );
};

export default ProductMini;
