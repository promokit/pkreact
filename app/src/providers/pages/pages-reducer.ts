import { combineReducers } from 'redux';
import cmsPageReducer from './cms/reducers';
import homePageReducer from './home/reducers';
import brandPageReducer from './brand/reducers';
import contactPageReducer from './contact/reducers';
import productPageReducer from './product/reducers';
import categoryPageReducer from './category/reducers';
import newProductsPageReducer from './new-products/reducers';

const pagesReducer = combineReducers({
  cms: cmsPageReducer,
  home: homePageReducer,
  brand: brandPageReducer,
  contact: contactPageReducer,
  product: productPageReducer,
  category: categoryPageReducer,
  newproducts: newProductsPageReducer
});

export default pagesReducer;
