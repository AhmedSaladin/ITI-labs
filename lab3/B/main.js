var form = document.getElementsByTagName("form")[0];
var timer;
form.onsubmit = function () {
    var prp = confirm(" do you want to submit data? ");
    if (!prp) {
        event.preventDefault();
    }
    console.log(prp);
}

var uded = new Event("user hasn’t entered any data"); // create new event

form.addEventListener("user hasn’t entered any data", function () { // listen to event
    timer = setInterval(function () {
        alert("Please enter data.")
    }, 3000)
})

form.dispatchEvent(uded)  // start event

function clear_interval() {
    clearInterval(timer);
}
