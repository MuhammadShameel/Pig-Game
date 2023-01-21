const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score1 = document.getElementById("score--0");
const score2 = document.getElementById("score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1 ");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const diceEl = document.querySelector(".dice");
const body = document.querySelector("#body");

score1.textContent = 0;
score2.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Roll button funtion
btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});

// Hold button function
btnHold.addEventListener("click", function () {
  scores[activePlayer] = scores[activePlayer] + currentScore;
  currentScore = 0;
  document.getElementById(`current--0`).textContent = currentScore;
  document.getElementById(`current--1`).textContent = currentScore;

  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 50) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    document.getElementById("roll-btn").style.display = "none";
    document.getElementById("hold-btn").style.display = "none";
    document.getElementById(`current--${activePlayer}`).textContent = "you win";
  } else {
  }
});

// New Game Button Function
btnNew.addEventListener("click", function () {
  window.location.reload();
});
