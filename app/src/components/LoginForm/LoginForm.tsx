import { useState } from 'react';
import { usePsContext } from '../../hooks/usePsContext';
import { StatusType } from '../../model/enums';
import ComponentLoader from '../loaders/ComponentLoader/ComponentLoader';

import './styles.scss';

const LoginForm = () => {
  const { setLogin, userStatus } = usePsContext();
  const [isRegister, setRegisterMode] = useState<boolean>(false);
  const [isAgreed, setAgreed] = useState<boolean>(false);

  const toggleRegister = () => setRegisterMode(!isRegister);
  const toggleAgreed = () => setAgreed(!isAgreed);

  const submitHandler = (e: any): void => {
    e.preventDefault();
    setLogin({ email: 'marek@promokit.eu', password: '123123' });
  };

  return (
    <form className="login-form" onSubmit={submitHandler}>
      <h4>{isRegister ? 'Create Account' : 'Sign In'}</h4>
      <input type="text" name="email" placeholder="my@email.com" />
      {isRegister && (
        <>
          <input type="text" name="firstname" placeholder="Alex" />
          <input type="text" name="lastname" placeholder="Brown" />
        </>
      )}
      <input type="password" name="password" placeholder="password" />
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
        <button type="submit" className="button">
          <span>Sign In</span>
          {userStatus === StatusType.Loading && <ComponentLoader />}
        </button>
      )}
    </form>
  );
};

export default LoginForm;
