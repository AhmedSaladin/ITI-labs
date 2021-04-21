var position = 0;
var timer;

function screen() {
    timer = setInterval(function () {
        forward()
    }, 500)
}

function start_moving() {
    screen();
}

function stop_moving() {
    clearInterval(timer);
}

function forward() {
    var img = document.images;

    setTimeout(function () {
        img[position].src = "img/marble3.jpg";
    }, 100)

    img[position].src = "img/marble1.jpg";
    position++;

    if (position == img.length)
        position = 0;

}

start_moving()