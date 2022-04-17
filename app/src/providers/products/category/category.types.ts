import { ActionInterface, ProductInterface } from '../../../model/interfaces';

export const CategoryActionTypes = {
  SET_CATEGORY_PRODUCTS: 'SET_CATEGORY_PRODUCTS'
};

export interface CategoryAction extends ActionInterface {
  payload: ProductInterface[];
}
