import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import CheckBox, { ComponentInterface } from './CheckBox';

const componentValues: ComponentInterface = {
  name: 'checkbox',
  description: 'description',
  changeHandler: jest.fn()
};

describe('<CheckBox />', () => {
  beforeEach(() => {
    render(
      <CheckBox
        name={componentValues.name}
        description={componentValues.description}
        changeHandler={componentValues.changeHandler}
      />
    );
  });

  test('should render checkbox', () => {
    const checkbox = screen.getByLabelText('description');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('should call changeHandler function once', () => {
    const checkbox = screen.getByLabelText('description');
    userEvent.click(checkbox);
    expect(componentValues.changeHandler).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });
});
