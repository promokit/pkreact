import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { CategoryPageInterface } from '../../../model/interfaces';
import { fetchCategoryPageAction } from './actions';
import { StatusType } from '../../../model/enums';
import { initialState } from './state';

const categorypageReducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<CategoryPageInterface>) =>
    builder
      .addCase(fetchCategoryPageAction.pending, (state) => {
        state.status = StatusType.Loading;
      })
      .addCase(fetchCategoryPageAction.fulfilled, (state, action) => {
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
