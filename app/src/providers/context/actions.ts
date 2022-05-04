import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContextInterface, RestResponse } from '../../model/interfaces';
import { getRestContext, setCurrency, setLanguage } from '../../rest/rest';

export const fetchAction = createAsyncThunk(`context/fetch`, async (_, { rejectWithValue }) => {
  try {
    const response: RestResponse<ContextInterface> = await getRestContext();

    if (!response.success) {
      throw new Error('Unable to fetch context');
    }

    return response.psdata;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const setCurrencyAction = createAsyncThunk(
  'context/setCurrency',
  async (currencyId: number, { rejectWithValue }) => {
    try {
      const { currency, success } = await setCurrency(currencyId);

      if (!success) {
        throw new Error('Unable to get currency');
      }

      return currency;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const setLanguageAction = createAsyncThunk(
  'context/setLanguage',
  async (isoCode: string, { rejectWithValue }) => {
    try {
      const { language, success } = await setLanguage(isoCode);

      if (!success) {
        throw new Error('Unable to get language');
      }

      return language;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
