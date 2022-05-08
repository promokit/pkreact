import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductMini from './ProductMini';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ProductMini',
  component: ProductMini
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ProductMini>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductMini> = (args) => (
  <BrowserRouter>
    <ProductMini {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  product: {
    id_product: 1,
    id_product_attribute: 1,
    cover: {
      bySize: {
        cart_default: {
          url: 'http://localhost:8888/www/ps/ps1784/21-small_default/brown-bear-printed-sweater.jpg',
          width: '80',
          height: '104'
        },
        home_default: {
          url: 'http://localhost:8888/www/ps/ps1784/21-small_default/brown-bear-printed-sweater.jpg',
          width: '80',
          height: '104'
        },
        large_default: {
          url: 'http://localhost:8888/www/ps/ps1784/21-small_default/brown-bear-printed-sweater.jpg',
          width: '80',
          height: '104'
        },
        medium_default: {
          url: 'http://localhost:8888/www/ps/ps1784/21-small_default/brown-bear-printed-sweater.jpg',
          width: '80',
          height: '104'
        },
        small_default: {
          url: 'http://localhost:8888/www/ps/ps1784/21-small_default/brown-bear-printed-sweater.jpg',
          width: '80',
          height: '104'
        }
      },
      legend: 'string',
      id_image: '1',
      large: {
        url: 'http://localhost:8888/www/ps/ps1784/21-small_default/brown-bear-printed-sweater.jpg',
        width: '80',
        height: '104'
      },
      medium: {
        url: 'http://localhost:8888/www/ps/ps1784/21-small_default/brown-bear-printed-sweater.jpg',
        width: '80',
        height: '104'
      },
      small: {
        url: 'http://localhost:8888/www/ps/ps1784/21-small_default/brown-bear-printed-sweater.jpg',
        width: '80',
        height: '104'
      }
    },
    name: 'Product Title',
    price: '$99.90',
    cart_quantity: '1',
    discount_price: '10',
    regular_price: '$109.90',
    discount_amount: 1,
    attributes_small: ''
  }
};
