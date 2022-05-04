import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { fetchAction, setCurrencyAction, setLanguageAction } from './actions';
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
    setProductListingPage(state: ContextDetailsInterface, action) {
      state.productListingPage = action.payload;
    },
    setLoadedState(state: ContextDetailsInterface, action) {
      state.status = action.payload;
    },
    setErrorState(state: ContextDetailsInterface, action) {
      state.cart = action.payload;
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
});

export const { setCartState, setProductListingPage } = contextSlice.actions;

export default contextSlice.reducer;
