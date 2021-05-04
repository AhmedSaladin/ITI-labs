var win = [];
var timer;
function open_new_window() {
    for (var i = 0; i < 3; i++) {
        var window = open((i + 1) + ".html", "", "width =250, height =250");
        window.focus();
        win.push(window);
    }
    moving_new_window();
    win.pop();
};

function close_new_window() {
    for (var i = 0; i < win.length; i++)
        win[i].close();
    clearInterval(timer);
};

function moving_new_window() {
    timer = setInterval(function () {
        win[0].moveBy(10, 10);
        win[0].focus();
        if (!win[0]) {
            clearInterval(timer);
        }
    }, 500)
}

function stoping_new_window() {
    clearInterval(timer);
    win[0].focus();
}

