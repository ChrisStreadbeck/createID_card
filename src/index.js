import React from "react";
import ReactDOM from "react-dom";

import mockData from "./mockData.js";
import UserCard from "./userCard.js";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: mockData
    };
  }

  renderUsers = () => {
    return this.state.users.map(user => {
      return <UserCard user={user} />;
    });
  };

  render() {
    return <div className="App">{this.renderUsers()}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
