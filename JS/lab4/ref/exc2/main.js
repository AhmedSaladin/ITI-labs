function myname() {
  return this;
}

var obj = { name: "ali", age: 15 };
var obsj = { name: "loki", age: 15 };

var implicit = myname.bind(obsj);
var explicit = myname.call(obj);
var defualt = myname();
console.log(implicit());
console.log(explicit);
console.log(defualt);

function Person(nm, ag, yr, id) {
  this.name = nm;
  this.age = ag;
  this.bornYear = yr;
  var ID = id;
  this.getId = function () {
    return this.ID;
  };
  this.setId = function (val) {
    this.ID = val;
  };
}
Person.hello = function () {
  return "hello " + this.name;
};
var e = new Person("loki", 25, 1998, 1235);
console.log(e);
