import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { CmsPageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';
import { fetchCmsPageAction } from './actions';
import { initialState } from './state';

const cmspageReducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<CmsPageInterface>) =>
    builder
      .addCase(fetchCmsPageAction.pending, (state) => {
        state.status = StatusType.Loading;
      })
      .addCase(fetchCmsPageAction.fulfilled, (_, action) => {
        return {
          ...action.payload,
          status: StatusType.Success
        };
      })
      .addCase(fetchCmsPageAction.rejected, (state) => {
        state.status = StatusType.Error;
      })
);

export default cmspageReducer;
