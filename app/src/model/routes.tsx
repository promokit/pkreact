import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Category from '../pages/Category/Category';
import Product from '../pages/Product/Product';
import Error404 from '../pages/Error404/Error404';

const routesCollection: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/category/:id', element: <Category /> },
  { path: '/product/:id', element: <Product /> },
  { path: '*', element: <Error404 /> }
];

export default routesCollection;
