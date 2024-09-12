import { useState } from "react";
import Input from "../../../../components/Input/Input";
import './Form.css';

const HookForm = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isSurNameEmpty, setIsSurNameEmpty] = useState(false);

  const validateForm = () => {
    if(!name.trim()) setIsNameEmpty(true);
    if(!surName.trim()) setIsSurNameEmpty(true);

    return name.trim() && surName.trim();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if(!isValid){
      return null;
    }

    console.log(name, surName);
  };

  return (
    <form onSubmit={handleSubmit}>
        <Input label="Name" name="name" onChange={null} value={name}/>
        {isNameEmpty && <div>Please enter the name</div>}
        <Input label="Surname" name="surname" onChange={null} value={surName}/>
        {isSurNameEmpty && <div>Please enter the Surname</div>}
        <input type="submit" value="надіслати" />
    </form>
  );
};

export default HookForm;
