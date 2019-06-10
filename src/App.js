import React, { Component } from "react";
import Calculator from "./components/calculator";
import "./App.css";
import Input from "./input";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        value: this.state.value + button
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        //eslint disable next-line
        value: eval(this.state.value || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
      value: ""
    });
  };

  backspace = () => {
    this.setState({
      value: this.state.value.slice(0, -1)
    });
  };

  _handleChange = e => {
    this.setState({ value: e.target.value });
  };

  onKeyPress = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <div className="App">
          <Input
            value={this.state.value}
            onChange={this.state._handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <Calculator onClick={this.onClick} />
        </div>
      </>
    );
  }
}

export default App;
