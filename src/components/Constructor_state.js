import React, { Component } from "react";

class ConstructorSetState extends Component {
  state = {
    name: "peter",
  };

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
    console.log("hello Will Mount");
  }
  // ---------------
  render() {
    return (
      <div className="const_state">
        {/* you add it here so to be shown on the browser, not on the consoles */}
        {this.state.name}
      </div>
    );
  }
}

export default ConstructorSetState;
