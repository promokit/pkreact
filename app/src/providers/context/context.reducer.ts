import { ContextActionTypes } from './context.types';

interface Loading {
  isLoaded: boolean;
}

const INITIAL_STATE: Loading = {
  isLoaded: false,
};

const contextReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ContextActionTypes.SET_LOADED_STATE:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case ContextActionTypes.SET_ERROR_STATE:
      return {
        ...state,
        isError: action.payload,
      };
    case ContextActionTypes.SET_CONTEXT:
      return {
        ...state,
        details: action.payload,
      };
    case ContextActionTypes.SET_LANGUAGE:
      return {
        ...state,
        details: {
          ...state.details,
          language: action.payload,
        },
      };
    case ContextActionTypes.SET_CURRENCY:
      return {
        ...state,
        details: {
          ...state.details,
          currency: action.payload,
        },
      };
    default:
      return state;
  }
};

export default contextReducer;
