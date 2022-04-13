import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = process.env.REACT_APP_DEBUG === '1' ? [logger] : [];
const composeEnhancers = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composeEnhancers);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export default store;
