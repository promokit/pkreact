import { StatusType } from './enums';

export interface AppConfigInterface {
  slug: string;
  subdirs: {
    product: string;
    category: string;
    manufacturer: string;
    cmspage: string;
  };
}

export interface ActionInterface {
  type: string;
}

interface ContextCurrencyInterface {
  active: string;
  id: number;
  iso_code: string;
  name: string;
  numeric_iso_code: string;
  sign: string;
}

interface ContextShopInterface {
  active: string;
  color: string;
  deleted: string;
  domain: string;
  domain_ssl: string;
  force_id: boolean;
  id: number;
  id_category: string;
  id_shop_group: string;
  id_shop_list: [];
  name: string;
  physical_uri: string;
  theme: object;
  theme_name: string;
  virtual_uri: string;
}

export interface ContextCustomerInterface {
  status: StatusType;
  message: string;
  user: {
    active: string;
    ape: string;
    birthday: string;
    company: string;
    date_add: string;
    date_upd: string;
    days: string;
    deleted: string;
    email: string;
    firstname: string;
    force_id: boolean;
    geoloc_id_country: string;
    geoloc_id_state: string;
    geoloc_postcode: string;
    groupBox: string;
    id: string;
    id_default_group: string;
    id_gender: string;
    id_guest: string;
    id_lang: string;
    id_risk: string;
    id_shop: string;
    id_shop_group: string;
    id_shop_list: Array<number>;
    ip_registration_newsletter: string;
    is_guest: string;
    lastname: string;
    logged: number;
    max_payment_days: string;
    months: string;
    newsletter: string;
    newsletter_date_add: string;
    note: string;
    optin: string;
    outstanding_allow_amount: string;
    show_public_prices: string;
    siret: string;
    website: string;
    years: string;
  };
}

export interface ContextDetailsInterface {
  cart: CartInterface;
  cookie: object;
  currency: ContextCurrencyInterface;
  customer: ContextCustomerInterface;
  language: ContextLanguageInterface;
  shop: ContextShopInterface;
  status: StatusType;
  message?: string;
}

export interface ContextInterface {
  details: ContextDetailsInterface;
  status: StatusType;
}

export interface RestResponse<T> {
  message?: string;
  success: string;
  code: number;
  psdata: T;
}

export interface CurrencyInterface {
  conversion_rate: number;
  current: boolean;
  id: number;
  iso_code: string;
  modified: number;
  name: string;
  numeric_iso_code: number;
  pattern: {};
  precision: number;
  sign: string;
  symbol: string;
  unofficial: number;
  url: string;
}

export interface CurrencyRestResponse {
  currencies: Array<CurrencyInterface>;
  current_currency: CurrencyInterface;
}

export interface ContextLanguageInterface {
  active: string;
  id: number;
  is_rtl: string;
  iso_code: string;
  language_code: string;
  locale: string;
  name: string;
}

export interface LanguageInterface {
  active: boolean;
  date_format_full: string;
  date_format_lite: string;
  id_lang: number;
  id_shop: number;
  is_rtl: boolean;
  iso_code: string;
  language_code: string;
  locale: string;
  name: string;
  name_simple: string;
}

export interface LanguageRestResponse {
  languages: Array<LanguageInterface>;
  current_language: {
    id_lang: number;
    iso_code: string;
    name: string;
    name_simple: string;
  };
}

export interface MenuInterface {
  children: Array<MenuInterface> | null;
  current: boolean;
  depth: number;
  id: string;
  image?: object;
  image_urls: [];
  label: string;
  page_identifier: string;
  slug: string;
  type: string;
  url: string;
}

export interface ImageInterface {
  url: string;
  width: string;
  height: string;
}

export interface CoverInterface {
  bySize: {
    cart_default: ImageInterface;
    home_default: ImageInterface;
    large_default: ImageInterface;
    medium_default: ImageInterface;
    small_default: ImageInterface;
  };
  legend: string;
  id_image: string;
  large: ImageInterface;
  medium: ImageInterface;
  small: ImageInterface;
}

export interface HeaderInterface {
  menuItems: Array<MenuInterface>;
  currencies: CurrencyRestResponse;
  languages: LanguageRestResponse;
  logo: ImageInterface;
  isLoading?: boolean;
  status?: StatusType;
}

export interface BannerInterface {
  banner_desc: string;
  banner_link: string;
  image_url: string;
}

export interface ProductInterface {
  id_product: number;
  id_product_attribute: number;
  cover: CoverInterface;
  name: string;
  price: string;
  cart_quantity?: string;
  discount_price: string;
  regular_price: string;
  discount_amount: number;
  attributes_small: string;
}

