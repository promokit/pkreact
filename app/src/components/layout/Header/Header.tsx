import { useEffect } from 'react';
import { useHeader } from '../../../hooks/useHeader';
import { NotificationType, StatusType } from '../../../model/enums';

import Logo from '../../header-elements/Logo/Logo';
import Cart from '../../header-elements/Cart/Cart';
import Search from '../../header-elements/Search/Search';
import Languages from '../../header-elements/Languages/Languages';
import Mainmenu from '../../header-elements/menu/Mainmenu/Mainmenu';
import Currencies from '../../header-elements/Currencies/Currencies';
import Notification from '../../notifications/Notification/Notification';
import ComponentLoader from '../../loaders/ComponentLoader/ComponentLoader';

import './styles.scss';

const Header: React.FC = (): JSX.Element => {
  const { fetchHeader, status } = useHeader();

  useEffect(() => {
    fetchHeader();
  }, [fetchHeader]);

  if (status === StatusType.Loading) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error) {
    return <Notification type={NotificationType.Error} message="Header doesn't loaded" />;
  }

  return (
    <header>
      <div className="header-top page-width flex">
        <Logo />
        <div className="header-top__items flex flex-grow flex-right">
          <Search />
          <Languages />
          <Currencies />
          <Cart />
        </div>
      </div>
      <Mainmenu />
    </header>
  );
};

export default Header;
