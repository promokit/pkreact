import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductPage } from '../../hooks/useProductPage';
import { NotificationType, StatusType } from '../../model/enums';

import Notification from '../../components/notifications/Notification/Notification';
import ComponentLoader from '../../components/atoms/loaders/ComponentLoader/ComponentLoader';
import ProductPageName from '../../components/pages-elements/product-page/ProductPageName/ProductPageName';
import ProductPageImage from '../../components/pages-elements/product-page/ProductPageImage/ProductPageImage';
import ProductPageBrand from '../../components/pages-elements/product-page/ProductPageBrand/ProductPageBrand';
import ProductPageDetails from '../../components/pages-elements/product-page/ProductPageDetails/ProductPageDetails';
import ProductPageDescription from '../../components/pages-elements/product-page/ProductPageDescription/ProductPageDescription';
import ProductPageAddToCartForm from '../../components/pages-elements/product-page/ProductPageAddToCartForm/ProductPageAddToCartForm';

import './styles.scss';

const Product = () => {
  const { id } = useParams();
  const { fetchProductPage, status, product } = useProductPage();
  const productId = Number(id);

  useEffect(() => {
    fetchProductPage({ productId });
  }, [productId, fetchProductPage]);

  if (status === StatusType.Loading) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error || !product) {
    return <Notification type={NotificationType.Error} message="Unable to load product" />;
  }

  return (
    <div className="product">
      <ProductPageImage />
      <ProductPageName />
      <ProductPageBrand />
      <ProductPageDescription />
      <ProductPageAddToCartForm />
      <ProductPageDetails />
    </div>
  );
};

export default Product;
