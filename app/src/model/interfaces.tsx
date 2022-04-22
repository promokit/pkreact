export interface ActionInterface {
  type: string;
}

interface ContextCartInterface {
  checkedTos: boolean;
  delivery_option: null;
  gift: number;
  gift_message: string;
  id: number;
  id_address_delivery: number;
  id_address_invoice: number;
  id_carrier: number;
  id_currency: number;
  id_customer: number;
  id_guest: number;
  id_lang: number;
  id_shop: number;
  id_shop_group: number;
}

interface ContextCurrencyInterface {
  active: string;
  id: number;
  iso_code: string;
  name: string;
  numeric_iso_code: string;
  sign: string;
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

interface ContextCustomerInterface {
  id: number;
}

export interface ContextDetailsInterface {
  cart: CartInterface;
  cookie: object;
  currency: ContextCurrencyInterface;
  customer: ContextCustomerInterface;
  language: ContextLanguageInterface;
  shop: ContextShopInterface;
}

export interface ContextInterface {
  details: ContextDetailsInterface;
  productListingPage: number;
  isLoaded: boolean;
  isError: boolean;
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
  shops: object;
}

export interface CurrentLanguageInterface {
  id_lang: number;
  iso_code: string;
  name: string;
  name_simple: string;
}

export interface LanguageRestResponse {
  languages: Array<LanguageInterface>;
  current_language: CurrentLanguageInterface;
}

export interface MenuInterface {
  children: Array<MenuInterface>;
  current: boolean;
  depth: number;
  id: string;
  image: object;
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
}

export interface BannerInterface {
  banner_desc: string;
  banner_link: string;
  image_url: string;
}

export interface ProductInterface {
  id_product: number;
  cover: CoverInterface;
  name: string;
  price: string;
  cart_quantity?: string;
  discount_price: string;
  regular_price: string;
  discount_amount: number;
}

export interface ProductPageInterface {
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

export interface HomepageInterface {
  banner: BannerInterface;
  featuredProductsList: Array<ProductInterface>;
  numberOfFeaturedProd: number;
  slides: [];
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
  };
  vouchers: {};
}

export interface NotificationInterface {
  info: string;
  warning: string;
  error: string;
}

export interface CategoryInterface {
  id_category: number;
  active: string;
  description: string;
  facets: [];
  images: CoverInterface;
  label: string;
  pagination: {
    current_page: number;
    items_shown_from: number;
    items_shown_to: number;
    pages: object;
    pages_count: number;
    should_be_displayed: boolean;
    total_items: number;
  };
  products: Array<ProductInterface>;
  sort_orders?: [];
  sort_selected?: string;
}

export interface AddToCartFormInterface {
  id_product: number;
  id_product_attribute: number;
  id_customization: number;
  qty: number;
  [key: string]: string | number;
}
