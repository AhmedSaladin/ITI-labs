var count = 1;
$("#ab").click(function () {
  $(".screen").empty();
  $(".screen")
    .append(
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
    )
    .css({ "text-align": "justify", "text-justify": "inter-word" });
});

$("#ga").click(function () {
  $(".screen").empty();
  $(".screen").append(`<button id='pre'> < </button>`);
  $(".screen").append(`<img src='./img/1.jpg' height='250px' id='img'>`);
  $(".screen").append(`<button id='nxt' > > </button>`);
  $("#pre").click(previous_element);
  $("#nxt").click(next_element);
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
