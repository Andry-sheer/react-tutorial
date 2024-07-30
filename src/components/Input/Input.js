import { IoMdEye } from "react-icons/io";
import "./Input.css";

const Input = ({ showIcon }) => {
  
  return (
    <label className={`label-input pass RoW`} >
      {showIcon && <IoMdEye size="25px" color="green" />}
      label: <input className='field-input' type="text" />
    </label>
  );
};

export default Input;
