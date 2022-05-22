import FavoriteButton from '../../sidebars/Favorites/Favorites';
import MyAccount from '../../sidebars/MyAccount/MyAccount';
import Search from '../../sidebars/Search/Search';
import Cart from '../../sidebars/cart/Cart/Cart';

import './styles.scss';

const FooterSticky = () => {
  return (
    <div className="footer-sticky">
      <div className="page-width">
        <Search />
        <Cart />
        <MyAccount />
        <FavoriteButton />
      </div>
    </div>
  );
};

export default FooterSticky;
