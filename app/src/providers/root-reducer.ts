import { combineReducers } from 'redux';
import bootstrapReducer from './bootstrap/bootstrap.reducer';
import categoryReducer from './products/category/category.reducer';
import contextReducer from './context/context.reducer';

const rootReducer = combineReducers({
  context: contextReducer,
  bootstrap: bootstrapReducer,
  category: categoryReducer,
});

export default rootReducer;
