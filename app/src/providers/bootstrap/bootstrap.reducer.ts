import Action from '../redux.types';
import { BootstrapActionTypes } from './bootstrap.types';
import { HeaderInterface, HomepageInterface } from '../../model/interfaces';

interface ComponentInterface {
  header: HeaderInterface;
  homepage: HomepageInterface;
}

const currencyDefaults = {
  conversion_rate: 1,
  current: true,
  id: 1,
  iso_code: '',
  modified: 0,
  name: '',
  numeric_iso_code: 0,
  pattern: { 1: '' },
  precision: 2,
  sign: '$',
  symbol: '$',
  unofficial: 0,
  url: ''
};

const INITIAL_STATE: ComponentInterface = {
  homepage: {
    banner: {
      banner_desc: '',
      banner_link: '',
      image_url: ''
    },
    featuredProductsList: [],
    numberOfFeaturedProd: 0,
    slides: []
  },
  header: {
    logo: {
      url: '',
      width: '100',
      height: '28'
    },
    menuItems: [],
    languages: {
      languages: [],
      current_language: {
        id_lang: 1,
        iso_code: '',
        name: '',
        name_simple: ''
      }
    },
    currencies: {
      currencies: [currencyDefaults],
      current_currency: currencyDefaults
    },
    isLoading: true
  }
};

const bootstrapReducer = (
  state: ComponentInterface = INITIAL_STATE,
  action: Action
): ComponentInterface | {} => {
  switch (action.type) {
    case BootstrapActionTypes.SET_HOMEPAGE:
      return {
        ...state,
        homepage: action.payload
      };
    case BootstrapActionTypes.SET_HEADER:
      return {
        ...state,
        header: action.payload
      };
    case BootstrapActionTypes.SET_HEADER_LOADED_STATE:
      return {
        ...state,
        header: {
          ...state.header,
          isLoading: action.payload
        }
      };
    default:
      return state;
  }
};

export default bootstrapReducer;
