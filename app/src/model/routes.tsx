import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Category from '../pages/Category/Category';
import Product from '../pages/Product/Product';
import Error404 from '../pages/Error404/Error404';
import { PREFIX_URL } from '../constants/constants';

const routesCollection: RouteObject[] = [
  { path: `${PREFIX_URL}`, element: <Home /> },
  { path: `${PREFIX_URL}/category/:id`, element: <Category /> },
  { path: `${PREFIX_URL}/product/:id`, element: <Product /> },
  { path: '*', element: <Error404 /> }
];

export default routesCollection;
