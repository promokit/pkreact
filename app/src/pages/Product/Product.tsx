import { useParams } from 'react-router-dom';
import { useFetchProduct } from '../../hooks/hooks';
import { NotificationType } from '../../model/enums';

import ProductPageAddToCartForm from '../../components/pages-elements/product-page/ProductPageAddToCartForm/ProductPageAddToCartForm';
import ProductPageDescription from '../../components/pages-elements/product-page/ProductPageDescription/ProductPageDescription';
import ProductPageDetails from '../../components/pages-elements/product-page/ProductPageDetails/ProductPageDetails';
import ProductPageImage from '../../components/pages-elements/product-page/ProductPageImage/ProductPageImage';
import ProductPageBrand from '../../components/pages-elements/product-page/ProductPageBrand/ProductPageBrand';
import ProductPageName from '../../components/pages-elements/product-page/ProductPageName/ProductPageName';
import ComponentLoader from '../../components/loaders/ComponentLoader/ComponentLoader';
import Notifications from '../../components/notifications/Notifications/Notifications';
import Notification from '../../components/notifications/Notification/Notification';

import './styles.scss';

const Product: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const { isLoading, msg, product } = useFetchProduct(Number(id) || 0);

  if (msg.error) {
    return <Notifications message={msg} />;
  }

  if (isLoading) {
    return <ComponentLoader />;
  }

  if (!product) {
    return <Notification type={NotificationType.Error} message="Product doesn't loaded" />;
  }

  return (
    <div className="product">
      <ProductPageImage />
      <ProductPageBrand />
      <ProductPageName />
      <ProductPageDescription />
      <ProductPageAddToCartForm />
      <ProductPageDetails />
    </div>
  );
};

export default Product;
