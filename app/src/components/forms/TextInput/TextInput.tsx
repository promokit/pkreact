import { useEffect } from 'react';
import { NotificationType } from '../../../model/enums';
import Notification from '../../notifications/Notification/Notification';

import './styles.scss';

interface ComponentInterface {
  label?: string;
  description?: string;
  input: any;
}

const TextInput = ({ input, label = '', description = '' }: ComponentInterface) => {
  const { name, type, value, placeholder, isValid, reference, handleChange, handleBlur } = input;

  useEffect(() => {
    reference.current?.focus();
  }, [reference]);

  return (
    <div className="form-field">
      {label && <label htmlFor={name}>{label}</label>}
      {type === 'textarea' ? (
        <textarea
          ref={reference}
          id={name}
          name={name}
          defaultValue={value}
          onBlur={handleBlur}
          placeholder={placeholder}
          onChange={handleChange}
          className={isValid ? '' : 'invalid'}
        ></textarea>
      ) : (
        <input
          ref={reference}
          id={name}
          type={type}
          name={name}
          value={value}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeholder}
          className={isValid ? '' : 'invalid'}
        />
      )}
      {description && <small>{description}</small>}
      {/* {!isValid && <Notification type={NotificationType.Error} message="Field is not valid" />} */}
    </div>
  );
};

export default TextInput;
