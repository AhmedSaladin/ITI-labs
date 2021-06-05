function Rectangel(width, height) {
  this.width = width;
  this.height = height;
  this.area = () => {
    return this.width * this.height;
  };
  this.preimeter = () => {
    return 2 * (this.width + this.height);
  };
  this.toString = () => {
    return `height: ${this.height}, width: ${
      this.width
    }, area: ${this.area()}, preimeter: ${this.preimeter()}.`;
  };
  this.get_instance_counter = () => {
    return count;
  };
  Rectangel.prototype.add_count();
}
Rectangel.prototype.count = 0;
Rectangel.prototype.add_count = function () {
  this.count++;
};
Rectangel.prototype.get_count = function () {
  return this.count;
};
const r1 = new Rectangel(5, 2);
const r2 = new Rectangel(5, 2);
const r3 = new Rectangel(5, 2);
