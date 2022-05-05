import { NotificationType } from '../../../model/enums';
import { ProductInterface } from '../../../model/interfaces';
import Notification from '../../notifications/Notification/Notification';
import ProductNormal from '../../product-miniatures/ProductNormal/ProductNormal';

import './styles.scss';

interface ComponentInterface {
  products: Array<ProductInterface>;
}

const NormalProductList = ({ products }: ComponentInterface) => {
  if (!products) {
    return <Notification type={NotificationType.Info} message="No products" />;
  }
  return (
    <div className="products-list-normal flex">
      {products.map((product) => (
        <ProductNormal key={product.id_product} product={product} />
      ))}
    </div>
  );
};

export default NormalProductList;
