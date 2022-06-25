import { useEffect } from 'react';
import { useHomePage } from '../../hooks/useHomePage';
import { NotificationType, StatusType } from '../../model/enums';

import Banner from '../../components/widgets/Banner/Banner';
import Newsletter from '../../components/widgets/Newsletter/Newsletter';
import Notification from '../../components/notifications/Notification/Notification';
import FeaturedProducts from '../../components/widgets/FeaturedProducts/FeaturedProducts';
import ComponentLoader from '../../components/atoms/loaders/ComponentLoader/ComponentLoader';

import './styles.scss';

const Home = () => {
  const { fetchHomePage, status } = useHomePage();

  useEffect(() => {
    fetchHomePage();
  }, [fetchHomePage]);

  if (status === StatusType.Loading) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error) {
    return <Notification type={NotificationType.Error} message="Home page doesn't loaded" />;
  }

  return (
    <>
      <Banner />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
};

export default Home;
