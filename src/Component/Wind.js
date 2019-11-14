import React, { Component } from "react";
import "./Wind.css";
class Wind extends Component {
  render() {
    return (
      <div className="wind">
        <h1>{this.props.data}</h1>
      </div>
    );
  }
}

export default Wind;
