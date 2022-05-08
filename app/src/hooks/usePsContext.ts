import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartFormInterface } from '../model/interfaces';
import { setProductListingPage } from '../providers/context/reducers';
import {
  listingPageNumberSelector,
  messageSelector,
  statusSelector
} from '../providers/context/selectors';
import {
  fetchAction,
  setCartAction,
  setCurrencyAction,
  setLanguageAction
} from '../providers/context/actions';

export const usePsContext = () => {
  const dispatch = useDispatch();

  const status = useSelector(statusSelector);
  const message = useSelector(messageSelector);
  const productListingPage = useSelector(listingPageNumberSelector);

  const getContext = useCallback(() => dispatch(fetchAction()), [dispatch]);
  const setLanguage = useCallback((iso: string) => dispatch(setLanguageAction(iso)), [dispatch]);
  const setCurrency = useCallback((id: number) => dispatch(setCurrencyAction(id)), [dispatch]);
  const setCart = useCallback(
    (cart: AddToCartFormInterface) => dispatch(setCartAction(cart)),
    [dispatch]
  );
  const setPage = useCallback(
    (pageNumber: number) => dispatch(setProductListingPage(pageNumber)),
    [dispatch]
  );

  return {
    status,
    message,
    setCart,
    setPage,
    getContext,
    setLanguage,
    setCurrency,
    productListingPage
  };
};
