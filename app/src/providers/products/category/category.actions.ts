import { CategoryActionTypes } from './category.types';

export const setCategoryProducts = (products: []) => {
  return {
    type: CategoryActionTypes.SET_CATEGORY_PRODUCTS,
    payload: products,
  };
};
