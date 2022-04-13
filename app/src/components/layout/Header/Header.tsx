import Logo from '../../header-elements/Logo/Logo';
import Mainmenu from '../../header-elements/menu/Mainmenu/Mainmenu';
import Languages from '../../header-elements/Languages/Languages';
import Currencies from '../../header-elements/Currencies/Currencies';
import Cart from '../../header-elements/Cart/Cart';
import Search from '../../header-elements/Search/Search';

import './styles.scss';
import { useFetchHeader } from '../../../hooks/hooks';
import ComponentLoader from '../../loaders/ComponentLoader/ComponentLoader';
import Notification from '../../notifications/Notification/Notification';
import { NotificationType } from '../../../model/enums';

const Header: React.FC = (): JSX.Element => {
  const { isError } = useFetchHeader();
  if (isError)
    return <Notification type={NotificationType.Error} message="Unable to load header" />;

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
