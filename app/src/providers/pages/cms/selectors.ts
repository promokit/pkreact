import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { PagesInterface } from '../../../model/interfaces';
import { AppState } from '../../store';

const pagesSelector = (state: AppState) => state.pages;

export const cmsSelector = createDraftSafeSelector(
  pagesSelector,
  (state: PagesInterface) => state.cms
);
