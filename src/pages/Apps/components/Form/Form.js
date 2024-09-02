import { Component } from "react";
import Select from "react-select";

const colorOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChange = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value });
  };

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChange(event, "name")}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={this.state.password}
            onChange={(event) => this.handleChange(event, "password")}
          />
        </label>
        <input type="submit" value="надіслати" />
      </form>
    );
  }
}

export default Form;



// import React, { useState } from 'react';

// function Form() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");

//   const handleChange = (event, setState) => {
//     setState(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log({ name, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(event) => handleChange(event, setName)}
//         />
//       </label>

//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(event) => handleChange(event, setPassword)}
//         />
//       </label>
//       <input type="submit" value="надіслати" />
//     </form>
//   );
// }

// export default Form;