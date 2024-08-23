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
    console.log(this.state);
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

        <label>
          Human?: 
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isHuman}
            onChange={this.handleCheckboxChange} />
        </label>

        <Select
          isMulti
          name="colors"
          options={colorOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={this.handleChangeSelect}
        />
      </form>
    );
  }
}

export default Form;
