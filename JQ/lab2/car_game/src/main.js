var winner = "";
$("#start").click(function () {
  $("#p1").animate(
    {
      top: "-=750px",
    },
    ran(),
    function () {
      $("#p2").stop();
      winner = "Player 1";
      win();
    }
  );
  $("#p2").animate(
    {
      top: "-=750px",
    },
    ran(),
    function () {
      $("#p1").stop();
      winner = "Player 2";
      win();
    }
  );
});

function ran() {
  return Math.floor(Math.random() * 5000);
}
function win() {
  console.log(winner);
  $("#win").val(winner);
}
