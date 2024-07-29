import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import TextBlock from './components/Text/Text';
//? import { Input } from './components/Input/Input'; (if use export)

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Luis',
  lastName: 'Row'
}

function App() {
  const google = 'https://google.com';

  const number = 0;

  if(number > 1){
    return <div>Hello</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {formatName(user)}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Input labelName="Name" ourClass='RoW' />
        <Input labelName="Age" />
        <TextBlock text="Something" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >
          Learn React
        </a>
        <a
          className="App-link-google"
          href = {google} >
          Google
        </a>
      </header>
    </div>
  );
}

export default App;
