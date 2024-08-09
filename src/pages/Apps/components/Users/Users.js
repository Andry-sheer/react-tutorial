import { Component } from "react";




class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    this.getUsers()
  }

  async getUsers() {
    const response = await fetch('https://66401c9ca7500fcf1a9d1857.mockapi.io/Products');
    const data = await response.json();
    
    this.setState({ users: data })
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
          { this.state.users.map(user => <p key={user.id}>{user.name}</p>) }
      </div>
    )
  }





  







}

export default Users;