import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { APP_URL } from '../constants/constants';
import appConfig from '../appconfig.json';

const Cms = lazy(() => import('../pages/Cms/Cms'));
const Home = lazy(() => import('../pages/Home/Home'));
const Brand = lazy(() => import('../pages/Brand/Brand'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const Product = lazy(() => import('../pages/Product/Product'));
const Category = lazy(() => import('../pages/Category/Category'));
const Error404 = lazy(() => import('../pages/Error404/Error404'));
const NewProducts = lazy(() => import('../pages/NewProducts/NewProducts'));

const {
  subdirs: { product, category, manufacturer, cmspage, contact, newproducts }
} = appConfig;

const routesCollection: RouteObject[] = [
  {
    path: `${APP_URL}`,
    element: (
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    )
  },
  {
    path: `${APP_URL}/${product}/:id`,
    element: (
      <Suspense fallback={null}>
        <Product />
      </Suspense>
    )
  },
  {
    path: `${APP_URL}/${category}/:id`,
    element: (
      <Suspense fallback={null}>
        <Category />
      </Suspense>
    )
  },
  {
    path: `${APP_URL}/${manufacturer}/:id`,
    element: (
      <Suspense fallback={null}>
        <Brand />
      </Suspense>
    )
  },
  {
    path: `${APP_URL}/${cmspage}/:id`,
    element: (
      <Suspense fallback={null}>
        <Cms />
      </Suspense>
    )
  },
  {
    path: `${APP_URL}/${contact}`,
    element: (
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    )
  },
  {
    path: `${APP_URL}/${newproducts}`,
    element: (
      <Suspense fallback={null}>
        <NewProducts />
      </Suspense>
    )
  },
  {
    path: '*',
    element: (
      <Suspense fallback={null}>
        <Error404 />
      </Suspense>
    )
  }
];

export default routesCollection;
