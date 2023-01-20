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
function getPlayerChoice() {
  if (btnRock) return "rock";
  else if (btnPaper) return "paper";
  else return "scissors";
}

//const btnRock = document.createElement("button");
//const btnPaper = document.createElement("button");
//const btnScissors = document.createElement("button");

const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissors = document.querySelector(".btnScissors");

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);

function playRound() {
  let compSelection = computerChoice();

  let playerSelection = getPlayerChoice();
  //let playerChoice = prompt("Rock, paper, scissors!").toLowerCase();

  if (playerSelection === "rock")
    if (compSelection === "Rock") {
      console.log("You: Rock\nComputer: Rock\nTie!");
    } else if (compSelection === "Paper") {
      console.log("You: Rock\nComputer: Paper\nYou lose!");
    } else {
      console.log("You: Rock\nComputer: Scissors.\nYou win!");
    }

  if (playerSelection === "paper")
    if (compSelection === "Rock") {
      console.log("You: Paper\nComputer: Rock\nYou win!");
    } else if (compSelection === "Paper") {
      console.log("You:Paper\nComputer: Paper\nTie!");
    } else {
      console.log("You:Paper\nComputer: Scissors\nYou win!");
    }
  if (playerSelection === "scissors")
    if (compSelection === "Rock") {
      console.log("You: Scissors\n Computer: Rock\nYou lose!");
    } else if (compSelection === "Paper") {
      console.log("You: Scissors\n Computer: Paper\nYou Win!");
    } else {
      console.log("You: Scissors\n Computer: Scissors\nTie!");
    }
}

//game();
