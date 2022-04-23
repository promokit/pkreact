import { combineReducers } from 'redux';
import categoryReducer from './category/category.reducer';
import productPageReducer from './product/product.reducer';

const pagesReducer = combineReducers({
  category: categoryReducer,
  product: productPageReducer
});

export default pagesReducer;
