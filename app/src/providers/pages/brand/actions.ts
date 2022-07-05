import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getRestManufacturerPage } from '../../../rest/rest';
import { concatenateBrandProductList } from '../category/utils';
import { BrandPageInterface, RestResponse } from '../../../model/interfaces';

export interface ActionInterface {
  brand: BrandPageInterface;
  brandId: number;
  productListingPage: number;
}

export const setProductListingPage = createAction<number>('brandpage/setpage');

export const fetchBrandPageAction = createAsyncThunk(
  `brandpage/fetch`,
  async (arg: ActionInterface, { rejectWithValue }) => {
    const { brandId, brand, productListingPage } = arg;

    try {
      const { psdata, message, success }: RestResponse<BrandPageInterface> =
        await getRestManufacturerPage(brandId, productListingPage);

      if (!success) {
        throw new Error(message);
      }

      if (!brand) return psdata;
      return concatenateBrandProductList(brand, psdata);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
