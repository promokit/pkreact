import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductPage } from '../../hooks/useProductPage';

import PageWrapper from '../../components/pages-elements/PageWrapper/PageWrapper';
import ProductPageName from '../../components/pages-elements/product-page/ProductPageName/ProductPageName';
import ProductPageImage from '../../components/pages-elements/product-page/ProductPageImage/ProductPageImage';
import ProductPageBrand from '../../components/pages-elements/product-page/ProductPageBrand/ProductPageBrand';
import ProductPageDetails from '../../components/pages-elements/product-page/ProductPageDetails/ProductPageDetails';
import ProductPageAccessories from '../../components/pages-elements/product-page/ProductPageAccessories/ProductPageAccessories';
import ProductPageDescription from '../../components/pages-elements/product-page/ProductPageDescription/ProductPageDescription';
import ProductPageAddToCartForm from '../../components/pages-elements/product-page/ProductPageAddToCartForm/ProductPageAddToCartForm';

import './styles.scss';

const Product = () => {
  const { id } = useParams();
  const { fetchProductPage, status } = useProductPage();
  const productId = Number(id);

  useEffect(() => {
    fetchProductPage({ productId });
  }, [productId, fetchProductPage]);

  return (
    <PageWrapper status={status}>
      <div className="product">
        <ProductPageImage />
        <ProductPageName />
        <ProductPageBrand />
        <ProductPageDescription />
        <ProductPageAddToCartForm />
        <ProductPageDetails />
        <ProductPageAccessories />
      </div>
    </PageWrapper>
  );
};

export default Product;
