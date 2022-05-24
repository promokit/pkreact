import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePsContext } from '../../hooks/usePsContext';
import { useBrandPage } from '../../hooks/useBrandPage';
import { NotificationType, StatusType } from '../../model/enums';

import Notification from '../../components/notifications/Notification/Notification';
import ComponentLoader from '../../components/atoms/loaders/ComponentLoader/ComponentLoader';
import BrandDetails from '../../components/pages-elements/brand-page/BrandDetails/BrandDetails';
import BrandProducts from '../../components/pages-elements/brand-page/BrandProducts/BrandProducts';
import BrandLoadMore from '../../components/pages-elements/brand-page/BrandLoadMore/BrandLoadMore';

import './styles.scss';

const Brand = () => {
  const { id } = useParams();
  const { productListingPage } = usePsContext();
  const { fetchBrandPage, status, brand } = useBrandPage();
  const isLoading = status === StatusType.Loading;
  const brandId = Number(id);

  useEffect(() => {
    if (!brand) return;

    fetchBrandPage({ brandId, brand, productListingPage });
  }, [fetchBrandPage, brandId, productListingPage]);

  if (isLoading && productListingPage === 1) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error || !brand) {
    return <Notification type={NotificationType.Error} message="Unable to load brand page" />;
  }

  return (
    <>
      <BrandDetails />
      <BrandProducts />
      {isLoading && <ComponentLoader />}
      <BrandLoadMore disabled={isLoading} />
    </>
  );
};

export default Brand;
