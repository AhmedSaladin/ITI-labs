var first = document.getElementById("first");
var second = document.getElementById("middle");
var third = document.getElementById("last");
var first_view = document.getElementById("first_view");
var second_view = document.getElementById("second_view");
var third_view = document.getElementById("third_view");

var timer;
var sstop;

var a_pos = 90;
var b_pos = 140;
var c_pos = 20;

var con = document.getElementById("con");
var con_area = con.getBoundingClientRect();

function first_default() {
    first.style.bottom = con_area.top - 250 + "px";
    first.style.left = con_area.left - 20 + "px";
    c_pos = 20;
    return c_pos
}

function second_default() {
    second.style.bottom = con_area.top - 250 + "px";
    second.style.left = con_area.right - 140 + "px";
    b_pos = 140;
}

function third_default() {
    third.style.top = con_area.bottom - 90 + "px";
    third.style.right = con_area.left - 130 + "px";
    a_pos = 90;
}

function start_move(event) {
    sstop = false;
    timer = setInterval(function () {

        moving()

        if (sstop) {
            event.value = "stop";
            clearInterval(timer);
        }

        sstop = true;
    }, 10);


}

function moving() {
    // first
    if (c_pos < con_area.width - 70) {
        c_pos++;
        var cord = first.style.left = c_pos + "px";
        first_view.innerHTML = "The pic with feather: left " + cord;
    }

    // second
    if (b_pos < con_area.width + 70) {
        b_pos++;
        var cord = second.style.left = con_area.right - b_pos + "px";
        second_view.innerHTML = "The pic with flower: right " + cord;
    }

    // third
    if (a_pos < con_area.height + 30) {
        a_pos++;
        var cord = third.style.top = con_area.bottom - a_pos + "px";
        third_view.innerHTML = "The pic with triangle: top " + cord;
    }
}

function reset_move() {
    first_default()
    second_default()
    third_default()
    clearInterval(timer);
}

first_default()
second_default()
third_default()


