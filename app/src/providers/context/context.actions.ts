import { ContextInterface, CurrencyInterface, LanguageInterface } from '../../model/interfaces';
import {
  LoaderAction,
  LanguageAction,
  CurrencyAction,
  ErrorAction,
  ContextAction
} from './context.types';
import { ContextActionTypes } from './context.types';

export const setLoadedState = (state: boolean): LoaderAction => ({
  type: ContextActionTypes.SET_LOADED_STATE,
  payload: state
});

export const setErrorState = (state: boolean): ErrorAction => ({
  type: ContextActionTypes.SET_ERROR_STATE,
  payload: state
});

export const setContextState = (state: ContextInterface): ContextAction => ({
  type: ContextActionTypes.SET_CONTEXT,
  payload: state
});

export const setLanguageState = (state: LanguageInterface): LanguageAction => ({
  type: ContextActionTypes.SET_LANGUAGE,
  payload: state
});

export const setCurrencyState = (state: CurrencyInterface): CurrencyAction => ({
  type: ContextActionTypes.SET_CURRENCY,
  payload: state
});
