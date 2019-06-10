import React, { Component } from "react";

class Input extends Component {
  render() {
    let { value } = this.props;

    return (
      <div>
        <input type="text" value={value} defaultValue="0" />
      </div>
    );
  }
}

export default Input;
