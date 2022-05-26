import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { CategoryPageInterface, PagesInterface } from '../../../model/interfaces';
import { AppState } from '../../store';

const pagesSelector = (state: AppState) => state.pages;

export const categorySelector = createDraftSafeSelector(
  pagesSelector,
  (state: PagesInterface) => state.category
);

export const statusSelector = createDraftSafeSelector(
  categorySelector,
  (state: CategoryPageInterface) => state.status
);

export const productListingPageSelector = createDraftSafeSelector(
  categorySelector,
  (state: CategoryPageInterface) => state.productListingPage
);
