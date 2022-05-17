import { ChangeEvent, MouseEvent, useEffect, useState, useRef } from 'react';
import { usePsContext } from '../../hooks/usePsContext';
import { NotificationType } from '../../model/enums';
import { validateInput } from '../../providers/pages/category/utils';

import Button from '../Button/Button';
import Notification from '../notifications/Notification/Notification';

import './styles.scss';

enum FormFields {
  Email = 'email',
  FirstName = 'firstname',
  LastName = 'lastname',
  Password = 'password'
}

const LoginForm = () => {
  const { setLogin, userStatus, userMessage } = usePsContext();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [isRegister, setRegisterMode] = useState<boolean>(false);
  const [isAgreed, setAgreed] = useState<boolean>(false);
  const [isFormValid, setFormValid] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [firstname, setFirstName] = useState<string>('');
  const [validFirstName, setValidFirstName] = useState<boolean>(true);
  const [lastname, setLastName] = useState<string>('');
  const [validLastName, setValidLastName] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [validPassword, setValidPassword] = useState<boolean>(true);

  const toggleRegister = () => setRegisterMode(!isRegister);
  const toggleAgreed = () => setAgreed(!isAgreed);

  const submitHandler = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    setLogin({ email, firstname, lastname, password });
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
    setFormValid(validPassword && validEmail);
    //isRegister && setFormValid(!validPassword || !validEmail || !validFirstName || !validLastName);
  }, [validPassword, validEmail]);

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
        style={{ borderColor: validEmail ? '#333' : 'red' }}
      />
      {!validEmail && <Notification type={NotificationType.Error} message="Email is not valid" />}
      {isRegister && (
        <>
          <input
            type="text"
            name={FormFields.FirstName}
            value={firstname}
            placeholder="Alex"
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            style={{ borderColor: validFirstName ? '#333' : 'red' }}
          />
          {!validFirstName && (
            <Notification type={NotificationType.Error} message="First name is not valid" />
          )}
          <input
            type="text"
            name={FormFields.LastName}
            value={lastname}
            placeholder="Brown"
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            style={{ borderColor: validLastName ? '#333' : 'red' }}
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
        style={{ borderColor: validPassword ? '#333' : 'red' }}
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
          <button type="submit" className="button" disabled={!isAgreed}>
            Register
          </button>
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
