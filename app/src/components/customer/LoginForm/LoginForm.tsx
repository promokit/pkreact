import { MouseEvent, useEffect, useState } from 'react';
import { NotificationType } from '../../../model/enums';
import { usePsContext } from '../../../hooks/usePsContext';
import { LoginFormInterface } from '../../../model/interfaces';
import { useFormValidator } from '../../../hooks/useFormValidator';
import useInput from '../../../hooks/useInput';

import Button from '../../forms/Button/Button';
import Details from '../../atoms/Details/Details';
import CheckBox from '../../forms/CheckBox/CheckBox';
import TextInput from '../../forms/TextInput/TextInput';
import LanguagesList from '../../atoms/LanguagesList/LanguagesList';
import CurrenciesList from '../../atoms/CurrenciesList/CurrenciesList';
import Notification from '../../notifications/Notification/Notification';

import './styles.scss';

const LoginForm = () => {
  const [isAgreed, setAgreed] = useState<boolean>(false);
  const [isRegister, setRegisterMode] = useState<boolean>(false);
  const [isFormValid, setFormValid] = useState<boolean>(false);
  const { setLogin, setRegister, userStatus, userMessage } = usePsContext();
  const { validateForm } = useFormValidator();

  const emailInput = useInput({
    type: 'email',
    name: 'email',
    placeholder: 'name@email.com'
  });
  const firstNameInput = useInput({
    type: 'text',
    name: 'firstname',
    placeholder: 'Alex'
  });
  const lastNameInput = useInput({
    type: 'text',
    name: 'lastname',
    placeholder: 'Brown'
  });
  const passwordInput = useInput({
    type: 'password',
    name: 'password',
    placeholder: 'Password'
  });

  useEffect(() => {
    const formFields = isRegister
      ? { emailInput, firstNameInput, lastNameInput, passwordInput }
      : { emailInput, passwordInput };
    setFormValid(isRegister ? validateForm(formFields) && isAgreed : validateForm(formFields));
  }, [
    emailInput,
    firstNameInput,
    lastNameInput,
    passwordInput,
    isRegister,
    isAgreed,
    validateForm
  ]);

  const toggleAgreed = () => setAgreed((state) => !state);
  const toggleRegister = () => setRegisterMode((state) => !state);

  const submitHandler = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    const formData: LoginFormInterface = {
      email: emailInput.value,
      password: passwordInput.value,
      firstName: firstNameInput.value,
      lastName: lastNameInput.value
    };
    isRegister ? setRegister(formData) : setLogin(formData);
  };

  return (
    <>
      <form className="login-form">
        <h4>User Form</h4>
        <TextInput input={emailInput} />
        {isRegister && (
          <>
            <TextInput input={firstNameInput} />
            <TextInput input={lastNameInput} />
          </>
        )}
        <TextInput input={passwordInput} />
        <CheckBox name="reg" description="I want to register" changeHandler={toggleRegister} />
        {isRegister && (
          <CheckBox
            name="gdpr"
            description="I agree to the terms and conditions and the privacy policy"
            changeHandler={toggleAgreed}
          />
        )}
        <Button
          title={isRegister ? 'Create Account' : 'Sign In'}
          status={userStatus}
          disabled={!isFormValid}
          clickHandler={submitHandler}
        />
        <br />
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
