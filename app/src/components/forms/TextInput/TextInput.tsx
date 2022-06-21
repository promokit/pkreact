import './styles.scss';

interface ComponentInterface {
  label?: string;
  description?: string;
  input: any;
}

const TextInput = ({ input, label = '', description = '' }: ComponentInterface) => {
  const { name, type, value, placeholder, isValid, reference, handleChange, handleBlur } = input;

  return (
    <div className="form-field">
      {label && <label htmlFor={name}>{label}</label>}
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          ref={reference}
          onBlur={handleBlur}
          defaultValue={value}
          onChange={handleChange}
          placeholder={placeholder}
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
    </div>
  );
};

export default TextInput;
