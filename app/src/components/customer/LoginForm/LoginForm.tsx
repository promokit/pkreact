import { ChangeEvent, MouseEvent, useEffect, useState, useRef } from 'react';
import { LoginFormInterface } from '../../../model/interfaces';
import { usePsContext } from '../../../hooks/usePsContext';
import { NotificationType } from '../../../model/enums';
import { validateInput } from '../../../utils/form';

import Button from '../../forms/Button/Button';
import Details from '../../atoms/Details/Details';
import Notification from '../../notifications/Notification/Notification';
import LanguagesList from '../../atoms/LanguagesList/LanguagesList';
import CurrenciesList from '../../atoms/CurrenciesList/CurrenciesList';

import './styles.scss';

enum FormFields {
  Email = 'email',
  FirstName = 'firstName',
  LastName = 'lastName',
  Password = 'password'
}

const LoginForm = () => {
  const { setLogin, setRegister, userStatus, userMessage } = usePsContext();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [isRegister, setRegisterMode] = useState<boolean>(false);
  const [isAgreed, setAgreed] = useState<boolean>(false);
  const [isFormValid, setFormValid] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [firstName, setFirstName] = useState<string>('');
  const [validFirstName, setValidFirstName] = useState<boolean>(true);
  const [lastName, setLastName] = useState<string>('');
  const [validLastName, setValidLastName] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [validPassword, setValidPassword] = useState<boolean>(true);

  const toggleAgreed = () => setAgreed(!isAgreed);
  const toggleRegister = () => setRegisterMode(!isRegister);
  const getBorderColor = () => (validEmail ? '#333' : '#ca0101');

  const submitHandler = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    const formData: LoginFormInterface = { email, password, firstName, lastName };
    isRegister ? setRegister(formData) : setLogin(formData);
  };

  const handlerOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.target;
    const { value, name } = target;
    switch (name) {
      case FormFields.Email:
        setEmail(value);
        break;
      case FormFields.FirstName:
        setFirstName(value);
        break;
      case FormFields.LastName:
        setLastName(value);
        break;
      case FormFields.Password:
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handlerOnBlur = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.target;
    const { type, value, name } = target;
    switch (name) {
      case FormFields.Email:
        setValidEmail(validateInput({ type, value }));
        break;
      case FormFields.FirstName:
        setValidFirstName(validateInput({ type, value }));
        break;
      case FormFields.LastName:
        setValidLastName(validateInput({ type, value }));
        break;
      case FormFields.Password:
        setValidPassword(validateInput({ type, value }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    emailRef.current?.focus();
  }, [emailRef]);

  useEffect(() => {
    setFormValid(
      isRegister
        ? validPassword &&
            validEmail &&
            validFirstName &&
            validLastName &&
            isAgreed &&
            password !== '' &&
            email !== '' &&
            lastName !== '' &&
            firstName !== ''
        : validPassword && validEmail && password !== '' && email !== ''
    );
  }, [
    validPassword,
    validFirstName,
    validLastName,
    validEmail,
    isRegister,
    isAgreed,
    firstName,
    lastName,
    password,
    email,
    setFormValid
  ]);

  return (
    <>
      <form className="login-form">
        <h4>{isRegister ? 'Create Account' : 'Sign In'}</h4>
        <input
          ref={emailRef}
          id="email"
          type="email"
          name={FormFields.Email}
          value={email}
          placeholder="my@email.com"
          onBlur={handlerOnBlur}
          onChange={handlerOnChange}
          style={{ borderColor: getBorderColor() }}
          required={true}
        />
        {!validEmail && <Notification type={NotificationType.Error} message="Email is not valid" />}
        {isRegister && (
          <>
            <input
              type="text"
              name={FormFields.FirstName}
              value={firstName}
              placeholder="Alex"
              onBlur={handlerOnBlur}
              onChange={handlerOnChange}
              style={{ borderColor: getBorderColor() }}
              required={true}
            />
            {!validFirstName && (
              <Notification type={NotificationType.Error} message="First name is not valid" />
            )}
            <input
              type="text"
              name={FormFields.LastName}
              value={lastName}
              placeholder="Brown"
              onBlur={handlerOnBlur}
              onChange={handlerOnChange}
              style={{ borderColor: getBorderColor() }}
              required={true}
            />
            {!validLastName && (
              <Notification type={NotificationType.Error} message="Last name is not valid" />
            )}
          </>
        )}
        <input
          type="password"
          name={FormFields.Password}
          value={password}
          placeholder="password"
          onBlur={handlerOnBlur}
          onChange={handlerOnChange}
          style={{ borderColor: getBorderColor() }}
          required={true}
        />
        {!validPassword && (
          <Notification type={NotificationType.Error} message="Password is not valid" />
        )}
        <label htmlFor="reg" className="flex form-item align-center">
          <input type="checkbox" name="isregister" id="reg" onChange={toggleRegister} />
          <span className="flex-grow">I want to register</span>
        </label>
        {isRegister ? (
          <>
            <label htmlFor="gdpr" className="flex form-item align-center">
              <input type="checkbox" name="gdpr" id="gdpr" onChange={toggleAgreed} />
              <span className="flex-grow">
                I agree to the terms and conditions and the privacy policy
              </span>
            </label>
            <Button
              title="Register"
              status={userStatus}
              disabled={!isFormValid}
              clickHandler={submitHandler}
            />
          </>
        ) : (
          <Button
            title="Sign In"
            status={userStatus}
            disabled={!isFormValid}
            clickHandler={submitHandler}
          />
        )}
        {userMessage && <Notification type={NotificationType.Error} message={userMessage} />}
      </form>
      <br />
      <br />
      <h4>My Settings</h4>
      <Details title="Languages" content={<LanguagesList />} />
      <Details title="Currencies" content={<CurrenciesList />} />
    </>
  );
};

export default LoginForm;
