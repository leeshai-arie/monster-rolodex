import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Leo",
    };
  }
  render() {
    return (
      <div>
        <p1>Hi {this.state.name} </p1>
        <br />
        <button
          onClick={() => {
            this.setState({ name: "jojo" });
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
