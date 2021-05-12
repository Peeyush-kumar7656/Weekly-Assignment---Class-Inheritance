class Shape {
    constructor(color){
      this.color = color;
    }
   calculateArea() {
     console.log(this.constructor.name + ' Area Calclated Called');
   }
   drawShape() {
     return '';
   }
 }
 class Circle extends Shape {
   calculateArea() {
     super.calculateArea();
     console.log(this.constructor.name + ' Area Calclated Called');
   }
 }
 let circleObj = new Circle();
 export default Circle;
 circleObj.calculateArea();