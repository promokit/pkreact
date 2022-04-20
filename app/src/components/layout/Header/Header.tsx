import { NotificationType } from '../../../model/enums';
import { useFetchHeader } from '../../../hooks/hooks';
import Logo from '../../header-elements/Logo/Logo';
import Cart from '../../header-elements/Cart/Cart';
import Search from '../../header-elements/Search/Search';
import Languages from '../../header-elements/Languages/Languages';
import Mainmenu from '../../header-elements/menu/Mainmenu/Mainmenu';
import Currencies from '../../header-elements/Currencies/Currencies';
import Notification from '../../notifications/Notification/Notification';

import './styles.scss';

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
