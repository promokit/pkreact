import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CmsPageActionInterface } from '../model/interfaces';
import { cmsSelector } from '../providers/pages/cms/selectors';
import { fetchCmsPageAction } from '../providers/pages/cms/actions';

export const useCmsPage = () => {
  const dispatch = useDispatch();

  const cms = useSelector(cmsSelector);

  const fetchCmsPage = useCallback(
    (arg: CmsPageActionInterface) => dispatch(fetchCmsPageAction(arg)),
    [dispatch]
  );

  return {
    cms,
    fetchCmsPage
  };
};
