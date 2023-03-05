import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";
import MainTitle from "./MainTitle";

class Main extends Component {
  render() {
    return (
      <>
        <Row className='mt-3'>
          <MainTitle />
        </Row>
        <Row className='mt-3'>
          <Col>
            <Celcius temperature={this.props.temperature} />
          </Col>
          <Col>
            <Fahrenheit temperature={this.props.temperature} />
          </Col>
          <Col>
            <Kelvin temperature={this.props.temperature} />
          </Col>
        </Row>
      </>
    );
  }
}

export default Main;
