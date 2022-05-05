import { useSelector } from 'react-redux';
import { StatusType } from '../../../model/enums';
import { statusSelector } from '../../../providers/header/selector';

import PageLoader from '../../loaders/PageLoader/PageLoader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

const Page = () => {
  const status = useSelector(statusSelector);
  return (
    <>
      {status === StatusType.Loading && <PageLoader />}
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Page;
