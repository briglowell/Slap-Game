//NOTE
//
//
//
//
//
//
//

var health = 100;

function slap() {
  health--;
  drawHealth()
}

function punch() {
  health -= 5;
  drawHealth()
}

function kick() {
  health -= 10;
  drawHealth()
}

function ultimatePunch() {
  health -= 20; //two punches with a kick
  drawHealth()
}

function drawHealth() {
  let charHealth = document.getElementById('health');
  charHealth.innerText = health.toString();
}

drawHealth()