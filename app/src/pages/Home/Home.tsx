import Banner from '../../components/Banner/Banner';
import FeaturedProducts from '../../components/widgets/FeaturedProducts/FeaturedProducts';
import { useFetchHome } from '../../hooks/hooks';

import './styles.scss';

const Home: React.FC = (): JSX.Element => {
  useFetchHome();
  return (
    <>
      <Banner />
      <FeaturedProducts />
    </>
  );
};

export default Home;
