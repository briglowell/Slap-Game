//NOTE
//
//
//
//
//
//
//

let defaultHealth = 100;
let monsterHitCount = 0;
let playerHitCount = 0;
let killCount = 0;
let targetMonster;
let frank;
let skeleton;
let karen;
let mummy;
let banshee;


let player = {
  name: "gunnie",
  health: defaultHealth,
  img: "https://www.writeups.org/wp-content/uploads/MJOLNIR-Spartan-armor-Halo-video-game-a.jpg",
  attacks: {
    slap: 1,
    punch: 5,
    kick: 10,
    ultimatePunch: 20,
  },
}

let monsters = [
  skeleton = {
    name: "Mr. Bones",
    img: 'https://i.pinimg.com/originals/df/bf/67/dfbf6712ddee64251c115830a98d00b3.jpg',
    health: defaultHealth * .5,
    attacks: [1, 2, 5],
    background: 'https://art.ngfiles.com/images/1042000/1042781_walnusstinte_aurelia-crypt-background.png?f1570244966'
  },
  skeleton = {
    name: "Mr. Bones",
    img: 'https://i.pinimg.com/originals/df/bf/67/dfbf6712ddee64251c115830a98d00b3.jpg',
    health: defaultHealth * .5,
    attacks: [1, 2, 5],
    background: 'https://art.ngfiles.com/images/1042000/1042781_walnusstinte_aurelia-crypt-background.png?f1570244966'
  },
  mummy = {
    name: "TP",
    img: 'https://i.pinimg.com/564x/85/d4/11/85d41139b8df7ae9a0e6c593269ac694.jpg',
    health: defaultHealth * .75,
    attacks: [1, 2, 5],
    background: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/006e8d6a-6251-4d26-9545-e1d6b992124f/d7em2jm-ed78ae7e-4df6-4db7-b104-24b795d42ff0.jpg/v1/fill/w_1024,h_498,q_75,strp/crypt_background_by_wraeclast_d7em2jm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00OTgiLCJwYXRoIjoiXC9mXC8wMDZlOGQ2YS02MjUxLTRkMjYtOTU0NS1lMWQ2Yjk5MjEyNGZcL2Q3ZW0yam0tZWQ3OGFlN2UtNGRmNi00ZGI3LWIxMDQtMjRiNzk1ZDQyZmYwLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.oZCUGI1mGWhBkveV8I45LTyXtIwif5sYra07aSPgsQc'
  },
  banshee = {
    name: "Shriek",
    img: 'https://i.pinimg.com/736x/d4/3d/ac/d43dac16fe05c4bf063941dd2dff18b5.jpg',
    health: defaultHealth,
    attacks: [1, 2, 5],
    background: 'https://i.ytimg.com/vi/nAOAKk3oPRs/maxresdefault.jpg'
  },
  karen = {
    name: "Karen",
    img: 'https://vignette.wikia.nocookie.net/thelastofus/images/2/24/Bloater_Part_II_model.png/revision/latest?cb=20200713122711',
    health: defaultHealth * 5,
    attacks: [1, 1, 1],
    background: 'https://i.pinimg.com/originals/b1/30/67/b130672cb9ec18ef8c44a2e832697ff0.jpg'
  },
  frank = {
    name: "Frank",
    img: 'https://iv1.lisimg.com/image/15289809/608full-hot-rod-screenshot.jpg',
    health: defaultHealth * 2,
    attacks: [5, 10, 20],
    background: 'https://media1.santabanta.com/full1/Hollywood%20Movies/Hot%20Rod/hot2d.jpg'
  },
]

let items = {
  potions: {
    health: 50,
    strength: 2,
    accuracy: 0,
  },
}

function slap() {
  let monsterMiss = Math.floor(Math.random() * 4);
  let monsterDmg = targetMonster.attacks[Math.floor(Math.random() * targetMonster.attacks.length)];

  targetMonster.health--;
  monsterHitCount++;

  if (monsterMiss < 3) {
    player.health -= monsterDmg;
    playerHitCount++
  }
  updateDamage()
}

function punch() {
  let miss = Math.floor(Math.random() * 11);
  let monsterMiss = Math.floor(Math.random() * 4);
  let monsterDmg = targetMonster.attacks[Math.floor(Math.random() * targetMonster.attacks.length)];

  if (miss < 8) {
    targetMonster.health -= 5;
    monsterHitCount++;
  }

  if (monsterMiss < 3) {
    player.health -= monsterDmg;
    playerHitCount++
  }

  updateDamage()
}

function kick() {
  let miss = Math.floor(Math.random() * 4);
  let monsterMiss = Math.floor(Math.random() * 4);
  let monsterDmg = targetMonster.attacks[Math.floor(Math.random() * targetMonster.attacks.length)];

  if (miss < 3) {
    targetMonster.health -= 10;
    monsterHitCount++;
  }
  if (monsterMiss < 3) {
    player.health -= monsterDmg;
    playerHitCount++
  }
  updateDamage();
}

function ultimatePunch() {
  let miss = Math.floor(Math.random() * 11);
  let monsterMiss = Math.floor(Math.random() * 4);
  let monsterDmg = targetMonster.attacks[Math.floor(Math.random() * targetMonster.attacks.length)];

  if (miss < 6) {
    targetMonster.health -= 20; //two punches with a kick
    monsterHitCount++;
  }
  if (monsterMiss < 3) {
    player.health -= monsterDmg;
    playerHitCount++
  }
  updateDamage()
}

function updateDamage() {
  drawHealth()
  drawHits()
  setTimeout(checkDead, 100);
}

function checkDead() {
  if (player.health <= 0) {
    if (targetMonster.name == 'frank') alert("Real men actually grow mustaches...");
    let retry = window.prompt("Would you like to try again? y/n");
    if (retry.toLowerCase() == 'y' || retry.toLowerCase() == 'yes') location.reload();
  } else if (targetMonster.health <= 0) {
    killCount++;
    drawMonster();
    drawHealth();
    drawHits();
  }
}

function drawHealth() {
  let monsterHealth = document.getElementById('monster-health');
  monsterHealth.innerText = targetMonster.health.toString();
  let playerHealth = document.getElementById('player-health');
  playerHealth.innerText = player.health.toString();
  let playerKills = document.getElementById('player-kill-count');
  playerKills.innerText = killCount.toString();
}


function drawHits() {
  let monsterHit = document.getElementById('monster-hit-count');
  monsterHit.innerText = monsterHitCount.toString();
  let playerHit = document.getElementById('player-hit-count');
  playerHit.innerText = playerHitCount.toString();
}

function drawMonster() {
  monsterHitCount = 0;
  targetMonster = monsters[Math.floor(Math.random() * monsters.length)]

  let monsterImg = document.getElementById("monster-img")
  // @ts-ignore
  monsterImg.src = targetMonster.img;
  let playerImg = document.getElementById("player-img")
  // @ts-ignore
  playerImg.src = player.img;
  let villianName = document.getElementById('monster-name');
  villianName.innerText = targetMonster.name;
  player.innerText = player.name;

  document.body.style.backgroundImage = "url('" + targetMonster.background + "')"

}

function drawPlayerName() {
  let getPlayerName = window.prompt("Please enter player name")
  let playerName = document.getElementById('player-name');
  playerName.innerText = getPlayerName;
}

drawMonster()
updateDamage()
drawPlayerName()