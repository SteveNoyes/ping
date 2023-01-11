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
ry = 0;
ly = 0;
var bUP = 0,
  bDN = 0;
rDir = 0;
var bW = 0,
  bS = 0;
lDir = 0;
var sL = 0,
  sR = 0;



window.addEventListener("keydown", kd);
window.addEventListener("keyup", ku);

function kd(evt) {
  switch (evt.keyCode) {
    case 38:
      {
        bUP = -1;
      }
      break;
    case 40:
      {
        bDN = 1;
      }
      break;
    case 87:
      {
        bW = -1;
      }
      break;
    case 83:
      {
        bS = 1;
      }
      break;
  }
  rDir = bUP + bDN;
  lDir = bW + bS;
  if (!playing && delay == 0) {
    playing = true;
    sL = sR = 0;
  }
}

function ku(evt) {
  switch (evt.keyCode) {
    case 38:
      {
        bUP = 0;
      }
      break;
    case 40:
      {
        bDN = 0;
      }
      break;
    case 87:
      {
        bW = 0;
      }
      break;
    case 83:
      {
        bS = 0;
      }
      break;
  }
  rDir = bUP + bDN;
  lDir = bW + bS;
}