import { Provider } from 'react-redux';
import { render as reactRender, screen } from '@testing-library/react';
import AddToCartInput from './AddToCartInput';
import store from '../../../providers/store';

const buttonLabels = {
  up: '+',
  down: '-'
};

describe('<AddToCartInput />', () => {
  beforeEach(() => {
    const setQty = jest.fn();
    const render = (component: any) => reactRender(<Provider store={store}>{component}</Provider>);
    render(<AddToCartInput qty={1} setQty={setQty} />);
  });

  test('should render Add to cart Input', () => {
    const inputEl = screen.getByRole('textbox') as HTMLInputElement;
    const incBtn = screen.getByRole('button', { name: buttonLabels.up }) as HTMLButtonElement;
    const decBtn = screen.getByRole('button', { name: buttonLabels.down }) as HTMLButtonElement;

    expect(inputEl).toBeInTheDocument();
    expect(decBtn).toBeInTheDocument();
    expect(incBtn).toBeInTheDocument();
  });

  test('input value should be 1', () => {
    const inputEl = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputEl).toHaveValue('1');
  });

  /*
  test('should change input value by click on "+/-" buttons', () => {
    const { getByTestId } = makeSut;

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
  */
});
