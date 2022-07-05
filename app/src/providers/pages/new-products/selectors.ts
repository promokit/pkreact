import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { NewProductsPageInterface, PagesInterface } from '../../../model/interfaces';
import { AppState } from '../../store';

const pagesSelector = (state: AppState) => state.pages;

export const newproductsSelector = createDraftSafeSelector(
  pagesSelector,
  (state: PagesInterface) => state.newproducts
);

export const statusSelector = createDraftSafeSelector(
  newproductsSelector,
  (state: NewProductsPageInterface) => state.status
);

export const paginationSelector = createDraftSafeSelector(
  newproductsSelector,
  (state: NewProductsPageInterface) => state.pagination
);

export const productListingPageSelector = createDraftSafeSelector(
  newproductsSelector,
  (state: NewProductsPageInterface) => state.productListingPage
);
