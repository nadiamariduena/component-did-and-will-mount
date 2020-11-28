import React, { Component } from "react";
// dont forget this damn thing

class CompoexampleOne extends Component {
  componentWillMount() {
    console.log("Executed BEFORE the component is mounted");
  }

  componentDidMount() {
    console.log("Executed AFTER the component is mounted");
  }

  //
  //
  //
  //
  render() {
    return <h1>component di mount example 1</h1>;
  }
}

export default CompoexampleOne;
