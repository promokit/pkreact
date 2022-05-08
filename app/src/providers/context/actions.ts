import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddToCartAction } from '../../model/enums';
import { AddToCartFormInterface, ContextInterface, RestResponse } from '../../model/interfaces';
import { getRestCartUpdate, getRestContext, setCurrency, setLanguage } from '../../rest/rest';

export const fetchAction = createAsyncThunk(`context/fetch`, async (_, { rejectWithValue }) => {
  try {
    const { success, psdata }: RestResponse<ContextInterface> = await getRestContext();

    if (!success) {
      throw new Error('Unable to fetch context');
    }

    return psdata;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const setCartAction = createAsyncThunk(
  'context/setCart',
  async (arg: AddToCartFormInterface, { rejectWithValue }) => {
    try {
      const { success, psdata } = await getRestCartUpdate(arg);

      if (!success) {
        throw new Error('Unable to to update cart');
      }

      return psdata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
