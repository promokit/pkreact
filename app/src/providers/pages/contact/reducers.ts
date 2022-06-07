import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { ContactPageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';
import { fetchContactPageAction } from './actions';
import { initialState } from './state';

const contactpageReducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<ContactPageInterface>) =>
    builder
      .addCase(fetchContactPageAction.pending, (state) => {
        state.status = StatusType.Loading;
      })
      .addCase(fetchContactPageAction.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(fetchContactPageAction.rejected, (state) => {
        state.status = StatusType.Error;
      })
);

export default contactpageReducer;
