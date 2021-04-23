var form = document.getElementsByTagName("form")[0];

form.onsubmit = function () {
    alert("bad");
    var prp = confirm(" do you want to submit data? ");
    if (!prp) {
        event.preventDefault();
    }
    console.log(prp);
}

var uded = new Event("user hasn’t entered any data"); // create new event

form.addEventListener("user hasn’t entered any data", function () { // listen to event
    setTimeout(function () {
        alert("Please enter data.")
    }, 30000)
})

form.dispatchEvent(uded)  // start event

