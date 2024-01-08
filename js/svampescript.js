window.addEventListener("load", showTitle);

let point;
let liv;

const svamp = document.querySelector("#svamp_container");
const svamp2 = document.querySelector("#svamp_container2");
const svamp3 = document.querySelector("#svamp_container3");
const fluesvamp = document.querySelector("#fluesvamp_container");

const sprite1 = document.querySelector("#svamp");
const sprite2 = document.querySelector("#svamp2");
const sprite3 = document.querySelector("#svamp3");

const fluesvamp1 = document.querySelector("#fluesvamp_sprite");

function showTitle() {
  hideAllScreens();

  document.querySelector("#start").classList.remove("hide");

  document.querySelector("#play").addEventListener("click", startGame);
}

function startGame() {
  document.querySelector("#game_ui_point").classList.remove("hide");
  document.querySelector("#game_ui_liv").classList.remove("hide");

  hideAllScreens();

  point = 0;
  liv = 3;

  document.querySelector("#mine_points").textContent = point;
  document.querySelector("#mine_liv").textContent = liv;

  svamp.classList.add("fald");
  let rnd = generateRandomNumber(10);
  svamp.classList.add("pos" + rnd);
  rnd = generateRandomNumber(3);
  svamp.classList.add("speed" + rnd);

  svamp2.classList.add("fald");
  rnd = generateRandomNumber(10);
  svamp2.classList.add("pos" + rnd);
  rnd = generateRandomNumber(3);
  svamp2.classList.add("speed" + rnd);

  svamp3.classList.add("fald");
  rnd = generateRandomNumber(10);
  svamp3.classList.add("pos" + rnd);
  rnd = generateRandomNumber(3);
  svamp3.classList.add("speed" + rnd);

  fluesvamp.classList.add("fald");
  rnd = generateRandomNumber(5);
  fluesvamp.classList.add("posFall" + rnd);
  rnd = generateRandomNumber(2);
  fluesvamp.classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  fluesvamp.classList.add("delay" + rnd);

  svamp.addEventListener("mousedown", clicksvamp);
  svamp2.addEventListener("mousedown", clicksvamp);
  svamp3.addEventListener("mousedown", clicksvamp);

  fluesvamp.addEventListener("mousedown", clickFlueSvamp);

  svamp.addEventListener("animationiteration", resetsvamp);
  svamp2.addEventListener("animationiteration", resetsvamp);
  svamp3.addEventListener("animationiteration", resetsvamp);

  fluesvamp.addEventListener("animationiteration", resetFlueSvamp);
}

function clicksvamp() {
  this.removeEventListener("click", clicksvamp);

  point = point + 1;

  document.querySelector("#mine_points").textContent = point;

  this.classList.add("frys");

  this.firstElementChild.classList.add("forsvind");

  this.addEventListener("animationend", resetsvamp);
}

function clickFlueSvamp() {
  fluesvamp.removeEventListener("click", clickFlueSvamp);

  if (liv > 1) {
    liv = liv - 1;
  } else {
    endGame();
  }
  document.querySelector("#mine_liv").textContent = liv;

  fluesvamp.classList.add("frys");

  document.querySelector("#fluesvamp_sprite").classList.add("forsvind");

  fluesvamp.addEventListener("animationend", resetFlueSvamp);
}

function resetsvamp() {
  this.classList = "";
  this.firstElementChild.classList = "";

  this.offsetHeight;
  this.classList.add("fald");

  let rnd = generateRandomNumber(10);
  this.classList.add("pos" + rnd);
  rnd = generateRandomNumber(3);
  this.classList.add("speed" + rnd);

  this.addEventListener("mousedown", clicksvamp);
}

function resetFlueSvamp() {
  document.querySelector("#fluesvamp_container").classList = "";
  document.querySelector("#fluesvamp_sprite").classList = "";

  let rnd = generateRandomNumber(5);
  document.querySelector("#fluesvamp_container").classList.add("pos" + rnd);
  rnd = generateRandomNumber(2);
  document.querySelector("#fluesvamp_container").classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);

  document.querySelector("#fluesvamp_container").offsetHeight;
  document.querySelector("#fluesvamp_container").classList.add("fald");

  document
    .querySelector("#fluesvamp_container")
    .addEventListener("mousedown", clickFlueSvamp);
}

function endGame() {
  if ((liv = 0)) {
    gameOver();
  } else {
    gameOver();
  }

  svamp.removeEventListener("animationend", resetsvamp);
  svamp.removeEventListener("animationiteration", resetsvamp);
  svamp.removeEventListener("mousedown", clicksvamp);

  fluesvamp.removeEventListener("mousedown", clickFlueSvamp);
  fluesvamp.removeEventListener("animationend", resetFlueSvamp);
  fluesvamp.removeEventListener("animationiteration", resetFlueSvamp);

  svamp.classList = "";
  document.querySelector("#svamp").classList = "";
  fluesvamp.classList = "";
  document.querySelector("#fluesvamp_sprite").classList = "";
}

function gameOver() {
  document.querySelector("#svamp_container").classList = "";

  hideAllScreens();
  document.querySelector("#game_over").classList.remove("hide");

  document.querySelector("#play_again_1").addEventListener("click", startGame);
}

function generateRandomNumber(num) {
  let rndNumber = Math.random();
  rndNumber = rndNumber * num;
  rndNumber = Math.floor(rndNumber);
  rndNumber = rndNumber + 1;

  return rndNumber;
}

function hideAllScreens() {
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
}
