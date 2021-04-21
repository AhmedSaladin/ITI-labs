var screen = document.images
var position = 0;
var timer;


function next_element() {
    if (position < screen.length)
        forward();
}

function start_slide() {
    timer = setInterval(forward, 1000);
}

function stop_slide() {
    clearInterval(timer);
}

function last_element() {
    if (position != 1) {
        screen[position - 1].style.display = "none";
        screen[position - 2].style.display = "block";
        position--;
    }
}

function forward() {
    // make all pics hidden at first.
    for (var i = 0; i < screen.length; i++) {
        screen[i].style.display = "none"
    }
    position++;
    if (position > screen.length) { position = 1; }
    screen[position - 1].style.display = "block";
}

forward();