export interface ProductPageInterface {
  status: StatusType;
  accessories?: Array<ProductInterface>;
  cover: Array<CoverInterface>;
  category_name: string;
  cover_image: string;
  combinations: Array<{
    combination_code: string;
    float_price: number;
    id_product_attribute: number;
    minimal_quantity: number;
    price: string;
    quantity: number;
  }>;
  customization_fields: object;
  description: string;
  description_short: string;
  discount_percentage: string;
  discount_price: string;
  groups: Array<{
    attributes: Array<{
      html_color_code: string;
      name: string;
      selected: boolean;
      texture: string;
    }>;
    attributes_quantity: {};
    default: number;
    group_name: string;
    group_type: string;
    name: string;
  }>;
  id_product: number;
  images: Array<ImageInterface>;
  manufacturer_name: string;
  manufacturer_id: string;
  minimal_quantity: string;
  name: string;
  new_products: string;
  price: string;
  product_url: string;
  product_info: Array<{
    name: string;
    value: string;
  }>;
  quantity: number;
  reference: string;
  show_price: string;
  cart_quantity: string;
  regular_price: string;
  discount_amount: string;
}

export interface PagesInterface {
  cms: CmsPageInterface;
  home: HomePageInterface;
  brand: BrandPageInterface;
  product: ProductPageInterface;
  category: CategoryPageInterface;
}

export interface HomePageInterface {
  banner: BannerInterface;
  featuredProductsList: Array<ProductInterface>;
  numberOfFeaturedProd: number;
  slides: [];
  status: StatusType;
}

export interface SearchResultsInterface {
  active_filter: [];
  facets: [];
  label: string;
  pagination: {
    current_page: number;
    items_shown_from: number;
    items_shown_to: string;
    pages: {};
    pages_count: number;
    should_be_displayed: boolean;
    total_items: string;
  };
  products: Array<ProductInterface>;
  sort_orders: [];
  sort_selected: false;
}

export interface CartTotalInterface {
  amount: number;
  label: string;
  type: string;
  value: string;
}

export interface CartInterface {
  discounts: [];
  id_address_delivery: string;
  id_address_invoice: string;
  labels: {};
  minimalPurchase: number;
  minimalPurchaseRequired: string;
  products: Array<ProductInterface>;
  products_count: number;
  subtotals: {};
  summary_string: string;
  totals: {
    total: CartTotalInterface;
    total_excluding_tax: CartTotalInterface;
    total_including_tax: CartTotalInterface;
  };
  vouchers: {};
  status: StatusType;
  message?: string;
}

export interface NotificationInterface {
  info: string;
  warning: string;
  error: string;
}

interface Pagination {
  current_page: number;
  items_shown_from: number;
  items_shown_to: number;
  pages: object;
  pages_count: number;
  should_be_displayed: boolean;
  total_items: number;
}

export interface CategoryPageInterface {
  id_category: number;
  active: string;
  description: string;
  facets: [];
  images: CoverInterface;
  label: string;
  pagination: Pagination;
  products: Array<ProductInterface>;
  sort_orders?: [];
  sort_selected?: string;
  status: StatusType;
  productListingPage: number;
}

export interface BrandPageInterface {
  id: number;
  name: string;
  description: string;
  link_rewrite: string;
  logo: string;
  products: Array<ProductInterface>;
  facets: [];
  sort_orders?: [];
  pagination: Pagination;
  status: StatusType;
  productListingPage: number;
}

export interface AddToCartFormInterface {
  qty: number;
  id_product: number;
  id_product_attribute: number;
  id_customization: number;
  toDelete: number;
  [key: string]: string | number;
}

export interface CmsPageActionInterface {
  cmsId: number;
}

export interface CmsPageInterface {
  status: StatusType;
  id_cms: string;
  content: string;
  cms_title: string;
}

export interface LoginFormInterface {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface ContactPageContactsInterface {
  id_contact: string;
  email: string;
  customer_service: string;
  position: string;
  id_shop: string;
  id_lang: string;
  name: string;
  description: string;
}
export interface ContactPageInterface {
  status: StatusType;
  token: string;
  contact: {
    contacts: Array<ContactPageContactsInterface>;
    message: string;
    allow_file_upload?: boolean;
    orders: Array<{
      id_order: string;
      reference: string;
      id_shop_group: string;
      id_shop: string;
      id_carrier: string;
      id_lang: string;
      id_customer: string;
      id_cart: string;
    }>;
    email: string;
    formLoader: StatusType;
  };
}

export interface ContactFormInterface {
  from: string;
  message: string;
  id_contact: string;
  token: string;
  url: string;
}

export interface SelectInterface {
  id: string;
  name: string;
}
