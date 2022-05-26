import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { fetchCategoryPageAction, setProductListingPage } from './actions';
import { CategoryPageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';
import { initialState } from './state';

const categorypageReducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<CategoryPageInterface>) =>
    builder
      .addCase(setProductListingPage, (state, action) => {
        state.productListingPage = action.payload;
      })
      .addCase(fetchCategoryPageAction.pending, (state) => {
        state.status = StatusType.Loading;
      })
      .addCase(fetchCategoryPageAction.fulfilled, (_, action) => {
        return {
          ...action.payload,
          status: StatusType.Success
        };
      })
      .addCase(fetchCategoryPageAction.rejected, (state) => {
        state.status = StatusType.Error;
      })
);

export default categorypageReducer;
