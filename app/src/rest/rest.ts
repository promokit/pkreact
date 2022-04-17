import { BASE_URL } from '../constants/constants';
import {
  CartInterface,
  CategoryInterface,
  ContextInterface,
  CurrencyInterface,
  HeaderInterface,
  HomepageInterface,
  LanguageInterface,
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

export const getRestHomePage = async (): Promise<RestResponse<HomepageInterface>> => {
  const query: string = 'rest/bootstrap?menu_with_images=single';
  return await psFetch<RestResponse<HomepageInterface>>(query);
};

export const getRestCategoryPage = async (
  id: number,
  page: number
): Promise<RestResponse<CategoryInterface>> => {
  const query: string = `rest/categoryProducts?id_category=${id}&page=${page}&resultsPerPage=4`;
  return await psFetch<RestResponse<CategoryInterface>>(query);
};

export const getRestHeader = async (): Promise<RestResponse<HeaderInterface>> => {
  const query: string = 'rest/header';
  return await psFetch<RestResponse<HeaderInterface>>(query);
};

export const getRestCart = async (): Promise<RestResponse<CartInterface>> => {
  const query: string = 'rest/cart';
  return await psFetch<RestResponse<CartInterface>>(query);
};

export const getRestSearch = async (s: string): Promise<RestResponse<SearchResultsInterface>> => {
  const query: string = `rest/productSearch?s=${s}`;
  return await psFetch<RestResponse<SearchResultsInterface>>(query);
};

export const setLanguage = async (isolang: string) => {
  const query: string = `rest/context?isolang=${isolang}`;
  const {
    psdata: { language }
  } = await psFetch(query);
  return language as LanguageInterface;
};

export const setCurrency = async (id_currency: string) => {
  const query: string = `rest/context?setCurrency=${id_currency}`;
  const {
    psdata: { currency }
  } = await psFetch(query);
  return currency as CurrencyInterface;
};
