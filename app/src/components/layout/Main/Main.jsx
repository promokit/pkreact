import { useRoutes } from 'react-router-dom';
import routesCollection from '../../../model/routes';

const Main = () => {
  const routes = useRoutes(routesCollection);
  return (
    <main>
      <div className="page-width">{routes}</div>
    </main>
  );
};

export default Main;
