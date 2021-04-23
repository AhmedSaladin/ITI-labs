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
    document.cookie = "username=" + get_name + ";expires=" + set_date() + ";";
}

function set_age_cookie() {
    var get_age = document.getElementById("age").value;
    document.cookie = "userage=" + get_age + ";expires=" + set_date() + ";";
}

function set_gender_cookie() {
    var get_gender = document.getElementsByClassName("gender");
    for (var i = 0; i < get_gender.length; i++) {
        if (get_gender[i].checked) {
            document.cookie = "usergender=" + get_gender[i].value + ";expires=" + set_date() + ";";
        }
    }
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

function welcome_screen() {
    var data = get_all_cookie();
    var body = document.getElementById("do");
    var new_elemwnt = document.createElement("div");
    set_visited();
    if (is_there_cookie()) {
        for (i in data) {
            new_elemwnt.innerHTML += i + ": " + data[i] + " and you visit this site:  ";
        }
    } else {
        new_elemwnt.innerHTML = "You can't be here";
    }
    body.appendChild(new_elemwnt);
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
    var confirmed = confirm();
    console.log(confirmed);
    location.assign("index.html")
}

function screen() {

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