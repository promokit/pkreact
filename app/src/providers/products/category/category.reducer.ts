import { CategoryActionTypes } from './category.types';
import Action from '../../redux.types';

const INITIAL_STATE = {};

const categoryReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case CategoryActionTypes.SET_CATEGORY_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
