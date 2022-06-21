import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { StatusType } from '../../../model/enums';

import Button, { ComponentInterface } from './Button';

const componentValues: ComponentInterface = {
  title: 'Button Label',
  status: StatusType.Success,
  type: 'button',
  disabled: false,
  clickHandler: jest.fn()
};

describe('<Button />', () => {
  beforeEach(() => {
    render(
      <Button
        title={componentValues.title}
        status={componentValues.status}
        clickHandler={componentValues.clickHandler}
      />
    );
  });

  test('should render Button', () => {
    const btn = screen.getByRole('button', { name: /button label/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toBeEnabled();
  });

  test('should call clickHandler function once', () => {
    const btn = screen.getByRole('button', { name: /button label/i });
    userEvent.click(btn);
    expect(componentValues.clickHandler).toHaveBeenCalledTimes(1);
  });
});
