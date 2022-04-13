import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContextInterface } from '../model/interfaces';
import { AppDispatch, AppState } from '../providers/store';
import { getRestContext, getRestHeader, getRestHomePage } from '../rest/rest';
import { setHeader, setHomePage } from '../providers/bootstrap/bootstrap.actions';
import {
  setContextState,
  setErrorState,
  setLoadedState
} from '../providers/context/context.actions';

// TODO: Optimize hooks
export const useFetchContext = (): ContextInterface => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { success, psdata } = await getRestContext();
        success ? dispatch(setContextState(psdata)) : dispatch(setErrorState(true));
      } catch (error) {
        dispatch(setErrorState(true));
      }
    })();
  }, [dispatch]);

  return useSelector<AppState, ContextInterface>((state) => state.context);
};

export const useFetchHome = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setLoadedState(false));
      dispatch(setErrorState(false));

      try {
        const home = await getRestHomePage();
        home.success ? dispatch(setHomePage(home.psdata)) : dispatch(setErrorState(true));
      } catch (error) {
        dispatch(setErrorState(true));
      } finally {
        dispatch(setLoadedState(true));
      }
    })();
  }, [dispatch]);

  return useSelector<AppState, ContextInterface>((state) => state.context);
};

export const useFetchHeader = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setLoadedState(false));
      dispatch(setErrorState(false));

      try {
        const header = await getRestHeader();
        header.success ? dispatch(setHeader(header.psdata)) : dispatch(setErrorState(true));
      } catch (error) {
        dispatch(setErrorState(true));
      } finally {
        dispatch(setLoadedState(true));
      }
    })();
  }, [dispatch]);

  return useSelector<AppState, ContextInterface>((state) => state.context);
};
