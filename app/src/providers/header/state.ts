import { StatusType } from '../../model/enums';
import {
  CurrencyInterface,
  CurrencyRestResponse,
  HeaderInterface,
  ImageInterface,
  LanguageInterface,
  LanguageRestResponse,
  MenuInterface
} from '../../model/interfaces';

export interface HeaderState {
  status: StatusType;
  currencies: CurrencyRestResponse;
  languages: LanguageRestResponse;
  logo: ImageInterface;
  menuItems: Array<MenuInterface>;
}

export const initialState: HeaderState = {
  status: StatusType.Loading,
  currencies: {
    currencies: [
      {
        conversion_rate: 1,
        current: false,
        id: 3,
        iso_code: 'CZK',
        modified: 0,
        name: 'Czech Koruna',
        numeric_iso_code: 203,
        pattern: {},
        precision: 2,
        sign: 'Kč',
        symbol: 'Kč',
        unofficial: 0,
        url: ''
      }
    ],
    current_currency: {
      conversion_rate: 1,
      current: true,
      id: 1,
      iso_code: 'USD',
      modified: 0,
      name: 'US Dollar',
      numeric_iso_code: 840,
      pattern: {},
      precision: 2,
      sign: '$',
      symbol: '$',
      unofficial: 0,
      url: ''
    }
  },
  languages: {
    current_language: {
      id_lang: 1,
      name: 'English (English)',
      name_simple: 'English',
      iso_code: 'en'
    },
    languages: [
      {
        active: true,
        date_format_full: 'm/d/Y H:i:s',
        date_format_lite: 'm/d/Y',
        id_lang: 1,
        id_shop: 1,
        is_rtl: false,
        iso_code: 'en',
        language_code: 'en-us',
        locale: 'en-US',
        name: 'English (English)',
        name_simple: 'English'
      }
    ]
  },
  logo: {
    url: '#',
    width: '100',
    height: '28'
  },
  menuItems: [
    {
      children: [
        {
          children: [],
          current: false,
          depth: 2,
          id: '4',
          image_urls: [],
          label: 'Men',
          page_identifier: 'category-4',
          slug: 'men',
          type: 'category',
          url: '#'
        }
      ],
      current: false,
      depth: 1,
      id: '3',
      image_urls: [],
      label: 'Clothes',
      page_identifier: 'category-3',
      slug: 'clothes',
      type: 'category',
      url: ''
    }
  ]
};
