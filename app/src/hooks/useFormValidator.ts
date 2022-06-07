import { useCallback } from 'react';

export const useFormValidator = () => {
  const validateText = (value: string): boolean => {
    return value !== '';
  };

  const validateEmail = (value: string): boolean => {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const check = regex.test(value);
    return value !== '' && check;
  };

  const validatePassword = (value: string): boolean => {
    return value !== '';
  };

  const validateInput = useCallback(({ value, type }: { value: string; type: string }): boolean => {
    switch (type) {
      case 'text':
        return validateText(value);
      case 'email':
        return validateEmail(value);
      case 'password':
        return validatePassword(value);
      case 'textarea':
        return validateText(value);
      default:
        return true;
    }
  }, []);

  const validateForm = ({ ...items }) =>
    Object.values(items).every(({ isValid }) => isValid === true);

  return {
    validateForm,
    validateInput
  } as const;
};
