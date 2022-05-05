import { Action, ThunkDispatch, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = process.env.REACT_APP_DEBUG === '1' ? [logger, thunk] : [thunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type ThunkAppDispatch = ThunkDispatch<AppState, void, Action>;

export default store;
