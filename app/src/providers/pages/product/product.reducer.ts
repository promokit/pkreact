import Action from '../../redux.types';
import { ProductPageActionTypes } from './product.types';

const INITIAL_STATE = {
  details: {
    cover: [],
    category_name: 'string',
    cover_image: 'string',
    combinations: [
      {
        combination_code: 'string',
        float_price: 0,
        id_product_attribute: 0,
        minimal_quantity: 0,
        price: 'string',
        quantity: 0
      }
    ],
    customization_fields: {},
    description: 'string',
    description_short: 'string',
    discount_percentage: 'string',
    discount_price: 'string',
    groups: [
      {
        attributes: [
          {
            html_color_code: 'string',
            name: 'string',
            selected: false,
            texture: 'string'
          }
        ],
        attributes_quantity: {},
        default: 0,
        group_name: 'string',
        group_type: 'string',
        name: 'string'
      }
    ],
    id_product: 0,
    images: [],
    manufacturer_name: 'string',
    minimal_quantity: 'string',
    name: 'string',
    new_products: 'string',
    price: 'string',
    product_url: 'string',
    product_info: [
      {
        name: 'string',
        value: 'string'
      }
    ],
    quantity: 0,
    reference: 'string',
    show_price: 'string',
    cart_quantity: 'string',
    regular_price: 'string',
    discount_amount: 'string'
  }
};

const productPageReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ProductPageActionTypes.SET_PRODUCT_PAGE:
      return {
        ...state,
        details: action.payload
      };
    default:
      return state;
  }
};

export default productPageReducer;
