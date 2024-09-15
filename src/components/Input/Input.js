import { IoMdEye } from "react-icons/io";
import { useContext } from "react";
import "./Input.css";
import { UserContext } from "../../pages/Apps/App";

const Input = ({ isError, label, name, onInputChange, value }) => {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <label className={` label-input`} >
      {label}
      <input
        className={isError && 'input-error'}
        type="text" 
        name={name} 
        onChange={(event)=> onInputChange(event.target.value)} 
        value={value} 
      />
    </label>
  );
};

export default Input;

// const Input = ({ icon, label, name, onChange, value }) => {
  
//   return (
//     <label className={`label-input`} >
//       {label}
//       {icon}
//       <input
//         type="text" 
//         name={name} 
//         onChange={onChange} 
//         value={value} 
//       />
//     </label>
//   );
// };