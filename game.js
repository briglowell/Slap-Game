//NOTE
//
//
//
//
//
//
//

var health = 100;
let monsterName = "fluffy";
let monsterHitCount = 0;
let playerName = "excalibur";

function slap() {
  health--;
  monsterHitCount++;
  drawHealth()
  drawHits()
}

function punch() {
  health -= 5;
  monsterHitCount++;
  drawHealth()
  drawHits()
}

function kick() {
  health -= 10;
  monsterHitCount++;
  drawHealth()
  drawHits()
}

function ultimatePunch() {
  health -= 20; //two punches with a kick
  monsterHitCount++;
  drawHealth()
  drawHits()
}

function update() {

}

function drawHealth() {
  let charHealth = document.getElementById('health');
  charHealth.innerText = health.toString();
}

function drawName() {
  let villianName = document.getElementById('monster-name');
  let player = document.getElementById('player-name');
  villianName.innerText = monsterName;
  player.innerText = playerName;
}

function drawHits() {
  let hit = document.getElementById('monster-hit-count');
  hit.innerText = monsterHitCount.toString();
}

drawHealth()
drawName()
drawHits()