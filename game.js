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
  health = health - 2;
  drawHealth()
}

function kick() {
  health = health - 3;
  drawHealth()
}

function ultimatePunch() {
  health = health - 7; //two punches with a kick
  drawHealth()

}

function drawHealth() {
  let charHealth = document.getElementById('health');
  charHealth.innerText = health.toString();
}

drawHealth()