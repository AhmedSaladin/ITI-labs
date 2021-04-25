second_rev = new Function([], "console.log([].reverse.apply(arguments))");

function rev() {
    var res = [].reverse.bind(arguments);
    return res();
}
// console based