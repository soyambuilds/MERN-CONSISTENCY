let gameSeq = [];
let userSeq = [];

let btns = ["box1", "box2", "box3", "box4"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randBox = btns[randIdx];
  let randBtn = document.querySelector(`.${randBox}`);

  gameSeq.push(randBox);
  console.log(gameSeq);

  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any Key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "rgb(74, 20, 84)";
    }, 150);
    reset();
  }
}

function btnPress() {
  if (started == false) {
    return;
  }

  let btn = this;
  userFlash(btn);

  let userBox = btn.getAttribute("id");
  userSeq.push(userBox);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
