import FavoriteButton from '../../header-elements/FavoritesButton/FavoritesButton';
import MyAccount from '../../header-elements/MyAccount/MyAccount';
import Settings from '../../header-elements/Settings/Settings';
import Search from '../../header-elements/Search/Search';
import Cart from '../../header-elements/Cart/Cart';

import './styles.scss';

const FooterSticky = () => {
  return (
    <div className="footer-sticky">
      <div className="page-width">
        <Settings />
        <Search />
        <Cart />
        <MyAccount />
        <FavoriteButton />
      </div>
    </div>
  );
};

export default FooterSticky;
