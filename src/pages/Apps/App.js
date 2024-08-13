
import { Component } from "react";
import "./App.css";
// import Clock from "../../components/Clock/Clock";
import Users from "./components/Users/Users";
import Profile from "./components/Profile/Profile";
import FunctionalToggle from "../Apps/components/Toggle/FunctionalToggle";
import Form from "./components/Form/Form";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isError: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getUsers()
  }

  async getUsers() {
    try {
      const response = await fetch(
        "https://66401c9ca7500fcf1a9d1857.mockapi.io/users"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      this.setState({ users: data });
      this.setState({ isLoading: false });
      
    } catch (error) {
      this.setState({
        isError: true,
        isLoading: false,
      });
    }
  }

  render() {

  const { users, isError, isLoading } = this.state;

  return (
    <div className="App">
      <header className="App-header">

        <Profile user={users[1]} />

        <FunctionalToggle />

        <Form />

        {/* <Clock date={new Date()} /> */}

        <Users users={users} isError={isError} isLoading={isLoading} />

      </header>
    </div>
    );
  }
}

export default App;
