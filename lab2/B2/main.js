var navigation = document.getElementById("nav");

var img = document.getElementById("header").lastElementChild;

var clone = img.cloneNode(true);

var contanir = document.getElementsByClassName("center")[0];

var ele = document.createElement("div");

ele.className = "footer";

ele.appendChild(clone);

contanir.appendChild(ele);

navigation.style.listStyleType = "circle";

clone.style.position = "relative";

clone.style.right = "40%";

img.style.position = "relative";

img.style.left = "40%"

