import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./components/Main";
import { Button } from "reactstrap";

class App extends Component {
  state = {
    temperature: 0,
  };

  increaseTemperature = () => {
    this.setState({ temperature: this.state.temperature + 1 });
  };

  decreaseTemperature = () => {
    this.setState({ temperature: this.state.temperature - 1 });
  };

  render() {
    return (
      <div>
        <div className="text-center">
          <h1>Temperature</h1>

          <p>Current Temperature: {this.state.temperature} &#8451;</p>

          <Button onClick={this.increaseTemperature} className="me-2" color="primary">
            Increase Temperature
          </Button>

          <Button onClick={this.decreaseTemperature} color="danger">
            Decrease Temperature
          </Button>
        </div>
        <Main temperature={this.state.temperature} />
      </div>
    );
  }
}

export default App;
