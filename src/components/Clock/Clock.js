import { Component } from "react";


class Clock extends Component {
  render() {
    return (
    <div>
      <h1>Hello React</h1>
      <h2>Now {this.props.date.toLocaleTimeString()}</h2>
    </div>
    );
  }
}

export default Clock;