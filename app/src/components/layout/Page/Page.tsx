import { useSelector } from 'react-redux';
import { AppState } from '../../../providers/store';
import { HeaderInterface } from '../../../model/interfaces';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import PageLoader from '../../loaders/PageLoader/PageLoader';

interface ComponentInterface {
  header: HeaderInterface;
}

const Page: React.FC = (): JSX.Element => {
  const { header } = useSelector<AppState, ComponentInterface>((state) => state.bootstrap);

  return (
    <>
      {header.isLoading && <PageLoader />}
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Page;
