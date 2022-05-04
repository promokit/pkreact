import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRestCategoryPage } from '../../../rest/rest';
import { CategoryPageInterface, RestResponse } from '../../../model/interfaces';
import { concatenateProductList } from './utils';

export interface ActionInterface {
  category?: CategoryPageInterface;
  categoryId: number;
  productListingPage: number;
}

export const fetchCategoryPageAction = createAsyncThunk(
  `categorypage/fetch`,
  async (arg: ActionInterface, { rejectWithValue }) => {
    const { category, categoryId, productListingPage } = arg;

    try {
      const { psdata, message, success }: RestResponse<CategoryPageInterface> =
        await getRestCategoryPage(categoryId, productListingPage);

      if (!success) {
        throw new Error(message);
      }

      if (!category) return psdata;

      return concatenateProductList(category, psdata);
      //return response.psdata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
