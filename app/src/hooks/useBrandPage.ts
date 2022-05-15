import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAppDispatch } from '../providers/store';
import { statusSelector, brandSelector } from '../providers/pages/brand/selectors';
import { ActionInterface, fetchBrandPageAction } from '../providers/pages/brand/actions';

export const useBrandPage = () => {
  const dispatch = useDispatch<ThunkAppDispatch>();

  const status = useSelector(statusSelector);
  const brand = useSelector(brandSelector);

  const fetchBrandPage = useCallback(
    (arg: ActionInterface) => dispatch(fetchBrandPageAction(arg)),
    [dispatch]
  );

  return {
    status,
    brand,
    fetchBrandPage
  } as const;
};
