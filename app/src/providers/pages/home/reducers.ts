import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { HomePageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';
import { fetchHomePageAction } from './actions';
import { initialState } from './state';

const homepageReducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<HomePageInterface>) =>
    builder
      .addCase(fetchHomePageAction.pending, (state) => {
        state.status = StatusType.Loading;
      })
      .addCase(fetchHomePageAction.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(fetchHomePageAction.rejected, (state) => {
        state.status = StatusType.Error;
      })
);

export default homepageReducer;
