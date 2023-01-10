function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function computerChoice() {
  let computer = getRandomInt();
  if (computer === 0) {
    return "Rock";
  } else if (computer === 1) {
    return "Paper";
  } else if (computer === 2) {
    return "Scissors";
  }
}
let gameWin = 0;

function playRound() {
  let compSelection = computerChoice();

  let playerChoice = prompt("Rock, paper, scissors!").toUpperCase();

  if (playerChoice === "ROCK")
    if (compSelection === "Rock") {
      console.log("You: Rock\nComputer: Rock\nTie!");
    } else if (compSelection === "Paper") {
      console.log("You: Rock\nComputer: Paper\nYou lose!");
    } else {
      console.log("You: Rock\nComputer: Scissors.\nYou win!");
      gameWin++;
    }

  if (playerChoice == "PAPER")
    if (compSelection === "Rock") {
      console.log("You: Paper\nComputer: Rock\nYou win!");
    } else if (compSelection === "Paper") {
      console.log("You:Paper\nComputer: Paper\nTie!");
    } else {
      console.log("You:Paper\nComputer: Scissors\nYou win!");
      gameWin++;
    }
  if (playerChoice == "SCISSORS")
    if (compSelection === "Rock") {
      console.log("You: Scissors\n Computer: Rock\nYou lose!");
    } else if (compSelection === "Paper") {
      console.log("You: Scissors\n Computer: Paper\nYou Win!");
      gameWin++;
    } else {
      console.log("You: Scissors\n Computer: Scissors\nTie!");
    }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (gameWin > 2) {
    console.log("You are a winner!");
  } else {
    console.log("You lose this round. Next Round?");
  }
}

game();
