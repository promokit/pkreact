import {
  ActionInterface,
  CartInterface,
  ContextInterface,
  CurrencyInterface,
  LanguageInterface
} from '../../model/interfaces';

export const ContextActionTypes = {
  SET_PRODUCT_LISTING_PAGE: 'SET_PRODUCT_LISTING_PAGE',
  SET_LOADED_STATE: 'SET_LOADED_STATE',
  SET_ERROR_STATE: 'SET_ERROR_STATE',
  SET_CART_STATE: 'SET_CART_STATE',
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_CURRENCY: 'SET_CURRENCY',
  SET_CONTEXT: 'SET_CONTEXT'
};

export interface LoaderAction extends ActionInterface {
  payload: boolean;
}

export interface ErrorAction extends ActionInterface {
  payload: boolean;
}

export interface ContextAction extends ActionInterface {
  payload: ContextInterface;
}

export interface CartAction extends ActionInterface {
  payload: CartInterface;
}

export interface LanguageAction extends ActionInterface {
  payload: LanguageInterface;
}

export interface CurrencyAction extends ActionInterface {
  payload: CurrencyInterface;
}

export interface ListingPageAction extends ActionInterface {
  payload: number;
}
