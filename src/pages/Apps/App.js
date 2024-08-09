
import "./App.css";
import logo from "../../logo.svg";
import Clock from "../../components/Clock/Clock";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Clock date={new Date()} />

        <Users />

      </header>
    </div>
  );
}

export default App;
