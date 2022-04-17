import { useParams } from 'react-router-dom';
import { useFetchProduct } from '../../hooks/hooks';
import { NotificationType } from '../../model/enums';

import Notification from '../../components/notifications/Notification/Notification';
import ComponentLoader from '../../components/loaders/ComponentLoader/ComponentLoader';
import Notifications from '../../components/notifications/Notifications/Notifications';
import AddToCartButton from '../../components/product-miniatures/AddToCartButton/AddToCartButton';

import './styles.scss';

const Product: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const { isLoading, msg, product } = useFetchProduct(Number(id) || 0);

  if (isLoading) {
    return <ComponentLoader />;
  }

  if (msg.error) {
    return <Notifications message={msg} />;
  }

  if (!product) {
    return <Notification type={NotificationType.Error} message="Product doesn't loaded" />;
  }

  return (
    <div className="product">
      <img
        src={product.cover_image}
        alt="product cover"
        width="100"
        height="100"
        className="img main-img"
      />
      <div className="product-brand">
        <span>Brand:</span> {product.manufacturer_name}
      </div>
      <h2>{product.name}</h2>
      <p className="product-desc">{product.description_short}</p>
      <div className="product-price">
        {product.discount_price ? (
          <>
            <del>{product.price}</del> <strong>{product.discount_price}</strong>
          </>
        ) : (
          <strong>{product.price}</strong>
        )}
      </div>
      <AddToCartButton id={product.id_product} />
    </div>
  );
};

export default Product;
