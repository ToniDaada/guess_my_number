"use strict";

// An easy way of selecting items in JavaScript
// What is the DOM: Document Object Model. Allowd us to use JS to access HTML elements and styles to manipulate them.
// To get the actual value of a property from like a ptag or htag e.t.c we use the '.textContent' method
// To get the actual value of a property in an input field we use the '.value' method

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;

// Handling click events
// Add event listener listens for events that happens and react to them. It accepts two arguements, the first one being the type of event being performed like a mouse click, a mouse scroll e.t.c, the second argument is funciton that explains what happens when the event happens

// This was where I defined the secret number between 1 and 20

let highestScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

console.log(secretNumber);

// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".btn.check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);

  //   When there is no input or input isn't a number
  if (!guess) {
    document.querySelector(".message").textContent = "No number 🚫";

    // If player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Guess 💫💫";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "300px";
    document.querySelector(".number").textContent = guess;
    if (score > highestScore) {
      highestScore = score;
      document.querySelector(".highscore").textContent = highestScore;
    }
  }

  //   Handles when the guess are wrong and too high and low and even handles when the user runs out of guesses
  else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess > secretNumber) {
        document.querySelector(".message").textContent =
          "Guess is too high 📈 ";
      } else if (guess < secretNumber) {
        document.querySelector(".message").textContent = "Guess is too low 📉";
      }
      score--;
      document.querySelector(".score").textContent = score;
    }
    if (score < 1) {
      document.querySelector(".message").textContent = "You lost the game ";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

// Add an event listener to the again button so that when it is clicked, the score is set to 20 and the value in the textbox is cleared and a new random number is set

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
  document.querySelector(".message").textContent = "Start guessing...";
});
