import React, { Component } from "react";

export default class Scores extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Score-card">
        <p className="Current-Score">Current Score: {this.props.current}</p>
        <p className="Best-Score">Best Score: {this.props.best}</p>
      </div>
    );
  }
}
