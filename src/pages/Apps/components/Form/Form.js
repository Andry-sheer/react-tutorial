
import { Component } from "react";


class Form extends Component {
  constructor(props){
    super(props);

    this.state = { name: "", password: ""};

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange =(event, fieldName)=> {
    this.setState({ [fieldName]: event.target.value});
    // console.log(event.target.value)
  }

  handleSubmit(event) {
    console.log('submit name: ' + this.state.name);
    console.log('submit password: ' + this.state.password);
    event.preventDefault();
    // console.log('name: ' + this.state.value)
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Name: 
          <input type="text" value={this.state.name} onChange={(event) => this.handleChange(event, 'name') } />
        </label>

        <label>
          Password: 
          <input type="password" value={this.state.password} onChange={(event) => this.handleChange(event, 'password') } />
        </label>
        <input type="submit" value="надіслати" />
      </form>
    );
  }
}

export default Form;