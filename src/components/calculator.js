import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import "./calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <main className="calculatorBody">
            <div className="calculatorkeypad">
              <Row center="xs">
                <Col xs={1}>
                  <button
                    name="("
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    (
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name=")"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    )
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="CE"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    CE
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="C"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    C
                  </button>
                </Col>
              </Row>
              <Row center="xs">
                <Col xs={1}>
                  <button
                    name="1"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    1
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="2"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    2
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="3"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    3
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="+"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    +
                  </button>
                </Col>
              </Row>

              <Row center="xs">
                <Col xs={1}>
                  <button
                    name="4"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    4
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="5"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    5
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="6"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    6
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="-"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    -
                  </button>
                </Col>
              </Row>

              <Row center="xs">
                <Col xs={1}>
                  <button
                    name="7"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    7
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="8"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    8
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="9"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    9
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="/"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    /
                  </button>
                </Col>
              </Row>

              <Row center="xs">
                <Col xs={1}>
                  <button
                    name="."
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    .
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="0"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    0
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="="
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    =
                  </button>
                </Col>
                <Col xs={1}>
                  <button
                    name="*"
                    onClick={e => this.props.onClick(e.target.name)}
                  >
                    *
                  </button>
                </Col>
              </Row>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Calculator;
