import { combineReducers } from 'redux';
import bootstrapReducer from './bootstrap/bootstrap.reducer';
import contextReducer from './context/context.reducer';
import pagesReducer from './pages/pages-reducer';

const rootReducer = combineReducers({
  bootstrap: bootstrapReducer,
  context: contextReducer,
  pages: pagesReducer
});

export default rootReducer;
