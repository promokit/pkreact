import { combineReducers } from 'redux';
import cmsPageReducer from './cms/reducers';
import homePageReducer from './home/reducers';
import brandPageReducer from './brand/reducers';
import productPageReducer from './product/reducers';
import categoryPageReducer from './category/reducers';

const pagesReducer = combineReducers({
  cms: cmsPageReducer,
  home: homePageReducer,
  brand: brandPageReducer,
  product: productPageReducer,
  category: categoryPageReducer
});

export default pagesReducer;
