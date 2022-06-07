import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRestContactPage } from '../../../rest/rest';
import { ContactPageInterface, RestResponse } from '../../../model/interfaces';

export const fetchContactPageAction = createAsyncThunk(
  `contact/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response: RestResponse<ContactPageInterface> = await getRestContactPage();

      if (!response.success) {
        throw new Error('Unable to fetch Contact Page');
      }

      return response.psdata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
