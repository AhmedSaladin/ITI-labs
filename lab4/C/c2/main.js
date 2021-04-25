function summation() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(parseInt(arguments[i])))
            throw "Add numbers only.";
    }

    if (arguments.length < 2)
        throw "Argment must be two numbers at least.";

    for (var i = 0; i < arguments.length; i++)
        sum += arguments[i]


    return sum;
}
// console based

