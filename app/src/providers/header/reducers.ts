import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { StatusType } from '../../model/enums';
import { fetchHeaderAction } from './actions';
import { initialState } from './state';

const headerReducer = createReducer(initialState, (builder: ActionReducerMapBuilder<any>) =>
  builder
    .addCase(fetchHeaderAction.pending, (state) => {
      return { ...state, status: StatusType.Loading };
    })
    .addCase(fetchHeaderAction.fulfilled, (state, action) => {
      return { ...state, ...action.payload, status: StatusType.Success };
    })
    .addCase(fetchHeaderAction.rejected, (state) => {
      return { ...state, status: StatusType.Error };
    })
);

export default headerReducer;
