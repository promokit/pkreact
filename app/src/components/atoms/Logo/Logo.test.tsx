import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../providers/store';
import { render as reactRender, screen } from '@testing-library/react';

import Logo from './Logo';

//store.header.logo.url = '/logo.png';

describe('<Logo />', () => {
  beforeEach(() => {
    const render = (component: any) =>
      reactRender(
        <Provider store={store}>
          <BrowserRouter>{component}</BrowserRouter>
        </Provider>
      );
    render(<Logo />);
  });

  test('should render Logo image correctly', () => {
    const img = screen.getByRole('img', { name: /webpage logo/i });
    expect(img).toBeInTheDocument();
    //expect(img).toHaveAttribute('src', '/images/logo.png');
  });
});
