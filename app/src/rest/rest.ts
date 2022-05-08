import { APP_DIR } from '../constants/constants';
import {
  AddToCartFormInterface,
  CartInterface,
  CategoryPageInterface,
  ContextInterface,
  HeaderInterface,
  HomePageInterface,
  ProductPageInterface,
  RestResponse,
  SearchResultsInterface
} from '../model/interfaces';

async function psFetch<T>(query: string): Promise<T> {
  const restSlug = 'rest';
  const response = await fetch(`${APP_DIR}${restSlug}/${query}`);
  return await response.json();
}

export const getRestContext = async (): Promise<RestResponse<ContextInterface>> => {
  const query: string = 'context';
  return await psFetch<RestResponse<ContextInterface>>(query);
};

export const getRestHomePage = async (): Promise<RestResponse<HomePageInterface>> => {
  const query: string = 'bootstrap?menu_with_images=single';
  return await psFetch<RestResponse<HomePageInterface>>(query);
};

export const getRestCategoryPage = async (
  id: number,
  page: number
): Promise<RestResponse<CategoryPageInterface>> => {
  const query: string = `categoryProducts?id_category=${id}&page=${page}&resultsPerPage=4`;
  return await psFetch<RestResponse<CategoryPageInterface>>(query);
};

export const getRestProductPage = async (
  id: number
): Promise<RestResponse<ProductPageInterface>> => {
  const query: string = `productdetail?product_id=${id}`;
  return await psFetch<RestResponse<ProductPageInterface>>(query);
};

export const getRestHeader = async (): Promise<RestResponse<HeaderInterface>> => {
  const query: string = 'header';
  return await psFetch<RestResponse<HeaderInterface>>(query);
};

export const getRestCart = async (): Promise<RestResponse<CartInterface>> => {
  const query: string = 'cart';
  return await psFetch<RestResponse<CartInterface>>(query);
};

export const getRestCartUpdate = async ({
  id_product,
  id_product_attribute,
  toDelete,
  qty,
  op
}: AddToCartFormInterface): Promise<RestResponse<CartInterface>> => {
  const attrId: string = id_product_attribute
    ? `&id_product_attribute=${id_product_attribute}`
    : '';
  const operation: string = toDelete ? '&delete=1' : `&op=${op}&update=1&qty=${qty}`;
  const query: string = `cart?id_product=${id_product}${attrId}${operation}&action=update`;
  return await psFetch<RestResponse<CartInterface>>(query);
};

export const getRestSearch = async (s: string): Promise<RestResponse<SearchResultsInterface>> => {
  const query: string = `productSearch?s=${s}`;
  return await psFetch<RestResponse<SearchResultsInterface>>(query);
};

export const setLanguage = async (isolang: string) => {
  const query: string = `context?isolang=${isolang}`;
  const {
    psdata: { language },
    success
  } = await psFetch(query);
  return { language, success };
};

export const setCurrency = async (currencyId: number) => {
  const query: string = `context?setCurrency=${currencyId}`;
  const {
    psdata: { currency },
    success
  } = await psFetch(query);
  return { currency, success };
};
