import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { fetchProductPageAction, setProductPriceAction, setProductQuantityAction } from './actions';
import { ProductPageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';
import { initialState } from './state';

const productpageReducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<ProductPageInterface>) =>
    builder
      .addCase(setProductPriceAction, (state, action) => {
        state.price = action.payload;
      })
      .addCase(setProductQuantityAction, (state, action) => {
        state.quantity = action.payload;
      })
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
