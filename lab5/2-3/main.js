/*
1- Create rectangle Constructor that has width and height --done
2- Using prototype property for calculating area, perimeter.  --done
3- Override .toString() function to display a message 
    declaring the width, height, area and perimeter of the created object. --done
4- Create Class Property that counts numbers of created objects and Class method to retrieve it. --done
5- Updates in your previous code of generating Rectangle object that should inherit
    from Shape Constructor, and create your Square constructor that inherits from Rectangle. --done
6- Prevent creating any object from shape, allow creation of only rectangles and square. --done
7- Allow creation of only one square and one rectangle --done
*/

function Shape(width, height) {
  if (this.constructor == Shape)
    throw "Creating instance form shape not allowed";
  this.width = width;
  this.height = height;
  Shape.count++;
}
Shape.count = 0;
Shape.get_objects_numbers = function () {
  console.log(`Total created shapes : ${this.count} shape.`);
};

function Rectangle(width, height) {
  if (this.constructor == Rectangle) Rectangle.count++;
  if (Rectangle.count > 1) throw "You can't make more Rectangle.";
  Shape.call(this, width, height);
}

Rectangle.prototype.constructor = Rectangle;
Rectangle.count = 0;

Rectangle.get_objects_numbers = function () {
  console.log(`Rectangle have : ${this.count} objects.`);
};

Rectangle.prototype.area = function () {
  var area = this.width * this.height;
  return area;
};

Rectangle.prototype.perimeter = function () {
  var perimeter = 2 * (this.width + this.height);
  return perimeter;
};

Rectangle.prototype.toString = function () {
  var msg = `Your shape width: ${this.width}, height: ${
    this.height
  },area: ${this.area()}, perimeter: ${this.perimeter()}`;
  console.log(msg);
};

function Square(width) {
  if (this.constructor == Square) Square.count++;
  if (Square.count > 1) throw "You can't make more squares.";
  Rectangle.call(this, width, width);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.count = 0;

Square.get_objects_numbers = function () {
  console.log(`Square have : ${this.count} objects.`);
};

Square.prototype.perimeter = function () {
  var perimeter = 4 * this.width;
  return perimeter;
};
Square.prototype.toString = function () {
  var msg = `Your shape width: ${
    this.width
  }, area: ${this.area()}, perimeter: ${this.perimeter()}`;
  console.log(msg);
};
try {
  var r = new Rectangle(2, 3);
  var h = new Square(2);
  var d = new Rectangle(3, 4);
  var f = new Square(5);
} catch (err) {
  console.error(err);
}
