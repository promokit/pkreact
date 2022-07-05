import appConfig from '../appconfig.json';

const { REACT_APP_DIR, REACT_APP_SUBDIR } = process.env;

export const PS_ROOT_URL = `${REACT_APP_DIR}${REACT_APP_SUBDIR}` as string;
export const APP_URL = `${REACT_APP_SUBDIR}${appConfig.slug}` as string;
export const APP_ASSETS = 'modules/pkreact/app/src/assets/';
export const APP_CONFIG = {
  notifications: {
    timeout: 5000 // ms
  },
  search: {
    minSymbolsNumber: 3
  },
  productListing: {
    productsPerPage: appConfig.productsPerPage || 10
  }
};
