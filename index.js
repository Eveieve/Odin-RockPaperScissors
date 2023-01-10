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

let playerChoice = prompt("Rock, paper, scissors!");

function playRound(playerChoice, computerChoice) {
  let compSelection = computerChoice();
  if (playerChoice === "Rock")
    if (compSelection === "Rock") {
      return "You: Rock\nComputer: Rock\nTie!";
    } else if (compSelection === "Paper") {
      return "You: Rock\nComputer: Paper\nYou lose!";
    } else {
      return "You: Rock\nComputer: Scissors.\nYou win!";
    }

  if (playerChoice === "Paper")
    if (compSelection === "Rock") {
      return "You: Paper\nComputer: Rock\nYou win!";
    } else if (compSelection === "Paper") {
      return "You:Paper\nComputer: Paper\nTie!";
    } else {
      return "You:Paper\nComputer: Scissors\nYou win!";
    }
  if (playerChoice === "Scissors")
    if (compSelection === "Rock") {
      return "You: Scissors\n Computer: Rock\nYou lose!";
    } else if (compSelection === "Paper") {
      return "You: Scissors\n Computer: Paper\nYou Win!";
    } else {
      return "You: Scissors\n Computer: Scissors\nTie!";
    }
}

console.log(playRound(playerChoice, computerChoice));
