/*
1- Create custom object that has getSetGen as function value.
2- getSetGen should generate setter and getters for properties of caller object.
3- This object may have description property of string value if needed.
4- any other object can use this function property.
5- Avoid generating getters or setters for property of function value. 
*/
function getSetGen() {
    var object = arguments[0]; //get object keys
    for (var i in object) {
        (function (i) { //passing i to save state
            object['get_' + i] = function () {
                return object[i];
            };
            object['set_' + i] = function (val) {
                object[i] = val;
            }
        })(i);

    }
}

var user = { name: "ali", age: 10 };
var obj = { id: 'sd-10', location: "sv", addr: '123st' }
var oj = { id: 'sd-10' }



