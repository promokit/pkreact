import { BrandPageInterface } from '../../../model/interfaces';
import { StatusType } from '../../../model/enums';

export const initialState: BrandPageInterface = {
  id: 1,
  name: '',
  description: '',
  link_rewrite: '',
  logo: '',
  products: [],
  pagination: {
    current_page: 1,
    items_shown_from: 1,
    items_shown_to: 1,
    pages: {},
    pages_count: 1,
    should_be_displayed: true,
    total_items: 1
  },
  facets: [],
  status: StatusType.Success
};
