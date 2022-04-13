import { ContextInterface, CurrencyInterface, LanguageInterface } from '../../model/interfaces';

export const ContextActionTypes = {
  SET_LOADED_STATE: 'SET_LOADED_STATE',
  SET_ERROR_STATE: 'SET_ERROR_STATE',
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_CURRENCY: 'SET_CURRENCY',
  SET_CONTEXT: 'SET_CONTEXT'
};

interface Actions {
  type: string;
}

export interface LoaderAction extends Actions {
  payload: boolean;
}

export interface ErrorAction extends Actions {
  payload: boolean;
}

export interface ContextAction extends Actions {
  payload: ContextInterface;
}

export interface LanguageAction extends Actions {
  payload: LanguageInterface;
}

export interface CurrencyAction extends Actions {
  payload: CurrencyInterface;
}
