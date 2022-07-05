import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { fetchNewProductsPageAction, setProductListingPage } from './actions';
import { NewProductsPageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';
import { initialState } from './state';

const newProductsPageReducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<NewProductsPageInterface>) =>
    builder
      .addCase(setProductListingPage, (state, action) => {
        state.productListingPage = action.payload;
      })
      .addCase(fetchNewProductsPageAction.pending, (state) => {
        state.status = StatusType.Loading;
      })
      .addCase(fetchNewProductsPageAction.fulfilled, (_, action) => {
        return {
          ...action.payload,
          status: StatusType.Success
        };
      })
      .addCase(fetchNewProductsPageAction.rejected, (state) => {
        state.status = StatusType.Error;
      })
);

export default newProductsPageReducer;
