import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "", color: "", isHuman: false };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleChange = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value });
    // console.log(event.target.value)
  };

  handleSubmit(event) {
    event.preventDefault();
    // console.log('name: ' + this.state.value)
  }

  handleChangeSelect(values){
    this.setState({ color: values.map(option => option.value).join(" , ") });
    // console.log(props);
  }

  handleCheckboxChange(event){
    this.setState({
      isHuman: event.target.checked
    });
  }




  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="login"
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChange(event, "login")}
          />
          {this.state.isNameEmpty && <span>Please enter the name</span>}
        </label>

        <label>
          Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={(event) => this.handleChange(event, "password")}
          />
          {this.state.isPasswordEmpty && <span>Please enter the password</span>}
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