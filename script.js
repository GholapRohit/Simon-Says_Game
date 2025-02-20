let gameSeq = [],
  userSeq = [];
const startBtn = document.getElementById("start");
const gameBtns = document.querySelectorAll(".color");
const levelPara = document.getElementById("levelPara");
const scoreBox = document.querySelector(".score-box");

let level = 0;

startBtn.addEventListener("click", startGame);
gameBtns.forEach((btn) => btn.addEventListener("click", btnPress));

function startGame() {
  scoreBox.classList.add("hide");
  startBtn.classList.add("dis-start-btn");
  gameBtns.forEach((btn) => btn.classList.remove("dis-game-btn"));
  setTimeout(() => {
    levelUp();
  }, 250);
}

function levelUp() {
  userSeq = [];
  levelPara.innerText = `Level ${++level}`;
  let randomNum = Math.floor(Math.random() * gameBtns.length);
  gameSeq.push(randomNum);
  flashBtn(gameBtns[randomNum]);
  console.log("Game Sequence:", gameSeq);
}

function flashBtn(btn) {
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 250);
}

function btnPress() {
  let btn = this;
  flashBtn(btn);
  userSeq.push(Array.from(gameBtns).indexOf(btn));
  checkSeq();
}

function checkSeq() {
  let ind = userSeq.length - 1;
  if (userSeq[ind] === gameSeq[ind]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    console.log("User Sequence:", userSeq);
    scoreBox.classList.remove("hide");
    scoreBox.innerText = `Your score is ${level}`;
    return reset();
  }
}

function reset() {
  startBtn.classList.remove("dis-start-btn");
  gameBtns.forEach((btn) => btn.classList.add("dis-game-btn"));
  level = 0;
  levelPara.innerText = `Level ${level}`;
  gameSeq = [];
  userSeq = [];
}
