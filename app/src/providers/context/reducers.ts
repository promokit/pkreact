import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import {
  fetchAction,
  setLoginAction,
  setCartAction,
  setCurrencyAction,
  setLanguageAction,
  setLogoutAction,
  setRegisterAction
} from './actions';
import { ContextDetailsInterface } from '../../model/interfaces';
import { StatusType } from '../../model/enums';
import { initialState } from './state';

const contextSlice = createSlice({
  name: 'context',
  initialState,
  reducers: {
    setCartState(state: ContextDetailsInterface, action) {
      state.cart = action.payload;
    },
    setCartMessage(state: ContextDetailsInterface, action) {
      state.cart.message = action.payload;
    },
    setProductListingPage(state: ContextDetailsInterface, action) {
      state.productListingPage = action.payload;
    },
    setLoadedState(state: ContextDetailsInterface, action) {
      state.status = action.payload;
    },
    setErrorState(state: ContextDetailsInterface, action) {
      state.cart = action.payload;
    },
    setCustomerMessage(state: ContextDetailsInterface, action) {
      state.customer.message = action.payload;
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<any>) =>
    builder
      .addCase(fetchAction.pending, (state) => {
        state.status = StatusType.Loading;
      })
      .addCase(fetchAction.fulfilled, (state, action) => {
        // return an entirely new state
        return {
          ...action.payload,
          status: StatusType.Success,
          productListingPage: state.productListingPage
        };
      })
      .addCase(fetchAction.rejected, (state) => {
        state.status = StatusType.Error;
      })
      // Set Cart
      .addCase(setCartAction.pending, (state) => {
        state.cart.status = StatusType.Loading;
      })
      .addCase(setCartAction.fulfilled, (state, action) => {
        // return an entirely new state
        state.cart = action.payload.psdata;
        state.cart.status = StatusType.Success;
        state.cart.message = action.payload.message;
      })
      .addCase(setCartAction.rejected, (state) => {
        state.cart.status = StatusType.Error;
      })
      // Set Currency
      .addCase(setCurrencyAction.pending, (state) => {
        state.status = StatusType.Loading;
      })
      .addCase(setCurrencyAction.fulfilled, (state, action) => {
        state.status = StatusType.Success;
        state.currency = action.payload;
      })
      .addCase(setCurrencyAction.rejected, (state) => {
        state.status = StatusType.Error;
      })
      // Set Language
      .addCase(setLanguageAction.pending, (state) => {
        state.status = StatusType.Loading;
      })
      .addCase(setLanguageAction.fulfilled, (state, action) => {
        state.status = StatusType.Success;
        state.language = action.payload;
      })
      .addCase(setLanguageAction.rejected, (state) => {
        state.status = StatusType.Error;
      })
      // Login
      .addCase(setLoginAction.pending, (state) => {
        state.customer.status = StatusType.Loading;
      })
      .addCase(setLoginAction.fulfilled, (state, action) => {
        state.customer.user = action.payload.psdata.user;
        state.customer.message = action.payload.psdata.message;
        state.customer.status = StatusType.Success;
      })
      .addCase(setLoginAction.rejected, (state) => {
        state.customer.status = StatusType.Error;
      })
      // Logout
      .addCase(setLogoutAction.pending, (state) => {
        state.customer.status = StatusType.Loading;
      })
      .addCase(setLogoutAction.fulfilled, (state) => {
        state.customer = initialState.customer;
      })
      .addCase(setLogoutAction.rejected, (state) => {
        state.customer.status = StatusType.Error;
      })
      // Register
      .addCase(setRegisterAction.pending, (state) => {
        state.customer.status = StatusType.Loading;
      })
      .addCase(setRegisterAction.fulfilled, (state, action) => {
        state.customer.user = action.payload.psdata.user;
        state.customer.message = action.payload.psdata.message;
        state.customer.status = StatusType.Success;
      })
      .addCase(setRegisterAction.rejected, (state) => {
        state.customer.status = StatusType.Error;
      })
});

export const { setCartState, setCartMessage, setCustomerMessage, setProductListingPage } =
  contextSlice.actions;

export default contextSlice.reducer;
