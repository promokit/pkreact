import { combineReducers } from 'redux';
import homepageReducer from './home/reducers';
import categoryReducer from './category/reducers';
import productPageReducer from './product/reducers';

const pagesReducer = combineReducers({
  home: homepageReducer,
  category: categoryReducer,
  product: productPageReducer
});

export default pagesReducer;
