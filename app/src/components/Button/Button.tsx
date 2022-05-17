import { MouseEvent } from 'react';
import { StatusType } from '../../model/enums';

import ComponentLoader from '../loaders/ComponentLoader/ComponentLoader';

interface ComponentInterface {
  title: string;
  status?: StatusType;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
}

const Button = ({
  title,
  type = 'button',
  status = StatusType.Success,
  disabled = false,
  clickHandler
}: ComponentInterface) => {
  return (
    <button
      type={type}
      className="button flex flex-grow flex-center"
      onClick={clickHandler}
      disabled={disabled}
    >
      <span>{title}</span>
      {status === StatusType.Loading && <ComponentLoader />}
    </button>
  );
};

export default Button;
