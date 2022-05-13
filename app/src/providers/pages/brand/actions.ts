import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRestManufacturerPage } from '../../../rest/rest';
import { BrandPageInterface, RestResponse } from '../../../model/interfaces';
import { concatenateBrandProductList } from '../category/utils';

export interface ActionInterface {
  brand: BrandPageInterface;
  brandId: number;
  productListingPage: number;
}

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

      return psdata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
