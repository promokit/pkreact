import appConfig from '../appconfig.json';

const { REACT_APP_DIR, REACT_APP_SUBDIR } = process.env;

export const APP_DIR = `${REACT_APP_DIR}${REACT_APP_SUBDIR}`;
export const APP_URL = `${REACT_APP_SUBDIR}${appConfig.slug}`;
export const APP_CONFIG = {
  search: {
    minSymbolsNumber: 3
  }
};
