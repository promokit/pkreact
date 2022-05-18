import { ChangeEvent, MouseEvent, useEffect, useState, useRef } from 'react';
import { validateInput } from '../../providers/pages/category/utils';
import { LoginFormInterface } from '../../model/interfaces';
import { usePsContext } from '../../hooks/usePsContext';
import { NotificationType } from '../../model/enums';

import Notification from '../notifications/Notification/Notification';
import Button from '../Button/Button';

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

  const toggleRegister = () => setRegisterMode(!isRegister);
  const toggleAgreed = () => setAgreed(!isAgreed);

  const getBorderColor = () => (validEmail ? '#333' : 'red');

  const submitHandler = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    const formData: LoginFormInterface = { email, password, firstName, lastName };
    isRegister ? setRegister(formData) : setLogin(formData);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
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

  const onBlurHandler = (event: ChangeEvent<HTMLInputElement>): void => {
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
    !isRegister && setFormValid(validPassword && validEmail);
    isRegister &&
      setFormValid(validPassword && validEmail && validFirstName && validLastName && isAgreed);
  }, [
    validPassword,
    validEmail,
    validFirstName,
    validLastName,
    isRegister,
    isAgreed,
    setFormValid
  ]);

  return (
    <form className="login-form">
      <h4>{isRegister ? 'Create Account' : 'Sign In'}</h4>
      <input
        ref={emailRef}
        id="email"
        type="email"
        name={FormFields.Email}
        value={email}
        placeholder="my@email.com"
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        style={{ borderColor: getBorderColor() }}
      />
      {!validEmail && <Notification type={NotificationType.Error} message="Email is not valid" />}
      {isRegister && (
        <>
          <input
            type="text"
            name={FormFields.FirstName}
            value={firstName}
            placeholder="Alex"
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            style={{ borderColor: getBorderColor() }}
          />
          {!validFirstName && (
            <Notification type={NotificationType.Error} message="First name is not valid" />
          )}
          <input
            type="text"
            name={FormFields.LastName}
            value={lastName}
            placeholder="Brown"
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            style={{ borderColor: getBorderColor() }}
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
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        style={{ borderColor: getBorderColor() }}
      />
      {!validPassword && (
        <Notification type={NotificationType.Error} message="Password is not valid" />
      )}
      <label htmlFor="reg" className="flex form-item">
        <input type="checkbox" name="isregister" id="reg" onChange={toggleRegister} />
        <span className="flex-grow">I want to register</span>
      </label>
      {isRegister ? (
        <>
          <label htmlFor="gdpr" className="flex form-item">
            <input type="checkbox" name="gdpr" id="gdpr" onChange={toggleAgreed} />
            <span className="flex-grow">
              I agree to the terms and conditions and the privacy policy
            </span>
          </label>
          <Button title="Register" clickHandler={submitHandler} disabled={!isFormValid} />
        </>
      ) : (
        <Button
          title="Sign In"
          status={userStatus}
          clickHandler={submitHandler}
          disabled={!isFormValid}
        />
      )}
      {userMessage && <Notification type={NotificationType.Error} message={userMessage} />}
    </form>
  );
};

export default LoginForm;
