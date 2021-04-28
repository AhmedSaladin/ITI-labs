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
