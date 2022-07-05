import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getRestNewProductsPage } from '../../../rest/rest';
import { NewProductsPageInterface, RestResponse } from '../../../model/interfaces';

export interface ActionInterface {
  page: number;
}

export const setProductListingPage = createAction<number>('newproductspage/setpage');

export const fetchNewProductsPageAction = createAsyncThunk(
  'newproductspage/fetch',
  async (arg: ActionInterface, { rejectWithValue }) => {
    try {
      const { psdata, message, success }: RestResponse<NewProductsPageInterface> =
        await getRestNewProductsPage(arg.page);

      if (!success) {
        throw new Error(message);
      }

      return psdata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
