import { useState } from "react";
import Input from "../Input/Input";
import './Form.css';
// import { IoMdEye } from "react-icons/io";

const Form = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isSurNameEmpty, setIsSurNameEmpty] = useState(false);

  const validateForm = () => {
    if (!name.trim()) setIsNameEmpty(true);
    if (!surName.trim()) setIsSurNameEmpty(true);

    return name.trim() && surName.trim();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return null;
    }

    console.log(`name: ${name} \nsurName: ${surName}`);
    console.log('Zapit....... itd....')
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        name="name"
        onInputChange={(value) => {
          setName(value);
          setIsNameEmpty(false);
        }}
        value={name}
        isError={isNameEmpty}
      />
      {isNameEmpty && <div className="error">please enter name</div>}
      <Input
        label="Surname"
        name="surname"
        onInputChange={(value) => {
          setSurName(value);
          setIsSurNameEmpty(false);
        }}
        value={surName}
        isError={isSurNameEmpty}
      />
      {isSurNameEmpty && <div className="error">please enter surname</div>}
      <input type="submit" value="надіслати" />
    </form>
  );
};

{
  /* <Input label="Name" name="name" icon={<button className='iconTest'><IoMdEye size='30px' fill='green'/></button>} onChange={null} value={name} /> */
}

export default Form;
