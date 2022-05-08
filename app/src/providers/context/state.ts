import { StatusType } from '../../model/enums';
import { AddToCartFormInterface, ContextDetailsInterface } from '../../model/interfaces';

export const initialState: ContextDetailsInterface = {
  status: StatusType.Loading,
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
    vouchers: {}
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
    id: 1
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
