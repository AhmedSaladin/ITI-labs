/*
1-getCookie(cookieName):
Retrieves a cookie value based on a cookie name.

2-setCookie(cookieName,cookieValue[,expiryDate]):
    Sets a cookie based on a cookie name, cookie value, and expiration date.
    
3-deleteCookie(cookieName):
    Deletes a cookie based on a cookie name.
    
4-allCookieList():
    returns a list of all stored cookies.
    
5-hasCookie(cookieName):
    Check whether a cookie exists or not.
*/

function submit() {
    set_name_cookie()
    set_age_cookie()
    set_gender_cookie()
    set_get_color()
    set_visited()
    location.assign("welcome.html")
}

function set_name_cookie() {
    var get_name = document.getElementById("name").value;
    valid_name(get_name);
    document.cookie = "username=" + get_name + ";expires=" + set_date() + ";";
}

function set_age_cookie() {
    var get_age = document.getElementById("age").value;
    valid_age(get_age);
    document.cookie = "userage=" + get_age + ";expires=" + set_date() + ";";
}

function set_gender_cookie() {
    var get_gender = document.getElementsByClassName("gender");
    valid_gender(get_gender);
    document.cookie = "usergender=" + get_gender_value(get_gender) + ";expires=" + set_date() + ";";
}

function set_get_color() {
    var color = document.getElementById("color")
    var idx = color.selectedIndex;
    var clrval = color.options[idx].value;
    document.cookie = "color=" + clrval + ";expires=" + set_date() + ";";
}

function set_date() {
    var date = new Date();
    date.setMonth(date.getMonth() + 3);
    return date;
}

function delete_cookie() {
    var cookies = get_all_cookie();
    for (var i in cookies) {
        document.cookie = i + "=;expire=3-1-2010;";
    }
}

function get_all_cookie() {
    var cookies = document.cookie;
    var arr = cookies.split(";");
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
        var ele = arr[i].split("=");
        new_arr["" + ele[0].trim() + ""] = ele[1].trim();
    }
    return new_arr;
}


function is_there_cookie() {
    var cookies = get_all_cookie()
    console.log(cookies)
    if (cookies["username"] != 0) {
        return true
    } else {
        return false
    }
}

function log_out() {
    delete_cookie()
    var confirmed = confirm("Are you sure you want logout?");
    if (confirmed) {
        location.assign("index.html")
    }
}


function set_visited() {
    var cookies = get_all_cookie();
    new_value = cookies["visited"];
    new_value++;
    if (cookies["visited"] != 0)
        document.cookie = "visited=" + new_value + ";expires=" + set_date() + ";";
    else
        document.cookie = "visited=1;expires=" + set_date() + ";";
}

function create_span(data, color) {
    var span = document.createElement("span");
    span.style.color = color;
    span.innerText = data;
    return span;
}

function create_img(gender) {
    var img = document.createElement("img");
    img.height = "150";
    if (gender == "male") {
        img.src = "../../lab3/A/imgs/1.jpg";
    } else {
        img.src = "../../lab3/A/imgs/2.jpg";
    }
    return img;
}

function welcome_screen() {
    var data = get_all_cookie();
    var body = document.getElementById("do");
    var new_div = document.createElement("div");
    new_div.className = "container";
    body.appendChild(new_div);
    set_visited();
    is_empty(data["usergender"]);
    new_div.appendChild(create_img(data["usergender"]));
    new_div.innerHTML += "Welcome, ";
    new_div.appendChild(create_span(data["username"], data["color"]));
    new_div.innerHTML += " you have visit this page ";
    new_div.appendChild(create_span(data["visited"], data["color"]));
    new_div.innerHTML += " times.";
}


function valid_name(name) {
    if (name == "")
        throw Error("Name can't be empty string");
}


function valid_age(age) {
    if (isNaN(parseInt(age)))
        throw Error("Age is not valid, age must be a number.");
}

function valid_gender(gender) {
    var is_valid = get_gender_value(gender);
    if (is_valid == undefined)
        throw Error("Gender is not valid, it can't be empty")
}

function get_gender_value(gender) {
    var value;
    for (var i = 0; i < gender.length; i++) {
        console.log(gender[i])
        if (gender[i].checked)
            value = gender[i].value;
    }
    return value;
}

function is_empty(data) {
    if (data == "" || data == 0)
        throw Error("Cookies not valid")
}