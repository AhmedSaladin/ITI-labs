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

var a_pos
var b_pos
var c_pos

var a_edged;
var b_edged;
var c_edged;

var timer;


function first_element_moving() {

    if (a_pos < con_area.width - 70) {
        a_pos++;
        update_first_cord(a_pos);
        a_edged = false;
    }

    if (a_pos != -1) {
        a_pos--;
        update_first_cord(a_pos);
        a_edged = false;
    }
}

function start_move() {
    timer = setInterval(moving_forward, 0);
}

function moving_forward() {
    set_true();

    if (a_pos < con_area.width - 70) {
        a_pos++;
        update_first_cord(a_pos);
        a_edged = false;
    }

    if (b_pos < con_area.width + 70) {
        b_pos++;
        update_second_cord(b_pos)
        b_edged = false;
    }

    if (c_pos < con_area.height + 30) {
        c_pos++;
        update_third_cord(c_pos);
        c_edged = false;
    }
    if (c_edged||b_edged||a_edged) {
        edged();
        timer = setInterval(moving_backward, 0);
    }
}

function moving_backward() {
    set_true();

    if (a_pos != -1) {
        a_pos--;
        update_first_cord(a_pos);
        a_edged = false;
    }

    if (b_pos != 140) {
        b_pos--
        update_second_cord(b_pos);
        b_edged = false;
    }

    if (c_pos != 90) {
        c_pos--;
        update_third_cord(c_pos);
        c_edged = false;
    }

    if (c_edged||b_edged||a_edged) {
        edged();
        timer = setInterval(moving_forward, 0);
    }
}

function reset_move() {
    first_default_cord()
    second_default_cord()
    third_default_cord()
    clearInterval(timer);
}

function edged() {
    clearInterval(timer);
}

function first_default_cord() {
    first.style.bottom = con_area.top - 250 + "px";
    var cord = first.style.left = first_start_point + "px";
    first_view.innerHTML = "The pic with feather: left " + cord;
    a_pos = -1;
}

function second_default_cord() {
    second.style.bottom = con_area.top - 250 + "px";
    var cord = second.style.left = second_start_point + "px";
    second_view.innerHTML = "The pic with flower: right " + cord;
    b_pos = 140;
}

function third_default_cord() {
    var cord = third.style.top = third_start_point + "px";
    third.style.right = con_area.left - 130 + "px";
    third_view.innerHTML = "The pic with triangle: top " + cord;
    c_pos = 90;
}

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

function set_true() {
    a_edged = true;
    b_edged = true;
    c_edged = true;
}

/*
first start_point -2 || first end_point 456
------------------------------------------------------
second start_point  404 || second end_point -52
------------------------------------------------------
third start_point 446 || third end_point top -20
------------------------------------------------------
*/

first_default_cord()
second_default_cord()
third_default_cord()