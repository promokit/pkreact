import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { usePsContext } from '../../../hooks/usePsContext';
import routesCollection from '../../../model/routes';

const Main = () => {
  const routes = useRoutes(routesCollection);
  const { setPage, productListingPage } = usePsContext();
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll to top after click on a link
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // reset product listing page if URL was changed
    if (productListingPage !== 1) {
      setPage(1);
    }
  }, [pathname]);

  return (
    <main>
      <div className="page-width">{routes}</div>
    </main>
  );
};

export default Main;
