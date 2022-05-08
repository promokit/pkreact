import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartState, setProductListingPage } from '../providers/context/reducers';
import { listingPageNumberSelector, statusSelector } from '../providers/context/selectors';
import {
  fetchAction,
  setCartAction,
  setCurrencyAction,
  setLanguageAction
} from '../providers/context/actions';
import { AddToCartAction } from '../model/enums';
import { AddToCartFormInterface } from '../model/interfaces';

export const usePsContext = () => {
  const dispatch = useDispatch();

  const status = useSelector(statusSelector);
  const productListingPage = useSelector(listingPageNumberSelector);

  const getContext = useCallback(() => dispatch(fetchAction()), [dispatch]);
  const setCart = useCallback(
    (cart: AddToCartFormInterface) => dispatch(setCartAction(cart)),
    [dispatch]
  );
  const setLanguage = useCallback((iso: string) => dispatch(setLanguageAction(iso)), [dispatch]);
  const setCurrency = useCallback((id: number) => dispatch(setCurrencyAction(id)), [dispatch]);
  const setPage = useCallback(
    (pageNumber: number) => dispatch(setProductListingPage(pageNumber)),
    [dispatch]
  );

  return {
    status,
    setCart,
    setPage,
    getContext,
    setLanguage,
    setCurrency,
    productListingPage
  };
};
