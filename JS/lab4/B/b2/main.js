/*
Using Constructor method for creating Objects,
    write a script that allows you to create a rectangle object that:
 1- Should have width and height properties.

 2- Implement two methods for calculating its area and perimeter.

 3- Implement displayInfo() function to display a message 
    declaring the width, height, area and perimeter of the created object.
*/

function display_result() {
    var height = parseFloat(document.getElementById("height").value);
    var width = parseFloat(document.getElementById("width").value);

    if (isNaN(height) || isNaN(width)) {
        alert("Enter valid numbers");
    } else {
        var rec = new Rectangle(height, width);
        result_div(rec.displayInfo());
    }
}

function Rectangle(wdth, hght) {
    return {
        width: wdth,
        hight: hght,
        area: function () {
            return this.hight * this.width;
        },
        perimeter: function () {
            return 2 * (this.hight + this.width);
        },
        displayInfo: function () {
            return "Your rectangle width: " + this.width +
                ", hight: " + this.hight + ", his area: " +
                this.area() + ", his perimeter: " + this.perimeter();
        }
    }
}

function result_div(result) {
    var body = document.getElementsByTagName("body")[0];
    var new_div = document.createElement("div");
    new_div.style.color = "blue";
    new_div.innerText = result;
    body.appendChild(new_div);
}