import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { HeaderInterface } from '../../model/interfaces';
import { AppState } from '../store';

const headerStateSelector = (state: AppState) => state.header;

export const currenciesSelector = createDraftSafeSelector(
  headerStateSelector,
  (state: HeaderInterface) => state.currencies
);
export const languagesSelector = createDraftSafeSelector(
  headerStateSelector,
  (state: HeaderInterface) => state.languages
);

export const logoSelector = createDraftSafeSelector(
  headerStateSelector,
  (state: HeaderInterface) => state.logo
);

export const menuSelector = createDraftSafeSelector(
  headerStateSelector,
  (state: HeaderInterface) => state.menuItems
);

export const statusSelector = createDraftSafeSelector(
  headerStateSelector,
  (state: HeaderInterface) => state.status
);
