import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { ContactPageInterface } from '../../../model/interfaces';
import { AppState } from '../../store';

export const contactPageSelector = (state: AppState) => state.pages.contact;
export const contactsSelector = (state: AppState) => state.pages.contact.contact.contacts;
export const formMessageSelector = (state: AppState) => state.pages.contact.contact.formMessage;
export const formStatusSelector = (state: AppState) => state.pages.contact.contact.formStatus;
export const tokenSelector = (state: AppState) => state.pages.contact.token;

export const contactPageStatusSelector = createDraftSafeSelector(
  contactPageSelector,
  (state: ContactPageInterface) => state.status
);
