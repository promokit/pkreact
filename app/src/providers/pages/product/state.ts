import { StatusType } from '../../../model/enums';

export const initialState = {
  status: StatusType.Loading,
  cover: [],
  category_name: '',
  cover_image: '',
  combinations: [
    {
      combination_code: '',
      float_price: 0,
      id_product_attribute: 0,
      minimal_quantity: 0,
      price: '',
      quantity: 0
    }
  ],
  customization_fields: {},
  description: '',
  description_short: '',
  discount_percentage: '',
  discount_price: '',
  groups: [
    {
      attributes: [
        {
          html_color_code: '',
          name: '',
          selected: false,
          texture: ''
        }
      ],
      attributes_quantity: {},
      default: 0,
      group_name: '',
      group_type: '',
      name: ''
    }
  ],
  id_product: 0,
  images: [],
  manufacturer_name: '',
  minimal_quantity: '',
  name: '',
  new_products: '',
  price: '',
  product_url: '',
  product_info: [
    {
      name: '',
      value: ''
    }
  ],
  quantity: 0,
  reference: '',
  show_price: '',
  cart_quantity: '',
  regular_price: '',
  discount_amount: ''
};
