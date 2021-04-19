var win;
var timer;
var new_element_created = 0;


function open_new_window() {
    win = open("ho.html", "", "width =250, height =250");
};

function close_new_window() {
    win.close();
};

function change_background_color() {
    win.moveBy(50, 50);
    win.focus();
};

function interval() {
    timer = window.setInterval(function () {
        alert("hi every 3 second.");
    }, 3000);
};

function time_out() {
    window.setTimeout(function () {
        alert("hi it been 2 second.");
    }, 2000);
};

function clear_interval() {
    window.clearInterval(timer);
};

function change_color(id) {
    var rule = document.querySelector("#" + id);
    rule.style.backgroundColor = "rgb(" + random_color() + ")";
}

function new_element() {
    var parrent = document.querySelector("#cont");
    var child = document.createElement("div");
    var last = document.getElementById("third");
    child.className = "divs new";
    child.innerText = "I'm new here";
    parrent.insertBefore(child, last)
    new_element_created++;
}

function change_all_colors() {
    var elements = document.body.children;
    for (var i = 0; i < elements.length; i++)
        elements[i].style.backgroundColor = "rgb(" + random_color() + ")";

    document.body.style.backgroundColor = "rgb(" + random_color() + ")";
}

function random_color() {
    var randomr = Math.floor(Math.random() * 255);
    var randomg = Math.floor(Math.random() * 255);
    var randomb = Math.floor(Math.random() * 255);

    return randomr + "," + randomg + "," + randomb;
}