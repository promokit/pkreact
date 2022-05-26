import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAppDispatch } from '../providers/store';
import {
  statusSelector,
  categorySelector,
  productListingPageSelector
} from '../providers/pages/category/selectors';
import {
  ActionInterface,
  setProductListingPage,
  fetchCategoryPageAction
} from '../providers/pages/category/actions';

export const useCategoryPage = () => {
  const dispatch = useDispatch<ThunkAppDispatch>();

  const status = useSelector(statusSelector);
  const category = useSelector(categorySelector);
  const productListingPage = useSelector(productListingPageSelector);

  const fetchCategoryPage = useCallback(
    (arg: ActionInterface) => dispatch(fetchCategoryPageAction(arg)),
    [dispatch]
  );
  const setPage = useCallback(
    (pageNumber: number) => dispatch(setProductListingPage(pageNumber)),
    [dispatch]
  );

  return {
    status,
    setPage,
    category,
    fetchCategoryPage,
    productListingPage
  } as const;
};
