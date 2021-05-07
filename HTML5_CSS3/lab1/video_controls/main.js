var video = document.getElementById("vid");
var du_bar = document.getElementById("du");
var button = document.getElementById("pl");

function play_video() {
  if (video.paused) {
    video.play();
    button.value = "Pause";
  } else {
    video.pause();
    button.value = "Play";
  }
}

function video_full() {
  video.requestFullscreen();
}

function mute_video_volume() {
  var vol = document.getElementById("vol");
  if (video.muted) {
    video.muted = false;
    vol.value = video.volume * 100;
  } else {
    video.muted = true;
    vol.value = 0;
  }
}

function video_volume(value) {
  video.volume = value / 100;
  video.muted = false;
}

function video_seek(value) {
  switch (value) {
    case "1":
      video.currentTime += 5;
      break;
    case "1+":
      video.currentTime += 10;
      break;
    case "-1":
      video.currentTime -= 5;
      break;
    case "--1":
      video.currentTime -= 10;
      break;
  }
}

function video_duration() {
  var du = video.duration;
  du_bar.max = du;
  du_bar.min = 0.0;
  du_bar.step = 0.005;
}

function bar(value) {
  video.currentTime = value;
}

video_duration();
video.ontimeupdate = function () {
  du_bar.value = video.currentTime;
  if (video.duration == video.currentTime) {
    button.value = "Play Again";
  }
};

function video_speed(value) {
  video.playbackRate = value;
}
