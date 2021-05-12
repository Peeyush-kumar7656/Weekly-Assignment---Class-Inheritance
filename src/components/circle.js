class Circle extends Shape {
    calculateArea() {
      super.calculateArea();
      console.log(this.constructor.name + ' Area Calclated Called');
    }
  }
  let circleObj = new Circle();
  export default Circle;
  circleObj.calculateArea();// import using require

// declare class


// export class using module.exports