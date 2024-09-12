import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "", isNameEmpty: false, isPasswordEmpty: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event){

    if(event.target.name === 'name'){
      this.setState({ isNameEmpty: false, isPasswordEmpty: false})
    }

    this.setState({ [event.target.name]: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.name.trim() === ""){
      this.setState({ isNameEmpty: true })
    }

    if(this.state.password.trim() === ""){
      this.setState({ isPasswordEmpty: true })
    }

    console.log(this.state);
  }




  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          login:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChange(event, "name")}
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



// import React, { useState } from "react";

// function Form() {
//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoginEmpty, setIsLoginEmpty] = useState(false);
//   const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === "login") {
//       setLogin(value);
//       setIsLoginEmpty(false);
//     } else if (name === "password") {
//       setPassword(value);
//       setIsPasswordEmpty(false);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (login.trim() === "") {
//       setIsLoginEmpty(true);
//     }

//     if (password.trim() === "") {
//       setIsPasswordEmpty(true);
//     }

//     if (login.trim() && password.trim()) {
//       console.log({ login, password });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         login:
//         <input
//           name="login"
//           type="text"
//           value={login}
//           onChange={handleChange}
//         />
//         {isLoginEmpty && <span>Please enter the login</span>}
//       </label>

//       <label>
//         Password:
//         <input
//           name="password"
//           type="password"
//           value={password}
//           onChange={handleChange}
//         />
//         {isPasswordEmpty && <span>Please enter the password</span>}
//       </label>

//       <input type="submit" value="надіслати" />
//     </form>
//   );
// }

// export default Form;