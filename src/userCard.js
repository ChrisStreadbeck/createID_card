import React from "react";
import { Render } from "react-dom";

class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const user = this.props.user;

    return (
      <div className="user-card">
        <img src={this.props.user.profPic} alt="user pic" />
        <h2>
          {user.firstName} {user.lastName} ({user.age})
        </h2>
        <p>{user.email}</p>
      </div>
    );
  }
}

export default UserCard;
