import React, { Component } from "react";
import Child from "./Child";
//
//
class ConstructorSetState extends Component {
  constructor() {
    super();
    // this runs Before
    this.state = {
      name: "John",
    };
    console.log("hello constructor");
  }
  // ------
  // this runs AFTER
  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth });
      console.log("hello width componentWillMount()");
    }
  }
  componentDidMount() {
    console.log("hello componentDidMount");
  }
  // ---------------

  changeState() {
    this.setState({ name: "jill" });
  }

  /*
  
  
  
  */
  render() {
    return (
      <div className="const_state">
        {/* you add it here so to be shown on the browser, not on the consoles */}
        {this.state.name}
        {this.state.innerWidth}
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>Change State</button>
      </div>
    );
  }
}

export default ConstructorSetState;
