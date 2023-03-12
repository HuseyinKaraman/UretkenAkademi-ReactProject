import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class UserList extends Component {

  render() {
    return (
      <ListGroup>
        {this.props.users.map((user) => (
          <ListGroupItem key={user.id}
            onClick={() => this.props.selectUser(user)}
            active={this.props.selectedUser?.id === user.id ? true : false}
          >
            {user.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default UserList;
