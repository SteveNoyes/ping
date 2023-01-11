var l_hand = document.getElementById("lh");
var r_hand = document.getElementById("rh");
var peg = document.getElementById("peg");
var logas = document.getElementById("logas");

var fps = 60;
var playing = false;
var delay = 0;

var speedX = 10,
  speedY = 10,
  px = 40,
  py = 40;


window.addEventListener("keydown", kd);
window.addEventListener("keyup", ku);