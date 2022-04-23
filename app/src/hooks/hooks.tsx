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
  setProductListingPage
} from '../providers/context/context.actions';
import { AppDispatch, AppState } from '../providers/store';
import { setHeader, setHeaderLoader, setHomePage } from '../providers/bootstrap/bootstrap.actions';
import {
  getRestCategoryPage,
  getRestContext,
  getRestHeader,
  getRestHomePage,
  getRestProductPage
} from '../rest/rest';
//import { setCategoryProducts } from '../providers/products/category/category.actions';
import { defaultMessages } from '../components/notifications/Notifications/Notifications';
import { setProductPage } from '../providers/pages/product/product.actions';

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
  const [isLoading, setLoader] = useState<boolean>(true);
  const [msg, setMessage] = useState<NotificationInterface>(defaultMessages);

  useEffect(() => {
    (async () => {
      setLoader(true);

      try {
        const { success, psdata } = await getRestHomePage();
        success
          ? dispatch(setHomePage(psdata))
          : setMessage((msg) => ({ ...msg, error: 'Unable to fetch home page' }));
      } catch (error) {
        setMessage((msg) => ({ ...msg, error: 'Server error...' }));
      } finally {
        setLoader(false);
      }
    })();
  }, [dispatch]);

  return { isLoading, msg };
};

export const useFetchHeader = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isLoading, setLoader] = useState<boolean>(true);
  const [msg, setMessage] = useState<NotificationInterface>(defaultMessages);

  useEffect(() => {
    (async () => {
      setLoader(true);
      dispatch(setHeaderLoader(true));
      try {
        const { success, psdata } = await getRestHeader();
        success
          ? dispatch(setHeader(psdata))
          : setMessage((msg) => ({ ...msg, error: 'Unable to fetch header' }));
      } catch (error) {
        setMessage((msg) => ({ ...msg, error: 'Server error...' }));
      } finally {
        setLoader(false);
        dispatch(setHeaderLoader(false));
      }
    })();
  }, [dispatch]);

  return { isLoading, msg };
};

export const useFetchCategoryProducts = (category_id: number) => {
  const dispatch: AppDispatch = useDispatch();
  const [isLoading, setLoader] = useState<boolean>(true);
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
  }, [category_id, dispatch, productListingPage]);

  return { isLoading, msg, category, productListingPage };
};

export const useFetchProduct = (productId: number) => {
  const dispatch: AppDispatch = useDispatch();
  const [isLoading, setLoader] = useState<boolean>(true);
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
        }: RestResponse<ProductPageInterface> = await getRestProductPage(productId);
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
  }, [productId]);

  useEffect(() => {
    if (!product) return;
    dispatch(setProductPage(product));
  }, [product, dispatch]);

  return { isLoading, msg, product };
};
