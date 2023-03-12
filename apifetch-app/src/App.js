import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";

import { Row, Col, Spinner } from "reactstrap";

import UserList from "./components/UserList";
import UserInfo from "./components/UserInfo";

class App extends Component {
  state = {
    users: [],
    loading: true,
    selectedUser: undefined,
  };

  async fetchUsers() {
    let { data } = await axios("https://jsonplaceholder.typicode.com/users");
    this.setState({ users: data, loading: false });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  selectUser = (user) => {
    this.setState({ selectedUser: user });
  };

  getUser() {
    return (
      <Row className="m-5">
        <Col xs="2">
          <UserList
            selectedUser={this.state.selectedUser}
            selectUser={this.selectUser}
            users={this.state.users}
          />
        </Col>
        <Col xs="10">
          <UserInfo selectedUser={this.state.selectedUser} />
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner style={{ height: "8rem",width: "8rem",color:"gray",marginLeft:"600px",marginTop:"250px"}}>Loading ....</Spinner>
        ) : (
          this.getUser()
        )}
      </div>
    );
  }
}

export default App;
