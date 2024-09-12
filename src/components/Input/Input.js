import "./Input.css";

const Input = ({ isError, label, name, onChange, value }) => {
  return (
    <label className={`label-input pass RoW`}>
      {label}
        <input 
          className={isError && "input-error"}
          type="text" 
          name={name} 
          onChange={onChange} 
          value={value} 
        />
    </label>
  );
};

export default Input;
