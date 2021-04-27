/*
1- Create custom object that has getSetGen as function value.
2- getSetGen should generate setter and getters for properties of caller object.
3- This object may have description property of string value if needed.
4- any other object can use this function property.
5- Avoid generating getters or setters for property of function value. 
*/
// function created but there is bug -------> set and get is a stand alone function
function getSetGen() {
    var object = arguments[0]; //get object.
    var mykeys = Object.keys(object); // get keys of object.
    console.log(mykeys);
console.log()
    for (var i = 0; i < mykeys.length; i++) {
        (function (i) {
            object['get_' + mykeys[i]] = function () {
                return mykeys[i];
            };
            object['set_' + mykeys[i]] = function (val) {
                mykeys[i] = val;
            }
        })(i);
    }
}

var user = { name: "ali", age: 10 };
var obj = { id: 'sd-10', location: "sv", addr: '123st' }

var oj = { id: 'sd-10' }
getSetGen(oj);
getSetGen(obj);
getSetGen(user);
user.setname("memo");
user.setage(35);
console.log(user);
console.log(oj)
console.log(obj)


