/*
1- Create custom object that has getSetGen as function value.
2- getSetGen should generate setter and getters for properties of caller object.
3- This object may have description property of string value if needed.
4- any other object can use this function property.
5- Avoid generating getters or setters for property of function value. 
*/
// ---- adding more test cases.
function getSetGen(obj) {
    for (var i in obj) {
        (function (value) {
            obj['get_' + value] = function () {
                return obj[value];
            };
            obj['set_' + value] = function (val) {
                obj[value] = val;
            }
        })(i);
    }
}

var user = { name: "ali", age: 10 };
var obj = { id: 'sd-10', location: "sv", addr: '123st' }
var oj = { id: 'sd-10' }



