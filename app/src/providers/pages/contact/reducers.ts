import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import { fetchContactPageAction, submitContactFormAction } from './actions';
import { ContactPageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';
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
      .addCase(submitContactFormAction.pending, (state) => {
        state.status = StatusType.Loading;
      })
      .addCase(submitContactFormAction.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(submitContactFormAction.rejected, (state) => {
        state.status = StatusType.Error;
      })
);

export default contactpageReducer;
