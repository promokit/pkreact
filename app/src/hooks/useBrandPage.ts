import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAppDispatch } from '../providers/store';
import {
  brandSelector,
  statusSelector,
  paginationSelector,
  productListingPageSelector
} from '../providers/pages/brand/selectors';
import {
  ActionInterface,
  fetchBrandPageAction,
  setProductListingPage
} from '../providers/pages/brand/actions';

export const useBrandPage = () => {
  const dispatch = useDispatch<ThunkAppDispatch>();

  const brand = useSelector(brandSelector);
  const status = useSelector(statusSelector);
  const pagination = useSelector(paginationSelector);
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
    pagination,
    fetchBrandPage,
    productListingPage
  } as const;
};
