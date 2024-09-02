import "./App.css";
import Clock from "../../components/Clock/Clock";
import Users from "./components/Users/Users";
import Profile from "./components/Profile/Profile";
import Form from "../../components/Form/Form";
import Count from "./components/Count/Count";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setISLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {

    try {
      const response = await fetch("https://66401c9ca7500fcf1a9d1857.mockapi.io/users");

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    setUsers(data);
    setISLoading(false);
    }  

    catch (error) {
      setISLoading(false);
      setIsError(true);
    }
  };

  return (
      <div className="App">
        <header className="App-header">

          {/* <Profile user={users[1]} /> */}

          <Form />

          {/* <Clock date={new Date()} /> */}

          {/* <Users users={users} isError={isError} isLoading={isLoading} /> */}

          {/* <Count /> */}

        </header>
      </div>
  );
};

export default App;