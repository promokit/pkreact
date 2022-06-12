import { ErrorBoundaryMode } from '../../../model/enums';

import ErrorBoundary from '../../atoms/ErrorBoundary/ErrorBoundary';
import FavoriteButton from '../../sidebars/Favorites/Favorites';
import MyAccount from '../../sidebars/MyAccount/MyAccount';
import Search from '../../sidebars/Search/Search';
import Cart from '../../sidebars/cart/Cart/Cart';

import './styles.scss';

const FooterSticky = () => {
  return (
    <div className="footer-sticky">
      <div className="page-width">
        <ErrorBoundary mode={ErrorBoundaryMode.Silent}>
          <Search />
        </ErrorBoundary>
        <ErrorBoundary mode={ErrorBoundaryMode.Silent}>
          <Cart />
        </ErrorBoundary>
        <ErrorBoundary mode={ErrorBoundaryMode.Silent}>
          <MyAccount />
        </ErrorBoundary>
        <ErrorBoundary mode={ErrorBoundaryMode.Silent}>
          <FavoriteButton />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default FooterSticky;
