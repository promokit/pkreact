import { RouteObject } from 'react-router-dom';
import Category from '../pages/Category/Category';
import Error404 from '../pages/Error404/Error404';
import Home from '../pages/Home/Home';

const routesCollection: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/category/:id', element: <Category /> },
  { path: '*', element: <Error404 /> }
];

export default routesCollection;
