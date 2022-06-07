import { useState, ChangeEvent, useRef } from 'react';
import { useFormValidator } from './useFormValidator';

interface HookInterface {
  type: string;
  name: string;
  placeholder?: string;
  initialValue?: string;
}

const useInput = ({ type, name, initialValue = '', placeholder = '' }: HookInterface) => {
  const [isValid, setInputValid] = useState<boolean>(true);
  const [value, setValue] = useState<string>(initialValue);
  const reference = useRef<HTMLInputElement | null>(null);
  const resetInput = () => setValue(initialValue);
  const { validateInput } = useFormValidator();

  const handleBlur = () => setInputValid(validateInput({ value, type }));
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return {
    type,
    name,
    value,
    isValid,
    placeholder,
    reference,
    setValue,
    resetInput,
    setInputValid,
    handleBlur,
    handleChange
  };
};
export default useInput;
