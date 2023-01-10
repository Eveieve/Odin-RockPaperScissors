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

function playRound() {
  let compSelection = computerChoice();

  let playerChoice = prompt("Rock, paper, scissors!");

  if (playerChoice === "Rock")
    if (compSelection === "Rock") {
      console.log("You: Rock\nComputer: Rock\nTie!");
    } else if (compSelection === "Paper") {
      console.log("You: Rock\nComputer: Paper\nYou lose!");
    } else {
      console.log("You: Rock\nComputer: Scissors.\nYou win!");
    }

  if (playerChoice === "Paper")
    if (compSelection === "Rock") {
      console.log("You: Paper\nComputer: Rock\nYou win!");
    } else if (compSelection === "Paper") {
      console.log("You:Paper\nComputer: Paper\nTie!");
    } else {
      console.log("You:Paper\nComputer: Scissors\nYou win!");
    }
  if (playerChoice === "Scissors")
    if (compSelection === "Rock") {
      console.log("You: Scissors\n Computer: Rock\nYou lose!");
    } else if (compSelection === "Paper") {
      console.log("You: Scissors\n Computer: Paper\nYou Win!");
    } else {
      console.log("You: Scissors\n Computer: Scissors\nTie!");
    }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

game();
