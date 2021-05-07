$("#start").click(function () {
  win(" ");
  $("#p1").animate(
    {
      top: "-=750px",
    },
    ran(),
    function () {
      $("#p2").stop();
      win("Player 1");
    }
  );
  $("#p2").animate(
    {
      top: "-=750px",
    },
    ran(),
    function () {
      $("#p1").stop();
      win("Player 2");
    }
  );
});

function ran() {
  return Math.floor(Math.random() * 5000);
}

function win(winner) {
  $("#win").val(winner);
}

$("#reset").click(function () {
  $("#p1").css("left", "158px");
  $("#p2").css("left", "339px");
  $(".car").css("top", "780px");
  win(" ");
});
