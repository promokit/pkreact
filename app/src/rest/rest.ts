import { BASE_URL } from '../constants/constants';
import { AddToCartAction } from '../model/enums';
import {
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
  const response = await fetch(`${BASE_URL}${query}`);
  return await response.json();
}

export const getRestContext = async (): Promise<RestResponse<ContextInterface>> => {
  const query: string = 'rest/context';
  return await psFetch<RestResponse<ContextInterface>>(query);
};

export const getRestHomePage = async (): Promise<RestResponse<HomePageInterface>> => {
  const query: string = 'rest/bootstrap?menu_with_images=single';
  return await psFetch<RestResponse<HomePageInterface>>(query);
};

export const getRestCategoryPage = async (
  id: number,
  page: number
): Promise<RestResponse<CategoryPageInterface>> => {
  const query: string = `rest/categoryProducts?id_category=${id}&page=${page}&resultsPerPage=4`;
  return await psFetch<RestResponse<CategoryPageInterface>>(query);
};

export const getRestProductPage = async (
  id: number
): Promise<RestResponse<ProductPageInterface>> => {
  const query: string = `rest/productdetail?product_id=${id}`;
  return await psFetch<RestResponse<ProductPageInterface>>(query);
};

export const getRestHeader = async (): Promise<RestResponse<HeaderInterface>> => {
  const query: string = 'rest/header';
  return await psFetch<RestResponse<HeaderInterface>>(query);
};

export const getRestCart = async (): Promise<RestResponse<CartInterface>> => {
  const query: string = 'rest/cart';
  return await psFetch<RestResponse<CartInterface>>(query);
};

export const getRestCartUpdate = async (
  id_product: number,
  id_product_attribute: number,
  qty: number,
  op: AddToCartAction
): Promise<RestResponse<CartInterface>> => {
  const attrId = id_product_attribute ? `&id_product_attribute=${id_product_attribute}` : '';
  const query: string = `rest/cart?id_product=${id_product}${attrId}&op=${op}&qty=${qty}&update=1&action=update&image_size=medium_default`;
  return await psFetch<RestResponse<CartInterface>>(query);
};

export const getRestSearch = async (s: string): Promise<RestResponse<SearchResultsInterface>> => {
  const query: string = `rest/productSearch?s=${s}`;
  return await psFetch<RestResponse<SearchResultsInterface>>(query);
};

export const setLanguage = async (isolang: string) => {
  const query: string = `rest/context?isolang=${isolang}`;
  const {
    psdata: { language },
    success
  } = await psFetch(query);
  return { language, success };
};

export const setCurrency = async (currencyId: number) => {
  const query: string = `rest/context?setCurrency=${currencyId}`;
  const {
    psdata: { currency },
    success
  } = await psFetch(query);

  return { currency, success };
};
