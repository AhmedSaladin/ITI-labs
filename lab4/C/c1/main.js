function only_two(a, b) {
    if (arguments.length > 2)
        throw "This function accept only two parameter!";
    if (arguments.length <= 0)
        throw "This function accept two parameter!";
    return [a, b];
}
// console based