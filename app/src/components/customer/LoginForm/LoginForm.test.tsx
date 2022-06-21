import { Provider } from 'react-redux';
import { fireEvent, render as reactRender, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import store from '../../../providers/store';
import userEvent from '@testing-library/user-event';

const formValues = {
  email: 'filled@email.com',
  password: 'mypass',
  fname: 'firstname',
  lname: 'lastname',
  empty: ''
};

describe('<LoginForm />', () => {
  beforeEach(() => {
    const render = (component: any) => reactRender(<Provider store={store}>{component}</Provider>);
    render(<LoginForm />);
  });

  test('should render Login Form', async () => {
    const emailInput = screen.getByPlaceholderText(/name@email.com/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const wantToRegisterInput = screen.getByLabelText(/I want to register/i);
    const signInButton = screen.getByRole('button', { name: /sign in/i });

    // every Login form element must be available in the document
    expect(signInButton).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(wantToRegisterInput).toBeInTheDocument();

    // Login/Register toggle checkbox must not be checked
    expect(wantToRegisterInput).not.toBeChecked();

    // fill in input fields with dummy data
    userEvent.type(emailInput, formValues.email);
    userEvent.type(passwordInput, formValues.password);

    // check is submit button active
    // expect(signInButton).toBeDisabled();

    // enable Register Mode
    userEvent.click(wantToRegisterInput);

    // get "new" element of registration form
    const firstNameInput = screen.getByPlaceholderText(/alex/i);
    const lastNameInput = screen.getByPlaceholderText(/brown/i);
    const registerButton = screen.getByRole('button', { name: /create account/i });
    const agreeToConditions = screen.getByLabelText(
      /I agree to the terms and conditions and the privacy policy/i
    );

    // every Register form element must be available in the document
    expect(registerButton).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(agreeToConditions).toBeInTheDocument();

    // Agree to conditions must not be checked
    expect(agreeToConditions).not.toBeChecked();

    // Register button must be disabled
    expect(registerButton).toBeDisabled();

    userEvent.type(firstNameInput, formValues.fname);
    userEvent.type(lastNameInput, formValues.lname);

    // agree to conditions
    userEvent.click(agreeToConditions);
    expect(registerButton).toBeEnabled();

    fireEvent.change(firstNameInput, { target: { value: '' } });
    fireEvent.focusOut(firstNameInput);
    expect(registerButton).toBeDisabled();
  });
});
