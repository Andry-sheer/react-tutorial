import { IoMdEye } from "react-icons/io";
import "./Input.css";

const Input = ({ showIcon }) => {
  
  return (
    <label className={`label-input pass RoW`} >
      {showIcon && <IoMdEye className="eye" size="25px" color="green" />}
      passLabel: <input className='field-input' type="password" />
    </label>
  );
};

export default Input;
