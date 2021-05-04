function Person(nm, ag, tl) {
    return {
        name: nm,
        age: ag,
        title: tl,
        toString: function () {
            return `your name is ${this.name} and your age is ${this.age} and you work as ${this.title}.`
        }
    }
}

var Pperson = function (nm, ag, tl) {

    this.name = nm;
    this.age = ag;
    this.title = tl;
    var born = "1522";
    this.getBorn = function () {
        return `you born at ${born}`;
    }
}
Pperson.prototype.toString = function () {
    return `your name is ${this.name} and your age is ${this.age} and you work as ${this.title}.`
}

Pperson.prototype.bborn = function () {  //illegl born is private member.
    return `you born at ${this.born}`;
}

var p1 = new Person("ahmed", "15", "dev");
p1.birthdate = "12-5-2021";
p1.like = "banana";
console.log(p1);

console.log(p1.toString());

var p2 = new Pperson("aa", "15", "dev");
Object.seal(p2);
Object.freeze(p2); 

p2.birthdate = "12-5-2021";
p2.like = "banana";
console.log(p2);
console.log(p2.toString());
console.log(p2.bborn());
console.log(p2.getBorn());


