
var first_img = document.getElementById("first");
var second_img = document.getElementById("middle");
var third_img = document.getElementById("last");
var button = document.getElementById("start");
var container = document.getElementById("con");
var container_position = container.getBoundingClientRect();

var first_img_position;
var second_img_position;
var third_img_position;

var first_img_edged;
var second_img_edged;
var third_img_edged;
var timer;

/*
first start_point -2 || first end_point 456
------------------------------------------------------
second start_point  404 || second end_point -52
------------------------------------------------------
third start_point 446 || third end_point top -20
------------------------------------------------------
*/


// ---------------------------movement section---------------------------------------
function moving_forward() {
    set_edge();

    if (first_img_position < container_position.width - 70) {
        first_img_position++;
        update_first_coordinate(first_img_position);
        first_img_edged = false;
    }

    if (second_img_position < container_position.width + 70) {
        second_img_position++;
        update_second_coordinate(second_img_position)
        second_img_edged = false;
    }

    if (third_img_position < container_position.height + 30) {
        third_img_position++;
        update_third_coordinate(third_img_position);
        third_img_edged = false;
    }
    if (third_img_edged || second_img_edged || first_img_edged) {
        edged();
        timer = setInterval(moving_backward, 0);
    }
}

function moving_backward() {
    set_edge();

    if (first_img_position != -1) {
        first_img_position--;
        update_first_coordinate(first_img_position);
        first_img_edged = false;
    }

    if (second_img_position != 140) {
        second_img_position--
        update_second_coordinate(second_img_position);
        second_img_edged = false;
    }

    if (third_img_position != 90) {
        third_img_position--;
        update_third_coordinate(third_img_position);
        third_img_edged = false;
    }

    if (third_img_edged || second_img_edged || first_img_edged) {
        edged();
        timer = setInterval(moving_forward, 0);
    }
}
// ---------------------------------------------------------------------------------


// ---------------------------default section---------------------------------------

function first_default_coordinate() {
    first_img_position = -1;
    var positionX = container_position.left - 20;
    var positionY = container_position.bottom - 300;
    var coordinateX = set_img_coordinateX(first_img, positionX);
    set_img_coordinateY(first_img, positionY);
    print_first_image_coordinate_on_screen(coordinateX);
}

function second_default_coordinate() {
    second_img_position = 140;
    var positionX = container_position.right - 140;
    var positionY = container_position.bottom - 300;
    var coordinateX = set_img_coordinateX(second_img, positionX)
    set_img_coordinateY(second_img, positionY);
    print_second_image_coordinate_on_screen(coordinateX);
}

function third_default_coordinate() {
    third_img_position = 90;
    var positionX = container_position.right - 410;
    var positionY = container_position.bottom - third_img_position;
    set_img_coordinateX(third_img, positionX)
    var coordinateY = set_img_coordinateY(third_img, positionY);
    print_third_image_coordinate_on_screen(coordinateY)
}
// ---------------------------------------------------------------------------------


// ---------------------------update section---------------------------------------
function update_first_coordinate(position) {
    var coordinateX = set_img_coordinateX(first_img, position);
    print_first_image_coordinate_on_screen(coordinateX);
}

function update_second_coordinate(position) {
    var positionX = container_position.right - position;
    var coordinateX = set_img_coordinateX(second_img, positionX)
    print_second_image_coordinate_on_screen(coordinateX);

}

function update_third_coordinate(position) {
    var positionY = container_position.bottom - position;
    var coordinateY = set_img_coordinateY(third_img, positionY);
    print_third_image_coordinate_on_screen(coordinateY)
}
// ---------------------------------------------------------------------------------


// ---------------------------button section---------------------------------------
function stop_button() {
    button.value = "stop";
    button.setAttribute("onclick", "stop_movement()");
}

function start_button() {
    button.value = "start";
    button.setAttribute("onclick", "start_movement()");
}

// ---------------------------------------------------------------------------------


// ---------------------------print section-----------------------------------------
function print_first_image_coordinate_on_screen(coordinate) {
    var first_img_coordinate_view = document.getElementById("first_view");
    first_img_coordinate_view.innerHTML = "The pic with feather: left " + coordinate;
}

function print_second_image_coordinate_on_screen(coordinate) {
    var second_img_coordinate_view = document.getElementById("second_view");
    second_img_coordinate_view.innerHTML = "The pic with flower: right " + coordinate;
}

function print_third_image_coordinate_on_screen(coordinate) {
    var third_img_coordinate_view = document.getElementById("third_view");
    third_img_coordinate_view.innerHTML = "The pic with triangle: top " + coordinate;
}
// ---------------------------------------------------------------------------------


// ---------------------------helper section-----------------------------------------
function set_default_positions() {
    first_default_coordinate();
    second_default_coordinate();
    third_default_coordinate();
    edged();
    start_button();

}

function start_movement() {
    timer = setInterval(moving_forward, 0);
    stop_button();
}

function stop_movement() {
    edged(timer);
    start_button();
}

function edged() {
    clearInterval(timer);

}

function set_edge() {
    first_img_edged = true;
    second_img_edged = true;
    third_img_edged = true;
}

function set_img_coordinateX(img, point) {
    return img.style.left = point + "px";
}

function set_img_coordinateY(img, point) {
    return img.style.top = point + "px";
}
// ---------------------------------------------------------------------------------

set_default_positions();

