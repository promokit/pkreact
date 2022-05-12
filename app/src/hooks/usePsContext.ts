import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartFormInterface } from '../model/interfaces';
import { setProductListingPage, setCartMessage } from '../providers/context/reducers';
import {
  listingPageNumberSelector,
  contextCartSelector,
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
  const cartContext = useSelector(contextCartSelector);
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
  const setMessage = useCallback(
    (message: string) => dispatch(setCartMessage(message)),
    [dispatch]
  );

  return {
    status,
    message,
    setCart,
    setPage,
    setMessage,
    getContext,
    setLanguage,
    setCurrency,
    cartContext,
    productListingPage
  };
};
