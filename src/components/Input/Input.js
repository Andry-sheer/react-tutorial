
import './Input.css';

const Input = ({ ourClass, labelName }) => {
  return (
    <label className={ourClass ?  `label-input ${ourClass}` : "label-input"} >
      {labelName} <input className='field-input' type="text" />
    </label>
  );
};

export default Input;
