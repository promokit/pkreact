import { APP_DIR, APP_CONFIG } from '../constants/constants';
import {
  RestResponse,
  CartInterface,
  HeaderInterface,
  ContextInterface,
  CmsPageInterface,
  HomePageInterface,
  LoginFormInterface,
  SubscribeInterface,
  BrandPageInterface,
  ContactFormInterface,
  ContactPageInterface,
  ProductPageInterface,
  SubscriptionInterface,
  CategoryPageInterface,
  AddToCartFormInterface,
  SearchResultsInterface,
  ContextCustomerInterface
} from '../model/interfaces';

enum Methods {
  GET = 'GET',
  POST = 'POST'
}

const {
  productListing: { productsPerPage }
} = APP_CONFIG;

const psFetch = async <T>(query: string, body: string = ''): Promise<T> => {
  const restSlug = 'rest';

  const options: RequestInit = {
    method: Methods.GET
  };

  if (body) {
    options.body = body;
    options.method = Methods.POST;
  }

  const response = await fetch(`${APP_DIR}${restSlug}/${query}`, options);

  return await response.json();
};

export const getRestContext = async (): Promise<RestResponse<ContextInterface>> => {
  const query: string = 'context';
  return await psFetch<RestResponse<ContextInterface>>(query);
};

export const getRestHomePage = async (): Promise<RestResponse<HomePageInterface>> => {
  const query: string = 'bootstrap?menu_with_images=single';
  return await psFetch<RestResponse<HomePageInterface>>(query);
};

export const getRestCmsPage = async (id: number): Promise<RestResponse<CmsPageInterface>> => {
  const query: string = `cms?id_cms=${id}`;
  return await psFetch<RestResponse<CmsPageInterface>>(query);
};

export const getRestManufacturerPage = async (
  id: number,
  page: number
): Promise<RestResponse<BrandPageInterface>> => {
  const query: string = `manufacturer?id_manufacturer=${id}&page=${page}&resultsPerPage=${productsPerPage}`;
  return await psFetch<RestResponse<BrandPageInterface>>(query);
};

export const getRestCategoryPage = async (
  id: number,
  page: number
): Promise<RestResponse<CategoryPageInterface>> => {
  const query: string = `categoryProducts?id_category=${id}&page=${page}&resultsPerPage=${productsPerPage}`;
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

export const getRestLogin = async (
  args: LoginFormInterface
): Promise<RestResponse<ContextCustomerInterface>> => {
  const query: string = 'login';
  return await psFetch<RestResponse<ContextCustomerInterface>>(query, JSON.stringify(args));
};

export const getRestRegister = async (
  args: LoginFormInterface
): Promise<RestResponse<ContextCustomerInterface>> => {
  const query: string = 'register';
  return await psFetch<RestResponse<ContextCustomerInterface>>(query, JSON.stringify(args));
};

export const getRestLogout = async (): Promise<RestResponse<ContextCustomerInterface>> => {
  const query: string = 'logout';
  return await psFetch<RestResponse<ContextCustomerInterface>>(query);
};

export const getRestAccountInfo = async (): Promise<RestResponse<ContextCustomerInterface>> => {
  const query: string = 'accountInfo';
  return await psFetch<RestResponse<ContextCustomerInterface>>(query);
};

export const getRestContactPage = async (): Promise<RestResponse<ContactPageInterface>> => {
  const query: string = 'contact';
  return await psFetch<RestResponse<ContactPageInterface>>(query);
};

export const submitContactForm = async (
  args: ContactFormInterface
): Promise<RestResponse<ContactPageInterface>> => {
  const query: string = 'contact';
  return await psFetch<RestResponse<ContactPageInterface>>(query, JSON.stringify(args));
};

export const submitSubscriptionForm = async (
  args: SubscribeInterface
): Promise<RestResponse<SubscriptionInterface>> => {
  const query: string = 'emailsubscription?email=' + args.email;
  return await psFetch<RestResponse<SubscriptionInterface>>(query);
};
