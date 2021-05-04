var ans = document.getElementById("Answer");
var operation;
var first;
var second;

function EnterEqual() {
    switch (operation) {
        case '+':
            ans.value = parseFloat(second) + parseFloat(first);
            break;
        case "-":
            ans.value = parseFloat(second) - parseFloat(first);
            break;
        case "*":
            ans.value = parseFloat(second) * parseFloat(first);
            break;
        case "/":
            if (parseFloat(second) != 0 && parseFloat(first) != 0)
                ans.value = parseFloat(second) / parseFloat(first);
            ans.value = "Error you can't divid zero"
            break;
    }
}

function EnterNumber(number) {
    ans.value += number;
    first = ans.value;
}

function EnterOperator(operator) {
    operation = operator;
    ans.value = '';
    second = first;
}

function EnterClear() {
    ans.value = '';
    first = '';
    second = '';
    operation = '';
}
