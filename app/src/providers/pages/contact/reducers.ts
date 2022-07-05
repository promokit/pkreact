import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { fetchContactPageAction, submitContactFormAction } from './actions';
import { ContactPageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';
import { initialState } from './state';

const contactPageSlice = createSlice({
  name: 'contactPage',
  initialState,
  reducers: {
    resetContactFormMessageAction(state: ContactPageInterface) {
      state.contact.formMessage = initialState.contact.formMessage;
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<ContactPageInterface>) =>
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
        state.contact.formStatus = StatusType.Loading;
      })
      .addCase(submitContactFormAction.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(submitContactFormAction.rejected, (state) => {
        state.contact.formStatus = StatusType.Error;
      })
});

export const { resetContactFormMessageAction } = contactPageSlice.actions;

export default contactPageSlice.reducer;
