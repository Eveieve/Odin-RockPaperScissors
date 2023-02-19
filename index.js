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

  const results = document.querySelector(".results");

  if (playerSelection === "Rock")
    if (compSelection === "Rock") {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} Tie!`;
    } else if (compSelection === "Paper") {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} You lose!`;
      gameLose++;
    } else {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} You win!`;
      gameWin++;
    }

  if (playerSelection === "Paper")
    if (compSelection === "Rock") {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} You win!`;
      gameWin++;
    } else if (compSelection === "Paper") {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} Tie!`;
    } else {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} You lose!`;
      gameLose++;
    }

  if (playerSelection === "Scissors")
    if (compSelection === "Rock") {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} You lose!`;
      gameLose++;
    } else if (compSelection === "Paper") {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} You win!`;
      gameWin++;
    } else {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} Tie!`;
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
