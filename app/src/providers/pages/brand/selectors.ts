import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { BrandPageInterface, PagesInterface } from '../../../model/interfaces';
import { AppState } from '../../store';

const pagesSelector = (state: AppState) => state.pages;

export const brandSelector = createDraftSafeSelector(
  pagesSelector,
  (state: PagesInterface) => state.brand
);

export const statusSelector = createDraftSafeSelector(
  brandSelector,
  (state: BrandPageInterface) => state.status
);

export const productListingPageSelector = createDraftSafeSelector(
  brandSelector,
  (state: BrandPageInterface) => state.productListingPage
);
