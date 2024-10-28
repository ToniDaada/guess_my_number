"use strict";

// This was where I defined the secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highestScore = 0;
let score = 20;
console.log(secretNumber);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// document.querySelector(".number").textContent = secretNumber;
document.querySelector(".btn.check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);
  //   When there is no input or input isn't a number
  if (!guess) {
    displayMessage("No number 🚫");
    // If player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Guess 💫💫");
  // I set score to not change because I don't want the score to be reducing when       the user keeps on pressing check
    score = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "300px";
    document.querySelector(".number").textContent = guess;
    if (score > highestScore) {
      highestScore = score;
      document.querySelector(".highscore").textContent = highestScore;
    }
  }
  //   Handles when the guess are wrong and too high and low and even handles when         the user runs out of guesses
  else if (guess !== secretNumber) {
    if (score >= 1) {
      if (guess > secretNumber) {
        displayMessage("Guess is too high 📈 ");
      } else if (guess < secretNumber) {
        displayMessage("Guess is too low 📉");
      }
      score--;
      document.querySelector(".score").textContent = score;
    } else if (score < 1) {
      displayMessage("You lost the game ");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
// Add an event listener to the again button so that when it is clicked, the score   is set to 20 and the value in the textbox is cleared and a new random number is set
document.querySelector(".again").addEventListener("click", function () {
  // Resetting the score
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  // document.querySelector(".number").textContent = secretNumber;
  console.log(secretNumber);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
});
