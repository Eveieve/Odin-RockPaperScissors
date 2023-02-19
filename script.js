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

  const score = document.querySelector(".score");

  let winScore = 0;
  winScore += gameWin;
  let loseScore = 0;
  loseScore += gameLose;

  if (playerSelection === "Rock")
    if (compSelection === "Rock") {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} Tie!`;
      score.textContent = `You ${winScore} Computer: ${loseScore}`;
    } else if (compSelection === "Paper") {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} You lose!`;

      gameLose++;
      score.textContent = `You ${winScore} Computer: ${loseScore}`;
    } else {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} You win!`;
      gameWin++;
      score.textContent = `You ${winScore} Computer: ${loseScore}`;
    }

  if (playerSelection === "Paper")
    if (compSelection === "Rock") {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} You win!`;
      gameWin++;
      score.textContent = `You ${winScore} Computer: ${loseScore}`;
    } else if (compSelection === "Paper") {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} Tie!`;
      score.textContent = `You ${winScore} Computer: ${loseScore}`;
    } else {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} You lose!`;
      gameLose++;
      score.textContent = `You ${winScore} Computer: ${loseScore}`;
    }

  if (playerSelection === "Scissors")
    if (compSelection === "Rock") {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} You lose!`;
      gameLose++;
      score.textContent = `You ${winScore} Computer: ${loseScore}`;
    } else if (compSelection === "Paper") {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} You win!`;
      gameWin++;
      score.textContent = `You ${winScore} Computer: ${loseScore}`;
    } else {
      results.textContent = `You: ${playerSelection} Computer: ${compSelection} Tie!`;
      score.textContent = `You ${winScore} Computer: ${loseScore}`;
    }

  const btns = document.querySelectorAll("button");
  const btnsArr = Array.from(btns);
  const announce = document.querySelector(".announce");
  if (winScore >= 3 && loseScore <= 2) {
    btnsArr.forEach((button) => (button.disabled = true));
    score.textContent = `You ${winScore} Computer: ${loseScore}`;
    announce.textContent = "You are a winner!";
    return;
  } else if (loseScore >= 3 && winScore <= 2) {
    btnsArr.forEach((button) => (button.disabled = true));
    score.textContent = `You ${winScore} Computer: ${loseScore}`;
    announce.textContent = "You lose this round!";
    return;
  }
}
