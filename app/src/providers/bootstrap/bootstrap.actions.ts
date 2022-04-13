import { HeaderInterface, HomepageInterface } from '../../model/interfaces';
import { BootstrapActionTypes } from './bootstrap.types';

export const setHomePage = (bootstrap: HomepageInterface) => {
  return {
    type: BootstrapActionTypes.SET_HOMEPAGE,
    payload: bootstrap,
  };
};

export const setHeader = (bootstrap: HeaderInterface) => {
  return {
    type: BootstrapActionTypes.SET_HEADER,
    payload: bootstrap,
  };
};
