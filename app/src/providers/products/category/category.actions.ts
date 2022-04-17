import { ProductInterface } from '../../../model/interfaces';
import { CategoryActionTypes } from './category.types';

export const setCategoryProducts = (products: ProductInterface[]) => {
  return {
    type: CategoryActionTypes.SET_CATEGORY_PRODUCTS,
    payload: products
  };
};
