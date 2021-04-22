var images = document.images;
// var random_src = Math.floor((Math.random() * 6) + 1);



function replace_img_source() {
    for (let i = 0; i < images.length; i++) {
        var random_src = Math.floor((Math.random() * 6) + 1);
        images[i].id = random_src;
    }
}
replace_img_source()