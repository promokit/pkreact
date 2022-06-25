import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  AddToCartFormInterface,
  ContextInterface,
  LoginFormInterface,
  RestResponse,
  SubscribeInterface,
  SubscriptionInterface
} from '../../model/interfaces';
import {
  getRestCartUpdate,
  getRestContext,
  getRestLogin,
  getRestLogout,
  getRestRegister,
  setCurrency,
  setLanguage,
  submitSubscriptionForm
} from '../../rest/rest';

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
      const response = await getRestCartUpdate(arg);

      if (!response.success) {
        throw new Error('Unable to to update cart');
      }

      return response;
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

export const setLoginAction = createAsyncThunk(
  'context/login',
  async (args: LoginFormInterface, { rejectWithValue }) => {
    try {
      const response = await getRestLogin(args);

      if (!response.success) {
        throw new Error('Unable to make login request');
      }

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const setLogoutAction = createAsyncThunk(
  'context/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getRestLogout();

      if (!response.success) {
        throw new Error('Unable to make logout request');
      }

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const setRegisterAction = createAsyncThunk(
  'context/register',
  async (args: LoginFormInterface, { rejectWithValue }) => {
    try {
      const response = await getRestRegister(args);

      if (!response.success) {
        throw new Error('Unable to make register request');
      }

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getRegisterAction = createAsyncThunk(
  'context/register',
  async (args: LoginFormInterface, { rejectWithValue }) => {
    try {
      const response = await getRestRegister(args);

      if (!response.success) {
        throw new Error('Unable to make register request');
      }

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const subscribeAction = createAsyncThunk(
  'context/subscribe',
  async (arg: SubscribeInterface, { rejectWithValue }) => {
    try {
      const response: RestResponse<SubscriptionInterface> = await submitSubscriptionForm(arg);

      if (!response.success) {
        throw new Error(response.psdata.formMessage);
      }

      return response.psdata;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
