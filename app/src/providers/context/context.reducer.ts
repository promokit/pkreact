import { ContextActionTypes } from './context.types';

interface States {
  isLoaded: boolean;
  productListingPage: number;
}

const INITIAL_STATE: any = {
  isLoaded: false,
  productListingPage: 1
};

const contextReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ContextActionTypes.SET_LOADED_STATE:
      return {
        ...state,
        isLoaded: action.payload
      };
    case ContextActionTypes.SET_ERROR_STATE:
      return {
        ...state,
        isError: action.payload
      };
    case ContextActionTypes.SET_PRODUCT_LISTING_PAGE:
      return {
        ...state,
        productListingPage: action.payload
      };
    case ContextActionTypes.SET_CONTEXT:
      return {
        ...state,
        details: action.payload
      };
    case ContextActionTypes.SET_LANGUAGE:
      return {
        ...state,
        details: {
          ...state.details,
          language: action.payload
        }
      };
    case ContextActionTypes.SET_CURRENCY:
      return {
        ...state,
        details: {
          ...state.details,
          currency: action.payload
        }
      };
    default:
      return state;
  }
};

export default contextReducer;
