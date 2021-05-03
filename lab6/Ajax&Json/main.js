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
  var bands = document.getElementById("bands");
  var data = send_request();
  for (var i in data) {
    var opt = document.createElement("option");
    opt.textContent = i;
    opt.value = i;
    bands.appendChild(opt);
  }
}

function set_members_option(data) {
  var members = document.getElementById("members");
  for (var i in data) {
    var opt = document.createElement("option");
    opt.textContent = data[i].name;
    opt.value = data[i].value;
    members.appendChild(opt);
  }
}

function get_selected_option(id) {
  var tag = document.getElementById(id);
  var index = tag.selectedIndex;
  var value = tag[index].value;
  if (id == "members") location.assign(value);
  var data = send_request();
  var team = data[value];
  set_members_option(team);
}

set_bands_option();
