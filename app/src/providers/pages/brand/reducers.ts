import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { BrandPageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';
import { fetchBrandPageAction, setProductListingPage } from './actions';
import { initialState } from './state';

const brandpageReducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<BrandPageInterface>) =>
    builder
      .addCase(setProductListingPage, (state, action) => {
        state.productListingPage = action.payload;
      })
      .addCase(fetchBrandPageAction.pending, (state) => {
        state.status = StatusType.Loading;
      })
      .addCase(fetchBrandPageAction.fulfilled, (_, action) => {
        return {
          ...action.payload,
          status: StatusType.Success
        };
      })
      .addCase(fetchBrandPageAction.rejected, (state) => {
        state.status = StatusType.Error;
      })
);

export default brandpageReducer;
