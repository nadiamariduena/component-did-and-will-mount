import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    console.log("child constructor");
  }
  // ------
  // runs BEFORE
  componentWillMount() {
    console.log("child componentWillMount");
  }
  componentDidMount() {
    console.log("child componentDidMount");
  }
  // ---------------
  render() {
    console.log("child render");
    return <div className="const_state">child name: {this.props.name}</div>;
  }
}

export default Child;
