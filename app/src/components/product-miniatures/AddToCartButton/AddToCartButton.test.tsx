import { render as reactRender, screen } from '@testing-library/react';
import { AddToCartFormInterface } from '../../../model/interfaces';
import AddToCartButton from './AddToCartButton';
import store from '../../../providers/store';
import { Provider } from 'react-redux';

const formData: AddToCartFormInterface = {
  qty: 1,
  id_product: 1,
  id_product_attribute: 0,
  id_customization: 0
};

export interface ButtonProps {
  formData: AddToCartFormInterface;
  onQtyChangeHandler: () => void;
}

const render = (component: any) => reactRender(<Provider store={store}>{component}</Provider>);

describe('<AddToCartButton />', () => {
  test('should render Add to cart button', () => {
    render(<AddToCartButton formData={formData} onQtyChangeHandler={jest.fn()} />);
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
  });
});
