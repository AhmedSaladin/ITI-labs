/*
 --> Make ajax request to consume the service of “https://reqres.in/api/users”
    ----> display email, first_name, and last_name fields in a table. 
*/

function send_request() {
  var xhr = new XMLHttpRequest();
  var respons;
  xhr.open("GET", "https://reqres.in/api/users");
  xhr.send("");
  xhr.onreadystatechange = function () {
    if (this.status != 200) throw "Data not found 404";
    respons = JSON.parse(xhr.responseText);
    respons = respons.data;
  };
  return respons;
}

function create_table() {
  var data = send_request();
  var table = document.createElement("table");

  console.log(table);
}
