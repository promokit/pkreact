import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAppDispatch } from '../providers/store';
import {
  ActionInterface,
  fetchNewProductsPageAction,
  setProductListingPage
} from '../providers/pages/new-products/actions';
import {
  paginationSelector,
  productListingPageSelector,
  statusSelector
} from '../providers/pages/new-products/selectors';

export const useNewProductsPage = () => {
  const dispatch = useDispatch<ThunkAppDispatch>();

  const status = useSelector(statusSelector);
  const pagination = useSelector(paginationSelector);
  const productListingPage = useSelector(productListingPageSelector);

  const fetchNewProductsPage = useCallback(
    (arg: ActionInterface) => dispatch(fetchNewProductsPageAction(arg)),
    [dispatch]
  );
  const setPage = useCallback(
    (pageNumber: number) => dispatch(setProductListingPage(pageNumber)),
    [dispatch]
  );

  return {
    setPage,
    status,
    pagination,
    productListingPage,
    fetchNewProductsPage
  } as const;
};
