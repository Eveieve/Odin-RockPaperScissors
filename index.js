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

const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissors = document.querySelector(".btnScissors");

btnRock.addEventListener("click", () => {
  playRound("Rock");
});

btnPaper.addEventListener("click", () => {
  playRound("Paper");
});

btnScissors.addEventListener("click", () => {
  playRound("Scissors");
});

function playRound(playerSelection) {
  let compSelection = computerChoice();

  //let playerSelection = getPlayerChoice();

  const win = document.createElement("div");
  win.textContent = `You: ${playerSelection} Computer: ${compSelection} You win!`;

  const lose = document.createElement("div");
  lose.textContent = `You: ${playerSelection} Computer: ${compSelection} You lose!`;

  const tie = document.createElement("div");
  tie.textContent = `You: ${playerSelection} Computer: ${compSelection} Tie!`;

  if (playerSelection === "Rock")
    if (compSelection === "Rock") {
      document.body.appendChild(tie);
    } else if (compSelection === "Paper") {
      document.body.appendChild(lose);
    } else {
      document.body.appendChild(win);
    }

  if (playerSelection === "Paper")
    if (compSelection === "Rock") {
      document.body.appendChild(win);
    } else if (compSelection === "Paper") {
      document.body.appendChild(tie);
    } else {
      document.body.appendChild(lose);
    }
  if (playerSelection === "Scissors")
    if (compSelection === "Rock") {
      document.body.appendChild(lose);
    } else if (compSelection === "Paper") {
      document.body.appendChild(win);
    } else {
      document.body.appendChild(tie);
    }
}
