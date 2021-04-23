// This function returns a random number between 1 and 100
function randomNumber() {
  return Math.ceil(Math.random() * 100);
}

// This function takes a string as single parameter and outputs it to HTML
function printOnScreen(value) {
  let game = document.getElementById("game");
  let line = document.createElement("div");
  line.textContent = value;
  game.appendChild(line);
}

// This variable contains the secret number that the user needs to guess
let secretNumber = randomNumber();
let counter = 0;
// This function is called every time the user guesses a new number
function onGuess(guessedNumber) {
  counter++;
  if (guessedNumber === secretNumber) {
    printOnScreen("You Won");
    printOnScreen("It was" + counter + "times clicked");
    {
      console.log("It was" + counter + "times clicked");
    }
    document.body.style.backgroundColor = "green";
  } else if (guessedNumber < secretNumber) {
    printOnScreen("Number is bigger");
  } else if (guessedNumber > secretNumber) {
    printOnScreen("Number is smaller");
  }
  // TODO - call printOnScreen function with a string
  // informing the user whether the secret number is
  // smaller, larger or equal
  console.log("user guessed: " + guessedNumber + "secretNumber" + secretNumber);
}
