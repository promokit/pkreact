import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartFormInterface, LoginFormInterface } from '../model/interfaces';
import {
  setCartMessageAction,
  setCustomerMessage,
  setSubscriptionMessageAction
} from '../providers/context/reducers';
import {
  contextCartSelector,
  messageSelector,
  statusSelector,
  contextUserSelector,
  contextUserStatusSelector,
  contextUserMessageSelector,
  contextLanguageSelector
} from '../providers/context/selectors';
import {
  fetchAction,
  setCartAction,
  setCurrencyAction,
  setLanguageAction,
  setLoginAction,
  setLogoutAction,
  setRegisterAction
} from '../providers/context/actions';

export const usePsContext = () => {
  const dispatch = useDispatch();

  const status = useSelector(statusSelector);
  const message = useSelector(messageSelector);
  const cartContext = useSelector(contextCartSelector);
  const userContext = useSelector(contextUserSelector);
  const getLanguage = useSelector(contextLanguageSelector);
  const userStatus = useSelector(contextUserStatusSelector);
  const userMessage = useSelector(contextUserMessageSelector);

  const getContext = useCallback(() => dispatch(fetchAction()), [dispatch]);
  const setLanguage = useCallback((iso: string) => dispatch(setLanguageAction(iso)), [dispatch]);
  const setCurrency = useCallback((id: number) => dispatch(setCurrencyAction(id)), [dispatch]);
  const setLogout = useCallback(() => dispatch(setLogoutAction()), [dispatch]);
  const setLogin = useCallback(
    (args: LoginFormInterface) => dispatch(setLoginAction(args)),
    [dispatch]
  );
  const setRegister = useCallback(
    (args: LoginFormInterface) => dispatch(setRegisterAction(args)),
    [dispatch]
  );
  const setUserMessage = useCallback(
    (message: string) => dispatch(setCustomerMessage(message)),
    [dispatch]
  );
  const setSubscriptionMessage = useCallback(
    (message: string) => dispatch(setSubscriptionMessageAction(message)),
    [dispatch]
  );
  const setCart = useCallback(
    (cart: AddToCartFormInterface) => dispatch(setCartAction(cart)),
    [dispatch]
  );
  const setCartMessage = useCallback(
    (message: string) => dispatch(setCartMessageAction(message)),
    [dispatch]
  );

  return {
    status,
    message,
    setCart,
    setLogin,
    setLogout,
    getContext,
    setRegister,
    setLanguage,
    setCurrency,
    getLanguage,
    userStatus,
    userContext,
    userMessage,
    cartContext,
    setCartMessage,
    setUserMessage,
    setSubscriptionMessage
  };
};
