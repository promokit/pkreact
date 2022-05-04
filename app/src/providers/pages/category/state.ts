import { CategoryPageInterface, ImageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';

const defaultImageData: ImageInterface = {
  height: '500',
  width: '1110',
  url: ''
};

export const initialState: CategoryPageInterface = {
  status: StatusType.Loading,
  active: '1',
  description: 'Default framed poster and vector images, all you need...',
  facets: [],
  id_category: 0,
  images: {
    bySize: {
      cart_default: defaultImageData,
      home_default: defaultImageData,
      large_default: defaultImageData,
      medium_default: defaultImageData,
      small_default: defaultImageData
    },
    id_image: '1',
    legend: '',
    large: defaultImageData,
    medium: defaultImageData,
    small: defaultImageData
  },
  label: 'Default',
  pagination: {
    current_page: 1,
    items_shown_from: 1,
    items_shown_to: 4,
    pages: {},
    pages_count: 2,
    should_be_displayed: true,
    total_items: 7
  },
  products: [],
  sort_orders: [],
  sort_selected: ''
};
