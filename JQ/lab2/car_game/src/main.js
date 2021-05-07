$("#start").click(function () {
  $("#p1").animate(
    {
      top: "-=750px",
    },
    ran()
  );
  $("#p2").animate(
    {
      top: "-=750px",
    },
    ran()
  );
});

function ran() {
  return Math.floor(Math.random() * 5000);
}
