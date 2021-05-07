function red() {
  var r = document.getElementById("red");
  return r.value;
}
function green() {
  var g = document.getElementById("green");
  return g.value;
}
function blue() {
  var b = document.getElementById("blue");
  return b.value;
}
function change_color() {
  var r = red();
  var g = green();
  var b = blue();
  var txt = document.getElementById("txt");
  txt.style.color = `rgb(${r},${g},${b})`;
}
