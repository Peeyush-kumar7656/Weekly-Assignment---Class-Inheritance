import React, { Component } from "react";
class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  drawShape() {
    return "Shape";
  }
  calculateArea() {
    return "Area";
  }
  render() {
    return (
      <div>
        Area:{this.calculateArea()} shape:{this.drawShape()}
      </div>
    );
  }
}
export default Shape;