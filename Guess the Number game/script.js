"use strict";

const newNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let num = newNumber();
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("No number guessed 🥲");

    //No value
  } else if (guess === num) {
    document.querySelector(".number").textContent = num;
    displayMessage("Correct Number! 🤪");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }

    //Wins
  } else if (guess !== num) {
    if (score > 1) {
      displayMessage(guess > num ? "Go lower 👇" : "Go higher 👆");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You've lost";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  num = newNumber();
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
