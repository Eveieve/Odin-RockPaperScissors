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

let gameWin = 0;
let gameLose = 0;

function playRound(playerSelection) {
  let compSelection = computerChoice();

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
      gameLose++;
    } else {
      document.body.appendChild(win);

      gameWin++;
    }

  if (playerSelection === "Paper")
    if (compSelection === "Rock") {
      document.body.appendChild(win);
      gameWin++;
    } else if (compSelection === "Paper") {
      document.body.appendChild(tie);
    } else {
      document.body.appendChild(lose);
      gameLose++;
    }
  if (playerSelection === "Scissors")
    if (compSelection === "Rock") {
      document.body.appendChild(lose);
      gameLose++;
    } else if (compSelection === "Paper") {
      document.body.appendChild(win);
      gameWin++;
    } else {
      document.body.appendChild(tie);
    }

  let winScore = 0;
  winScore += gameWin;
  let loseScore = 0;
  loseScore += gameLose;

  const score = document.createElement("div");
  score.textContent = `You ${winScore} Computer: ${loseScore}`;
  document.body.appendChild(score);

  const winResults = document.createElement("div");
  winResults.textContent = "You are a winner!";

  const loseResults = document.createElement("div");
  loseResults.textContent = "You lose this round!";

  if (winScore >= 5) {
    document.body.appendChild(winResults);
    return; //I want the game to end(disable any functions/buttons) when the winner is announced!!
  } else if (loseScore >= 5) {
    document.body.appendChild(loseResults);
    return;
  }
}
