import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRestContactPage, submitContactForm } from '../../../rest/rest';
import {
  ContactFormInterface,
  ContactPageInterface,
  RestResponse
} from '../../../model/interfaces';

export const fetchContactPageAction = createAsyncThunk(
  'contactpage/fetch',
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

export const submitContactFormAction = createAsyncThunk(
  'contactpage/submitform',
  async (arg: ContactFormInterface, { rejectWithValue }) => {
    try {
      const response: RestResponse<ContactPageInterface> = await submitContactForm(arg);

      if (!response.success) {
        throw new Error('Unable to fetch Contact Page');
      }

      return response.psdata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
