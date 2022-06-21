import './styles.scss';

export interface ComponentInterface {
  name: string;
  description?: string;
  changeHandler: () => void;
}

const CheckBox = ({ name, description = '', changeHandler }: ComponentInterface) => {
  return (
    <label htmlFor={name} className="flex form-item align-center check-box">
      <input type="checkbox" name={name} id={name} onChange={changeHandler} />
      <span className="flex-grow">{description}</span>
    </label>
  );
};

export default CheckBox;
