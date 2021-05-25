class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  toString() {}
  area() {}
  perimeter() {}
}
class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
  }
  toString() {
    return `Rectangle width: ${this.sides[0]}, height: ${
      this.sides[1]
    }, area: ${this.area()}, perimeter: ${this.perimeter()}`;
  }
  area() {
    return this.sides[0] * this.sides[1];
  }
  perimeter() {
    return 2 * (this.sides[0] + this.sides[1]);
  }
}
class Square extends Polygon {
  constructor(side) {
    super(side);
  }
  toString() {
    return `Square sides: ${
      this.sides
    }, area: ${this.area()}, perimeter: ${this.perimeter()}`;
  }
  area() {
    return Math.pow(this.sides, 2);
  }
  perimeter() {
    return 4 * this.sides;
  }
}
class Triangle extends Polygon {
  constructor(base, height) {
    super(base, height);
  }
  toString() {
    return `Triangle base: ${this.sides[0]}, height: ${
      this.sides[1]
    }, area: ${this.area()}, perimeter:${this.perimeter()}`;
  }
  area() {
    return (1 / 2) * this.sides[0] * this.sides[1];
  }
  perimeter() {
    return 2 * this.sides[1] + this.sides[0];
  }
}
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  toString() {
    return `Circle radius is: ${
      this.radius
    } his area: ${this.area()},perimeter: ${this.perimeter()}`;
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  perimeter() {
    return Math.PI * (2 * this.radius);
  }
}

const square = new Square(5);
const rectangle = new Rectangle(5, 4);
const triangle = new Triangle(10, 5);
const circle = new Circle(15);
const context = document.getElementById("canv").getContext("2d");

// Rectangle
context.fillStyle = "aqua";
context.fillRect(50, 100, rectangle.sides[0] * 20, rectangle.sides[1] * 20);

// Square
context.fillStyle = "brown";
context.fillRect(200, 200, rectangle.sides[0] * 20, rectangle.sides[0] * 20);

// Triangle
context.fillStyle = "red";
context.beginPath();
context.moveTo(400, 400);
context.lineTo(triangle.sides[0]*30, triangle.sides[1]*80);
context.lineTo(triangle.sides[0]*40, triangle.sides[1]*60);
context.fill();

// Circle
context.beginPath();
context.arc(500, 500, circle.radius*3, 0, 2 * Math.PI);
context.fillStyle = "blue";
context.fill();