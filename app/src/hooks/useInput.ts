import { useState, ChangeEvent, useRef } from 'react';
import { useFormValidator } from './useFormValidator';

interface HookInterface {
  type: string;
  name: string;
  isRequired?: boolean;
  placeholder?: string;
  initialValue?: string;
}

const useInput = ({
  type,
  name,
  initialValue = '',
  placeholder = '',
  isRequired = true
}: HookInterface) => {
  const [isValid, setInputValid] = useState<boolean>(true);
  const [value, setValue] = useState<string>(initialValue);
  const reference = useRef<HTMLInputElement | null>(null);
  const { validateInput } = useFormValidator();

  const resetInput = () => setValue(initialValue);
  const handleBlur = () => setInputValid(validateInput({ value, type }));
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return {
    type,
    name,
    value,
    isValid,
    reference,
    isRequired,
    placeholder,
    setValue,
    resetInput,
    handleBlur,
    handleChange,
    setInputValid
  };
};

export default useInput;
