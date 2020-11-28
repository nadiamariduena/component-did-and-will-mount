# RECAPITULATING REACT

#### UNDERSTANDING LIFE CYCLES

### 1 CONSTRUCTOR EXAMPLE 🚧

##### STATE , SETSTATE

- IN THE FOLLOWING EXAMPLE, we are going to determine which one runs FIRST

```javascript
class ConstructorSetState extends Component {
  // this runs BEFORE
  state = {
    name: "peter",
  };

  constructor() {
    super();
    // this runs AFTER
    this.state = {
      name: "John",
    };
    console.log("hello constructor");
  }

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
```

<br>
<br>

### 2 CONSTRUCTOR EXAMPLE 🚧

##### In this example we will be mixing the constructor and the componentWillMount

```javascript
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
```

<br>

#### With the "componentWillMount" you can change the state, so SET STATE , BUT WHY WOULD YOU LIKE TO CHANGE THE STATE, why would you like to SETSTATE ? even after setting up the original state inside the constructor

<br>
<br>
<hr>
<br>
<br>

### 3 COMPONENT WILL MOUNT AND COMPONENT DID MOUNT 🚧

<br>

- IN THE FOLLOWING EXAMPLE YOU CAN SEE THE LOGIC on it

```javascript
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
```

#### IF YOU NOTICE

- The componentWillMount() will be executed BEFORE

<br>

[<img src="./src/img/componentwill_and_didMount.jpg">]()
