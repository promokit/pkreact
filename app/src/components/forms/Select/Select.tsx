import { SelectInterface } from '../../../model/interfaces';

import './styles.scss';

interface ComponentInterface {
  selectName: string;
  selectOptions: Array<SelectInterface>;
}

const Select = ({ selectName, selectOptions }: ComponentInterface) => {
  return (
    <select name={selectName} id={selectName} className="custom-select">
      {selectOptions.map(({ name, id }) => (
        <option id={id} key={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Select;
