import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRestHeader } from '../../rest/rest';
import { HeaderInterface, RestResponse } from '../../model/interfaces';

export const fetchHeaderAction = createAsyncThunk(
  `header/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response: RestResponse<HeaderInterface> = await getRestHeader();

      if (!response.success) {
        throw new Error('Unable to fetch context');
      }

      return response.psdata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
