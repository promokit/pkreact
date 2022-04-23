import { useFetchHome } from '../../hooks/hooks';

import Banner from '../../components/Banner/Banner';
import ComponentLoader from '../../components/loaders/ComponentLoader/ComponentLoader';
import Notifications from '../../components/notifications/Notifications/Notifications';
import FeaturedProducts from '../../components/widgets/FeaturedProducts/FeaturedProducts';

import './styles.scss';

const Home: React.FC = (): JSX.Element => {
  const { isLoading, msg } = useFetchHome();

  if (msg.error) {
    return <Notifications message={msg} />;
  }

  return (
    <>
      {isLoading ? (
        <ComponentLoader />
      ) : (
        <>
          <Banner />
          <FeaturedProducts />
        </>
      )}
    </>
  );
};

export default Home;
