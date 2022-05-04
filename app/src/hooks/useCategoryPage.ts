import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAppDispatch } from '../providers/store';
import { statusSelector, categorySelector } from '../providers/pages/category/selectors';
import { ActionInterface, fetchCategoryPageAction } from '../providers/pages/category/actions';

export const useCategoryPage = () => {
  const dispatch = useDispatch<ThunkAppDispatch>();

  const status = useSelector(statusSelector);
  const category = useSelector(categorySelector);
  const productListingPage = useSelector(categorySelector);

  const fetchCategoryPage = useCallback(
    (arg: ActionInterface) => dispatch(fetchCategoryPageAction(arg)),
    [dispatch]
  );

  return {
    status,
    category,
    productListingPage,
    fetchCategoryPage
  } as const;
};
