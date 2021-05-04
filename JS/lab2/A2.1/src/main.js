
var query = new URLSearchParams(location.search);

function screen() {
    var uname = query.get("name");
    var title = query.get("title");
    var email = query.get("email");
    var mobile = query.get("mobile");
    var address = query.get("address");
    var gender = query.get("gender");
    user_name(title, uname,)
    create_tag("email", email);
    create_tag("mobile number", mobile);
    create_tag("address", address);
    create_tag("gender", gender);
}

function user_name(title, uname,) {
    var con = document.getElementById("con");
    var ele = document.createElement("h2");
    ele.innerText = "Welcome " + title + ", " + uname;
    con.appendChild(ele);
}

function create_tag(value, data) {
    var con = document.getElementById("con");
    var ele = document.createElement("h2");
    ele.innerText = "Your " + value + ": " + data;
    con.appendChild(ele);
}

screen()
