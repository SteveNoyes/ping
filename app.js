var l_hand = document.getElementById("lh");
var r_hand = document.getElementById("rh");
var peg = document.getElementById("peg");
var logas = document.getElementById("logas");

var fps = 60;
var playing = false;
var delay = 0;


window.addEventListener("keydown", kd);
window.addEventListener("keyup", ku);