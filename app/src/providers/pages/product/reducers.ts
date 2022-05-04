import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { ProductPageInterface } from '../../../model/interfaces';
import { fetchProductPageAction } from './actions';
import { StatusType } from '../../../model/enums';
import { initialState } from './state';

const productpageReducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<ProductPageInterface>) =>
    builder
      .addCase(fetchProductPageAction.pending, (state) => {
        state.status = StatusType.Loading;
      })
      .addCase(fetchProductPageAction.fulfilled, (_, action) => {
        return {
          ...action.payload,
          status: StatusType.Success
        };
      })
      .addCase(fetchProductPageAction.rejected, (state) => {
        state.status = StatusType.Error;
      })
);

export default productpageReducer;
