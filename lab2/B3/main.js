var first = document.getElementById("first");
var second = document.getElementById("middle");
var third = document.getElementById("last");

var first_view = document.getElementById("first_view");
var second_view = document.getElementById("second_view");
var third_view = document.getElementById("third_view");

var con = document.getElementById("con");
var con_area = con.getBoundingClientRect();

var first_start_point = con_area.left - 20;
var second_start_point = con_area.right - 140;
var third_start_point = con_area.bottom - 90;

var timer;

var a_pos
var b_pos
var c_pos


function first_default() {
    first.style.bottom = con_area.top - 250 + "px";
    var cord = first.style.left = first_start_point + "px";
    first_view.innerHTML = "The pic with feather: left " + cord;
    a_pos = -1;
}

function second_default() {
    second.style.bottom = con_area.top - 250 + "px";
    var cord = second.style.left = second_start_point + "px";
    second_view.innerHTML = "The pic with flower: right " + cord;

    b_pos = 140;
}

function third_default() {
    var cord = third.style.top = third_start_point + "px";
    third.style.right = con_area.left - 130 + "px";
    third_view.innerHTML = "The pic with triangle: top " + cord;

    c_pos = 90;
}

function start_move() {
    moving_forward();

}

function moving_forward() {
    // first
    if (a_pos < con_area.width - 70) {
        a_pos++;
        update_first_cord(a_pos);
    }

    // second
    if (b_pos < con_area.width + 70) {
        b_pos++;
        update_second_cord(b_pos)
    }

    // third
    if (c_pos < con_area.height + 30) {
        c_pos++;
        update_third_cord(c_pos);
    }
}

function moving_backward() {
    a_pos--;
    update_first_cord(a_pos);

    b_pos--
    update_second_cord(b_pos);

    c_pos--;
    update_third_cord(c_pos);

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


// first start_point -2
// second start_point  404
// third start_point 446


// first end_point 456
// second end_point -52
// third end_point top -20





function update_first_cord(position) {
    var cordinate = first.style.left = position + "px";
    first_view.innerHTML = "The pic with feather: left " + cordinate;
}

function update_second_cord(position) {
    var cordinate = second.style.left = con_area.right - position + "px";
    second_view.innerHTML = "The pic with flower: right " + cordinate;

}

function update_third_cord(position) {
    var cordinate = third.style.top = con_area.bottom - position + "px";
    third_view.innerHTML = "The pic with triangle: top " + cordinate;

}


