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

function kadras() {
  setTimeout("kadras()", 1000 / fps);
  if (delay > 0) {
    delay -= 1;
  } else if (playing) {
    calculate();
  }
  requestAnimationFrame(render);
}

function calculate() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  px += speedX;
  py += speedY;
  ry += rDir * 10;
  ly += lDir * 10;

  cLeft();
  cRight();
  if ((px + 20 + speedX) > w) {
    px = w / 2;
    py = h / 2;
    speedY = (Math.random() * 20) - 10;
    //logas.innerHTML = speedY;
    speedX = (5 + (Math.random() * 5));
    sL++;
  } else if (px < 0) {
    px = w / 2;
    py = h / 2;
    speedY = (Math.random() * 20) - 10;
    speedX = -(5 + (Math.random() * 5));
    sR++;
  }
  if ((py + 20 + speedY) > h) {
    py = h - 20;
    speedY = -(5 + (Math.random() * 5));
  } else if (py < 0) {
    py = 0;
    speedY = (5 + (Math.random() * 5));
  }
  if (ry + 100 > h) {
    ry = h - 100;
  } else if (ry < 0) {
    ry = 0;
  }
  if (ly + 100 > h) {
    ly = h - 100;
  } else if (ly < 0) {
    ly = 0;
  }
  if (sL >= 6 || sR >= 6) {
    playing = false;
    delay = 120;
    gameReset();
  }
}

function cLeft() {
  if (px < 20 && py >= ly - 10 && py <= ly + 90) {
    px = 20;
    speedX = (5 + (Math.random() * 5));
    speedY = (Math.random() * 20) - 10;
    l_hand.style.backgroundColor = "lime";
  } else {
    l_hand.style.backgroundColor = "red";
  }
}

function cRight() {
  var w = window.innerWidth;
  if (px > w - 40 && py >= ry - 10 && py <= ry + 90) {
    px = w - 40;
    speedX = -(5 + (Math.random() * 5));
    speedY = (Math.random() * 20) - 10;
    r_hand.style.backgroundColor = "lime";
  } else {
    r_hand.style.backgroundColor = "red";
  }
}

function render() {
  peg.style.left = px + "px";
  peg.style.top = py + "px";
  r_hand.style.top = ry + "px";
  l_hand.style.top = ly + "px";
  logas.innerHTML = "<b>" + sL + "</b>:<b>" + sR + "</b>";
}

function gameReset() {
  ry = ly = (window.innerHeight / 2 - 50);
  px = window.innerWidth / 2 - 10;
  py = window.innerHeight / 2 - 10;
  sL = sR = 0;
}
gameReset();
kadras();