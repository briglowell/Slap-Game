//NOTE
//
//
//
//
//
//
//

let health = 100;
let defaultHealth = 100;
let monsterName = "fluffy";
let monsterHitCount = 0;
let playerName = "excalibur";
let monsterArr = [];


let player = {
  name: "gunnie",
  health: defaultHealth,
  attacks: {
    slap: 1,
    punch: 5,
    kick: 10,
    ultimatePunch: 20,
  },
}

let monsters = {
  frank: {
    name: "Frank",
    health: defaultHealth * 2,
    attacks: {
      att1: 5,
      att2: 10,
      att3: 20,
    },
  },
  skeleton: {
    name: "Mr. Bones",
    health: defaultHealth * .5,
    attacks: {
      att1: 1,
      att2: 2,
      att3: 5,
    },
  },
  karen: {
    name: "Karen",
    health: defaultHealth * 5,
    attacks: [1, 1, 1]
  },
}

let items = {
  potions: {
    health: 50,
    strength: 2,
    accuracy: 0,
  },
}

function slap(targetMonster) {
  let monsterMiss = Math.floor(Math.random() * 4);
  health--;
  monsterHitCount++;
  if (monsterMiss < 3) {
    // health -= 10;
    // monsterHitCount++;
  } else {
    // alert("miss")
  }
  if (monsterMiss < 3) {

  } else {

  }
  drawHealth()
  drawHits()
}

function punch(targetMonster) {
  let miss = Math.floor(Math.random() * 11);
  let monsterMiss = Math.floor(Math.random() * 4);
  if (miss < 8) {
    health -= 5;
    monsterHitCount++;
  } else {
    alert("miss")
  }

  if (monsterMiss < 3) {

  } else {

  }


  drawHealth()
  drawHits()
}

function kick(targetMonster) {
  let miss = Math.floor(Math.random() * 4);
  let monsterMiss = Math.floor(Math.random() * 4);
  let monsterDmg = targetMonster.attacks[Math.floor(Math.random() * targetMonster.attacks.length)];

  if (miss < 3) {
    health -= 10;
    monsterHitCount++;
  } else {
    // alert("miss")
  }
  if (monsterMiss < 3) {
    player.health -= monsterDmg;
  } else {

  }

  drawHealth()
  drawHits()
}

function ultimatePunch(targetMonster) {
  let miss = Math.floor(Math.random() * 11);
  let monsterMiss = Math.floor(Math.random() * 4);

  if (miss < 6) {
    health -= 20; //two punches with a kick
    monsterHitCount++;
  } else {
    // alert("miss")
  }
  if (monsterMiss < 3) {

  } else {

  }
  drawHealth()
  drawHits()
}

function updateDamage() {
  drawHealth()
  drawHits()
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


drawName()
updateDamage()