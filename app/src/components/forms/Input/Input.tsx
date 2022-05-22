interface ComponentInterface {
  type: string;
  name: string;
  label?: string;
  description?: string;
}

const Input = ({ type, name, label = '', description = '' }: ComponentInterface) => {
  return (
    <div className="form-field">
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} name={name} id={name} />
      {description && <small>{description}</small>}
    </div>
  );
};

export default Input;
