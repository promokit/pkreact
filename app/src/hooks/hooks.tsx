import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CategoryInterface,
  ContextInterface,
  NotificationInterface,
  ProductPageInterface,
  RestResponse
} from '../model/interfaces';
import {
  setContextState,
  setErrorState,
  setLoadedState,
  setProductListingPage
} from '../providers/context/context.actions';
import { AppDispatch, AppState } from '../providers/store';
import { setHeader, setHomePage } from '../providers/bootstrap/bootstrap.actions';
import {
  getRestCategoryPage,
  getRestContext,
  getRestHeader,
  getRestHomePage,
  getRestProductPage
} from '../rest/rest';
//import { setCategoryProducts } from '../providers/products/category/category.actions';
import { defaultMessages } from '../components/notifications/Notifications/Notifications';

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

export const useFetchCategoryProducts = (category_id: number) => {
  const dispatch: AppDispatch = useDispatch();
  const [isLoading, setLoader] = useState<boolean>(false);
  const [category, setCategory] = useState<CategoryInterface>();
  const [msg, setMessage] = useState<NotificationInterface>(defaultMessages);
  const { productListingPage } = useSelector<AppState, ContextInterface>((state) => state.context);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          success,
          message = '',
          psdata
        }: RestResponse<CategoryInterface> = await getRestCategoryPage(
          category_id,
          productListingPage
        );

        const setStates = (data: CategoryInterface) => {
          setCategory((current) => {
            if (!current) return { ...data };

            // TODO: improve resetting product listing page function. Currently causing a warning
            if (current.id_category !== data.id_category) {
              dispatch(setProductListingPage(1));
              return { ...data };
            }

            return {
              ...current,
              products: [...current.products, ...data.products],
              pagination: { ...data.pagination },
              facets: { ...data.facets }
            };
          });
        };

        success
          ? setStates(psdata)
          : setMessage((msg) => ({
              ...msg,
              error: message
            }));
      } catch (error) {
        setMessage((msg) => ({ ...msg, error: 'Server error...' }));
      } finally {
        setLoader(false);
      }
    })();
  }, [category_id, productListingPage]);

  return { isLoading, msg, category, productListingPage };
};

export const useFetchProduct = (product_id: number) => {
  const [isLoading, setLoader] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductPageInterface>();
  const [msg, setMessage] = useState<NotificationInterface>(defaultMessages);
  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          success,
          message = '',
          psdata
        }: RestResponse<ProductPageInterface> = await getRestProductPage(product_id);
        success
          ? setProduct(psdata)
          : setMessage((msg) => ({
              ...msg,
              error: message
            }));
      } catch (error) {
        setMessage((msg) => ({ ...msg, error: 'Server error...' }));
      } finally {
        setLoader(false);
      }
    })();
  }, [product_id]);
  return { isLoading, msg, product };
};
