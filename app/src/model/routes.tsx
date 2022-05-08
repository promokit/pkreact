import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Category from '../pages/Category/Category';
import Product from '../pages/Product/Product';
import Error404 from '../pages/Error404/Error404';
import { APP_URL } from '../constants/constants';

const routesCollection: RouteObject[] = [
  { path: `${APP_URL}`, element: <Home /> },
  { path: `${APP_URL}/category/:id`, element: <Category /> },
  { path: `${APP_URL}/product/:id`, element: <Product /> },
  { path: '*', element: <Error404 /> }
];

export default routesCollection;
