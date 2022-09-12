import React, { component } from "react";
import Child from "./Child";

class Parent extends component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "raheeb",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.Name}`);
  }

  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent} />
      </div>
    );
  }
}
export default Parent;
