import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAppDispatch } from '../providers/store';
import { ActionInterface, fetchProductPageAction } from '../providers/pages/product/actions';
import { productSelector, statusSelector } from '../providers/pages/product/selectors';

export const useProductPage = () => {
  const dispatch = useDispatch<ThunkAppDispatch>();

  const status = useSelector(statusSelector);
  const product = useSelector(productSelector);

  const fetchProductPage = useCallback(
    (arg: ActionInterface) => dispatch(fetchProductPageAction(arg)),
    [dispatch]
  );

  return {
    status,
    product,
    fetchProductPage
  } as const;
};
