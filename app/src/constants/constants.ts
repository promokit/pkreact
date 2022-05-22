const { REACT_APP_DIR, REACT_APP_SUBDIR, REACT_APP_SLUG } = process.env;
export const APP_DIR = `${REACT_APP_DIR}${REACT_APP_SUBDIR}`;
export const APP_URL = `${REACT_APP_SUBDIR}${REACT_APP_SLUG}`;
export const APP_CONFIG = {
  search: {
    minSymbolsNumber: 3
  }
};
