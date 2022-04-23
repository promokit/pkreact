import { ActionInterface, ProductPageInterface } from '../../../model/interfaces';

export const ProductPageActionTypes = {
  SET_PRODUCT_PAGE: 'SET_PRODUCT_PAGE'
};

export interface ProductPageAction extends ActionInterface {
  payload: ProductPageInterface[];
}
