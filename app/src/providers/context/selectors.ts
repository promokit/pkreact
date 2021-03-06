import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { ContextDetailsInterface as Ctx } from '../../model/interfaces';
import { AppState } from '../store';

const contextSelector = (state: AppState) => state.context;

export const contextCurrencySelector = createDraftSafeSelector(
  contextSelector,
  (state: Ctx) => state.currency
);

export const contextLanguageSelector = createDraftSafeSelector(
  contextSelector,
  (state: Ctx) => state.language
);

export const contextCartSelector = createDraftSafeSelector(
  contextSelector,
  (state: Ctx) => state.cart
);

export const contextUserSelector = createDraftSafeSelector(
  contextSelector,
  (state: Ctx) => state.customer.user || { id: 0 }
);

export const contextUserStatusSelector = createDraftSafeSelector(
  contextSelector,
  (state: Ctx) => state.customer.status
);

export const contextUserMessageSelector = createDraftSafeSelector(
  contextSelector,
  (state: Ctx) => state.customer.message
);

export const statusCartSelector = createDraftSafeSelector(
  contextSelector,
  (state: Ctx) => state.cart.status
);

export const statusSelector = createDraftSafeSelector(
  contextSelector,
  (state: Ctx) => state.status
);

export const messageSelector = createDraftSafeSelector(
  contextSelector,
  (state: Ctx) => state.message || ''
);

export const subscriptionSelector = createDraftSafeSelector(
  contextSelector,
  (state: Ctx) => state.subscription
);

export const subscriptionMessageSelector = createDraftSafeSelector(
  contextSelector,
  (state: Ctx) => state.subscription.formMessage
);
