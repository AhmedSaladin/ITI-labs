// ---------------------------About section-------------------------------

$("#aboutbtn").click(function () {
  check_form();
  check_menu();
  if ($("#gbt").length == 0) {
    check_screen();
    $(".screen").empty();
    $(".screen").append(
      `
    <h2>Story about life</h2>
  <p> Once a young man asked the wise man, Socrates,
  The secret to success. Socrates patiently listened to the man’s question and told him to meet him near the river the next morning for the answer.
  The next morning Socrates asked the young man to walk with him towards the river.
  As they went in the river  the water got up to their neck. But to the young man’s surprise Socrates ducked him into the water.
  The young man struggled to get out of the water,
  but Socrates was strong and kept him there until the boy started turning blue.
  Socrates pulled the man’s head out of the water.
  The young man gasps and took a deep breath of air.
  Socrates asked, ‘What did you want the most when your head was in the water?” The young man replied, “Air.” 
  Socrates said, “That is the secret to success.
  When you want success as badly as you wanted the air while you were in the water,
  then you will get it. There is no other secret.”</p>`
    );
    $(".screen").attr("id", "abt");
  } else $("#abt").toggle();
});
// -------------------------------------------------------------------------

// ---------------------------Gallary section-------------------------------

var count = 1;
$("#gallerybtn").click(function () {
  check_form();
  check_menu();
  if ($("#glr").length == 0) {
    check_screen();
    $(".screen").empty();
    $(".screen").append(`<button id='pre'> < </button>`);
    $(".screen").append(`<img src='./img/1.jpg' id='img' >`);
    $(".screen").append(`<button id='nxt' > > </button>`);
    $("#pre").click(previous_element);
    $("#nxt").click(next_element);
    $("#nxt").css({ left: "960px", top: "205px", position: "fixed" });
    $("#img").css({ left: "655px", width: "300px", position: "fixed" });
    $("#pre").css({ left: "630px", top: "205px", position: "fixed" });
    $(".screen").attr("id", "glr");
  } else $("#glr").toggle();
});

function next_element() {
  count++;
  if (count > 6) {
    count = 1;
  }
  $("#img").attr("src", `./img/${count}.jpg`);
}

function previous_element() {
  count--;
  if (count < 1) {
    count = 6;
  }
  $("#img").attr("src", `./img/${count}.jpg`);
}
// -------------------------------------------------------------------------

// ---------------------------Service section-------------------------------

$("#servicebtn").click(function () {
  $(".screen").css("display", "none");
  check_form();
  $(".menu").slideToggle();
});
// --------------------------------------------------------------------------

// --------------------------Complain section--------------------------------

$("#complainbtn").click(function () {
  $(".screen").css("display", "none");
  check_menu();
  $("#form").toggle();
});

var uname, email, phone, complain;
$("#submit").click(function () {
  uname = $("#name").val();
  email = $("#email").val();
  phone = $("#phone").val();
  complain = $("#complain").val();
  $(".screen").empty();
  $("#form").toggle();
  check_screen();
  $(".screen").append(
    `<div class="ss" > <strong>Your Name:</strong> ${uname}</div>`
  );
  $(".screen").append(
    `<div class="ss" > <strong>Your Email:</strong> ${email}</div>`
  );
  $(".screen").append(
    `<div class="ss" > <strong>Your Phone:</strong> ${phone}</div>`
  );
  $(".screen").append(
    `<div class="ss" > <strong>You Complain about:</strong> ${complain}</div>`
  );
  $(".screen").append(
    `<button id='backbtn' class="ss" onclick="backbtn()">back</button>`
  );
  $(".ss").css({ padding: "10px", margin: "10px" });
});

function backbtn() {
  $(".screen").empty();
  $("#name").val(phone);
  $("#email").val(email);
  $("#phone").val(phone);
  $("#complain").val(complain);
  $("#form").toggle();
}
// ------------------------------------------------------------------------

// -------------------------Helper section---------------------------------

function check_screen() {
  if ($(".screen").css("display") == "none")
    $(".screen").css("display", "block");
}

function check_form() {
  if ($("#form").css("display") != "none") $("#form").css("display", "none");
}

function check_menu() {
  if ($(".menu").css("display") != "none") $(".menu").css("display", "none");
}
