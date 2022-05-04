import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { PagesInterface, ProductPageInterface } from '../../../model/interfaces';
import { AppState } from '../../store';

const pagesSelector = (state: AppState) => state.pages;

export const productSelector = createDraftSafeSelector(
  pagesSelector,
  (state: PagesInterface) => state.product
);

export const statusSelector = createDraftSafeSelector(
  productSelector,
  (state: ProductPageInterface) => state.status
);

export const imagesSelector = createDraftSafeSelector(
  productSelector,
  (state: ProductPageInterface) => state.images
);
