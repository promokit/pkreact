import { combineReducers } from 'redux';
import pagesReducer from './pages/pages-reducer';
import contextReducer from './context/reducers';
import headerReducer from './header/reducers';

const rootReducer = combineReducers({
  context: contextReducer,
  header: headerReducer,
  pages: pagesReducer
});

export default rootReducer;
