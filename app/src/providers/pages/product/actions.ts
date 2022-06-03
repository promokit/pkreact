import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductPageInterface, RestResponse } from '../../../model/interfaces';
import { getRestProductPage } from '../../../rest/rest';

export interface ActionInterface {
  productId: number;
}

export const setProductPriceAction = createAction<string>('productpage/setprice');
export const setProductQuantityAction = createAction<number>('productpage/setquantity');

export const fetchProductPageAction = createAsyncThunk(
  'productpage/fetch',
  async (arg: ActionInterface, { rejectWithValue }) => {
    try {
      const { psdata, message, success }: RestResponse<ProductPageInterface> =
        await getRestProductPage(arg.productId);

      if (!success) {
        throw new Error(message);
      }

      return psdata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
