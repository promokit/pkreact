import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusSelector } from '../providers/header/selector';
import { fetchHeaderAction } from '../providers/header/actions';

export const useHeader = () => {
  const dispatch = useDispatch();

  const status = useSelector(statusSelector);

  const fetchHeader = useCallback(() => {
    return dispatch(fetchHeaderAction());
  }, [dispatch]);

  return {
    status,
    fetchHeader
  } as const;
};
