var active = [];


function set_images_id() {
    var images = document.images;
    for (var i = 0; i < images.length; i++) {
        var random_src = Math.floor((Math.random() * 6) + 1);
        images[i].id = random_src;
    }
}


function change_src(image) {
    if (image.className != "off") {
        for (var i = 1; i <= 6; i++) {
            if (image.id == i) {
                image.src = "img/" + i + ".gif";
                image.className = "active";
                active.push(image);
                if (active.length > 1)
                    check_active()

            }
        }
    }
}





function check_active() {
    if (active[0].id == active[1].id &&
        active[0].className == active[1].className) {
        active[0].className = "off";
        active[1].className = "off";
        active = [];
    } else {
        setTimeout(function () {
            for (var i = 0; i < active.length; i++) {
                active[i].src = "img/moon.gif";
                active[i].className = "";
            }
            active = [];
        }, 500)
    }
}

set_images_id()
