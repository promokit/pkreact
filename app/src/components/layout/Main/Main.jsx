import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import routesCollection from '../../../model/routes';

const Main = () => {
  const routes = useRoutes(routesCollection);
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollParams = { top: 0, behavior: 'smooth' };
    // scroll to top after click on a link
    window.scrollTo(scrollParams);
  }, [pathname]);

  return (
    <main>
      <div className="page-width">{routes}</div>
    </main>
  );
};

export default Main;
