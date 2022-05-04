import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomePageAction } from '../providers/pages/home/actions';
import { homePageStatusSelector } from '../providers/pages/home/selectors';

export const useHomePage = () => {
  const dispatch = useDispatch();

  const status = useSelector(homePageStatusSelector);

  const fetchHomePage = useCallback(() => {
    return dispatch(fetchHomePageAction());
  }, [dispatch]);

  return {
    status,
    fetchHomePage
  } as const;
};
