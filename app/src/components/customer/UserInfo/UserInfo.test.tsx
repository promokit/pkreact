import { Provider } from 'react-redux';
import store from '../../../providers/store';
import userEvent from '@testing-library/user-event';
import { render as reactRender, screen } from '@testing-library/react';
import 'jest-canvas-mock';

import UserInfo from './UserInfo';

describe('<UserInfo />', () => {
  beforeEach(() => {
    const render = (component: any) => reactRender(<Provider store={store}>{component}</Provider>);
    render(<UserInfo />);
  });

  test('should render User Info Sidebar', () => {
    const btn = screen.getByRole('button', { name: /sign out/i });
    expect(btn).toBeInTheDocument();
  });

  test('should call clickHandler function once', () => {
    const btn = screen.getByRole('button', { name: /sign out/i });
    userEvent.click(btn);
  });
});
