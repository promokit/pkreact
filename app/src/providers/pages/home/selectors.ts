import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { HomePageInterface } from '../../../model/interfaces';
import { AppState } from '../../store';

export const homePageSelector = (state: AppState) => state.pages.home;

export const homePageBannerSelector = createDraftSafeSelector(
  homePageSelector,
  (state: HomePageInterface) => state.banner
);

export const homePageFeaturedSelector = createDraftSafeSelector(
  homePageSelector,
  (state: HomePageInterface) => state.featuredProductsList
);

export const homePageStatusSelector = createDraftSafeSelector(
  homePageSelector,
  (state: HomePageInterface) => state.status
);
