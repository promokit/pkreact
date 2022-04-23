import { ProductPageActionTypes } from './product.types';
import { ProductPageInterface } from '../../../model/interfaces';

export const setProductPage = (product: ProductPageInterface) => {
  return {
    type: ProductPageActionTypes.SET_PRODUCT_PAGE,
    payload: product
  };
};
