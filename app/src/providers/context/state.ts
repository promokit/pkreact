import { AddToCartFormInterface, ContextDetailsInterface } from '../../model/interfaces';
import { StatusType } from '../../model/enums';

export const initialState: ContextDetailsInterface = {
  status: StatusType.Loading,
  message: '',
  productListingPage: 1,
  cart: {
    discounts: [],
    id_address_delivery: '0',
    id_address_invoice: '0',
    labels: {},
    minimalPurchase: 0,
    minimalPurchaseRequired: '',
    products: [],
    products_count: 0,
    subtotals: {},
    summary_string: '0 items',
    totals: {
      total: { type: 'total', label: 'Total', amount: 0, value: '$0.00' },
      total_excluding_tax: { type: 'total', label: 'Total (tax excl.)', amount: 0, value: '$0.00' },
      total_including_tax: { type: 'total', label: 'Total (tax incl.)', amount: 0, value: '$0.00' }
    },
    vouchers: {},
    status: StatusType.Success,
    message: ''
  },
  cookie: {},
  currency: {
    active: '1',
    id: 1,
    iso_code: 'USD',
    name: 'US Dollar',
    numeric_iso_code: '840',
    sign: '$'
  },
  customer: {
    status: StatusType.Success,
    message: '',
    user: {
      active: '',
      ape: '',
      birthday: '',
      company: '',
      date_add: '',
      date_upd: '',
      days: '',
      deleted: '',
      email: '',
      firstname: '',
      force_id: false,
      geoloc_id_country: '',
      geoloc_id_state: '',
      geoloc_postcode: '',
      groupBox: '',
      id: '0',
      id_default_group: '',
      id_gender: '',
      id_guest: '',
      id_lang: '',
      id_risk: '',
      id_shop: '',
      id_shop_group: '',
      id_shop_list: [],
      ip_registration_newsletter: '',
      is_guest: '',
      lastname: '',
      logged: 0,
      max_payment_days: '',
      months: '',
      newsletter: '',
      newsletter_date_add: '',
      note: '',
      optin: '',
      outstanding_allow_amount: '',
      show_public_prices: '',
      siret: '',
      website: '',
      years: ''
    }
  },
  language: {
    active: '1',
    id: 1,
    is_rtl: '0',
    iso_code: 'en',
    language_code: 'en-us',
    locale: 'en-US',
    name: 'English (English)'
  },
  shop: {
    active: '1',
    color: '',
    deleted: '0',
    domain: '',
    domain_ssl: '',
    force_id: false,
    id: 1,
    id_category: '1',
    id_shop_group: '1',
    id_shop_list: [],
    name: 'Alysum',
    physical_uri: '/',
    theme: {},
    theme_name: 'alysum',
    virtual_uri: ''
  }
};

export const addToCartFormDefaults: AddToCartFormInterface = {
  id_product: 0,
  id_product_attribute: 0,
  id_customization: 0,
  toDelete: 0,
  qty: 1
};
