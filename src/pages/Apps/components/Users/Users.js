import { Component } from "react";
// import { FaSpinner } from "react-icons/fa";
import logo from "../../../.././logo.svg";

class Users extends Component {
  render() {
    const { users, isError, isLoading } = this.props;
    return (
      <div>
        <h1>Users</h1>
        {isLoading ? (<img width="150px" height="150px" src={logo} className="App-logo" alt="logo" />) : (users.map((user) => ( 
            <div key={user.id}>
              <img src={user.avatar} alt="avatar" />
              <p>{user.first_name}</p>
              <p>{user.last_name}</p>
            </div>
          )))}
        
        {isError && <p>Oops some Error</p>}
      </div>
    );
  }
}

export default Users;
