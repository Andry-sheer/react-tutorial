import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "", isNameEmpty: false, isPasswordEmpty: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event){

    if(event.target.name === 'name'){
      this.state({ isNameEmpty: false })
    }

    this.setState({ [event.target.name]: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.login.trim() === ""){
      this.state({ isNameEmpty: true })
    }

    if(this.state.password.trim() === ""){
      this.state({ isPasswordEmpty: true })
    }

    console.log(this.state);
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
