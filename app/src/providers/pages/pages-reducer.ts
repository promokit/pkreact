import { combineReducers } from 'redux';
import cmspageReducer from './cms/reducers';
import homepageReducer from './home/reducers';
import categoryReducer from './category/reducers';
import productPageReducer from './product/reducers';

const pagesReducer = combineReducers({
  cms: cmspageReducer,
  home: homepageReducer,
  category: categoryReducer,
  product: productPageReducer
});

export default pagesReducer;
