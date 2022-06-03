import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAppDispatch } from '../providers/store';
import { productSelector, statusSelector } from '../providers/pages/product/selectors';
import {
  ActionInterface,
  fetchProductPageAction,
  setProductPriceAction,
  setProductQuantityAction
} from '../providers/pages/product/actions';

export const useProductPage = () => {
  const dispatch = useDispatch<ThunkAppDispatch>();

  const status = useSelector(statusSelector);
  const product = useSelector(productSelector);

  const fetchProductPage = useCallback(
    (arg: ActionInterface) => dispatch(fetchProductPageAction(arg)),
    [dispatch]
  );

  const setProductPrice = useCallback(
    (arg: string) => dispatch(setProductPriceAction(arg)),
    [dispatch]
  );

  const setProductQuantity = useCallback(
    (arg: number) => dispatch(setProductQuantityAction(arg)),
    [dispatch]
  );

  return {
    status,
    product,
    setProductPrice,
    fetchProductPage,
    setProductQuantity
  } as const;
};
