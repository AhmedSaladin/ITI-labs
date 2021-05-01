/*
 --> Make ajax request to consume the service of “https://reqres.in/api/users”
    ----> display email, first_name, and last_name fields in a table.  --done
*/

function send_request() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users");
  xhr.send("");
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status != 200) throw "Data not found 404";
      var res = this.responseText;
      res = JSON.parse(res);
      res = res.data;
      for (var i in res) create_table(res[i]);
    }
  };
}

function create_table(data) {
  var table = document.getElementById("tbody");
  var tr = document.createElement("tr");
  tr.innerHTML = ` <td>${data.first_name}</td>
    <td>${data.last_name}</td>
    <td>${data.email}</td>`;
  table.append(tr);
}

send_request();
