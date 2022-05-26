import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { usePsContext } from '../../../hooks/usePsContext';
import routesCollection from '../../../model/routes';

const Main = () => {
  const routes = useRoutes(routesCollection);
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll to top after click on a link
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <main>
      <div className="page-width">{routes}</div>
    </main>
  );
};

export default Main;
