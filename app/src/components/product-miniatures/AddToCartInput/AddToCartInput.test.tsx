import { Provider } from 'react-redux';
import { fireEvent, cleanup, render as reactRender, screen } from '@testing-library/react';
import AddToCartInput from './AddToCartInput';
import store from '../../../providers/store';
import { debug } from 'console';

const render = (component: any) => reactRender(<Provider store={store}>{component}</Provider>);

//const mockQty = jest.fn((x) => x + 1);
const mockQty = jest.fn(() => 4);

afterEach(cleanup);

describe('<AddToCartInput />', () => {
  test('should render Add to cart Input', () => {
    const { getByTestId } = render(<AddToCartInput qty={1} setQty={mockQty} />);

    const inputEl = getByTestId('qty') as HTMLInputElement;
    const incBtn = getByTestId('inc') as HTMLButtonElement;
    const decBtn = getByTestId('dec') as HTMLButtonElement;

    expect(incBtn).toBeInTheDocument();
    expect(decBtn).toBeInTheDocument();
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toBeEnabled();
  });

  test('should change input value by click on "+/-" buttons', () => {
    const { getByTestId } = render(<AddToCartInput qty={1} setQty={mockQty} />);

    const inputEl = getByTestId('qty') as HTMLInputElement;
    //const incBtn = getByTestId('inc') as HTMLButtonElement;
    const incBtn = screen.getByRole('button', { name: '+' }) as HTMLButtonElement;
    const decBtn = screen.getByRole('button', { name: '-' }) as HTMLButtonElement;
    // const decBtn = getByTestId('dec') as HTMLButtonElement;
    console.log(inputEl);
    fireEvent.change(inputEl, {
      target: {
        value: 5
      }
    });

    expect(inputEl.value).toBe('5');

    fireEvent.click(incBtn);
    expect(mockQty).toHaveBeenCalledTimes(1);
    expect(inputEl.value).toBe('2');
    fireEvent.click(decBtn);
    expect(inputEl.value).toBe('1');
    fireEvent.click(decBtn);
    expect(inputEl.value).toBe('1');
  });
});
