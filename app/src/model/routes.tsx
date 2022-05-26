import { RouteObject } from 'react-router-dom';
import { APP_URL } from '../constants/constants';
import appConfig from '../appconfig.json';

import Cms from '../pages/Cms/Cms';
import Home from '../pages/Home/Home';
import Brand from '../pages/Brand/Brand';
import Product from '../pages/Product/Product';
import Category from '../pages/Category/Category';
import Error404 from '../pages/Error404/Error404';

const {
  subdirs: { product, category, manufacturer, cmspage }
} = appConfig;

const routesCollection: RouteObject[] = [
  { path: `${APP_URL}`, element: <Home /> },
  { path: `${APP_URL}/${product}/:id`, element: <Product /> },
  { path: `${APP_URL}/${category}/:id`, element: <Category /> },
  { path: `${APP_URL}/${manufacturer}/:id`, element: <Brand /> },
  { path: `${APP_URL}/${cmspage}/:id`, element: <Cms /> },
  { path: '*', element: <Error404 /> }
];

export default routesCollection;
