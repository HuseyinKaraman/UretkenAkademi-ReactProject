import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    return (
        <code className="fs-4">{JSON.stringify(this.props.selectedUser, ["name","username","email","phone","website","phone"], 2)}</code>
    );
  }
}

export default UserInfo;
