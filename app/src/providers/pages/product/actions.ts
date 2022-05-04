import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRestProductPage } from '../../../rest/rest';
import { ProductPageInterface, RestResponse } from '../../../model/interfaces';

export interface ActionInterface {
  productId: number;
}

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
