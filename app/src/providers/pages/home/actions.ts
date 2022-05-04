import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRestHomePage } from '../../../rest/rest';
import { HomePageInterface, RestResponse } from '../../../model/interfaces';

export const fetchHomePageAction = createAsyncThunk(
  `homepage/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response: RestResponse<HomePageInterface> = await getRestHomePage();

      if (!response.success) {
        throw new Error('Unable to fetch home page');
      }

      return response.psdata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
