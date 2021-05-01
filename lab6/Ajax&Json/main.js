/*
find out the rockbands.json file to make a page with 2 dropdown lists,
 the 1stone is filled with the band and the 2ndone is filledwith the artist after selecting a band from its dropdown list.
Once the user selects an artist of the band;open his link
*/
function send_request() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./rockbands.json", false);
  xhr.send(null);
  var res = JSON.parse(xhr.responseText);
  return res;
}

function set_bands_option() {
  var data = send_request();
  var tag = document.getElementById("bands");
  console.log(data);
  for (var i in data) {
    var opt = document.createElement("option");
    opt.textContent = i;
    opt.value = i;
    tag.appendChild(opt);
  }
}

// function set_members_option(data) {
//   var tag = document.getElementById("members");
//   var opt = document.createElement("option");
//   for (var i in data) {
//     opt.textContent = data[i].name;
//     opt.value = data[i].value;
//     tag.appendChild(opt);
//   }
// }
send_request();
set_bands_option();
