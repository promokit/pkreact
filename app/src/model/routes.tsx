import { RouteObject } from 'react-router-dom';
import { APP_URL } from '../constants/constants';
import { Subdirs } from './subdirs';

import Cms from '../pages/Cms/Cms';
import Home from '../pages/Home/Home';
import Brand from '../pages/Brand/Brand';
import Product from '../pages/Product/Product';
import Category from '../pages/Category/Category';
import Error404 from '../pages/Error404/Error404';

const routesCollection: RouteObject[] = [
  { path: `${APP_URL}`, element: <Home /> },
  { path: `${APP_URL}/${Subdirs.Product}/:id`, element: <Product /> },
  { path: `${APP_URL}/${Subdirs.Category}/:id`, element: <Category /> },
  { path: `${APP_URL}/${Subdirs.Brand}/:id`, element: <Brand /> },
  { path: `${APP_URL}/${Subdirs.CMSPage}/:id`, element: <Cms /> },
  { path: '*', element: <Error404 /> }
];

export default routesCollection;
