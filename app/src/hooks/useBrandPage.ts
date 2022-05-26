import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAppDispatch } from '../providers/store';
import {
  statusSelector,
  brandSelector,
  productListingPageSelector
} from '../providers/pages/brand/selectors';
import {
  ActionInterface,
  fetchBrandPageAction,
  setProductListingPage
} from '../providers/pages/brand/actions';

export const useBrandPage = () => {
  const dispatch = useDispatch<ThunkAppDispatch>();

  const status = useSelector(statusSelector);
  const brand = useSelector(brandSelector);
  const productListingPage = useSelector(productListingPageSelector);

  const fetchBrandPage = useCallback(
    (arg: ActionInterface) => dispatch(fetchBrandPageAction(arg)),
    [dispatch]
  );
  const setPage = useCallback(
    (pageNumber: number) => dispatch(setProductListingPage(pageNumber)),
    [dispatch]
  );

  return {
    brand,
    status,
    setPage,
    fetchBrandPage,
    productListingPage
  } as const;
};
