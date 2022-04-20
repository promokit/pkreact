import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductMini from './ProductMini';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ProductMini',
  component: ProductMini
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ProductMini>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductMini> = (args) => <ProductMini {...args} />;

export const Primary = Template.bind({});
