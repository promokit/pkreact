import { HeaderInterface, HomepageInterface } from '../../model/interfaces';
import { LoaderAction } from '../context/context.types';
import { BootstrapActionTypes } from './bootstrap.types';

export const setHomePage = (bootstrap: HomepageInterface) => {
  return {
    type: BootstrapActionTypes.SET_HOMEPAGE,
    payload: bootstrap
  };
};

export const setHeader = (bootstrap: HeaderInterface) => {
  return {
    type: BootstrapActionTypes.SET_HEADER,
    payload: bootstrap
  };
};

export const setHeaderLoader = (state: boolean): LoaderAction => ({
  type: BootstrapActionTypes.SET_HEADER_LOADED_STATE,
  payload: state
});
