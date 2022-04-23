import Action from '../../redux.types';
import { ProductPageActionTypes } from './product.types';

const INITIAL_STATE = {};

const productPageReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ProductPageActionTypes.SET_PRODUCT_PAGE:
      return {
        ...state,
        details: action.payload
      };
    default:
      return state;
  }
};

export default productPageReducer;
