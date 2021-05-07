function play_video() {
  var video = document.getElementById("vid");
  var button = document.getElementById("pl");
  if (video.paused) {
    video.play();
    button.value = "Pause";
  } else {
    video.pause();
    button.value = "Play";
  }
}
