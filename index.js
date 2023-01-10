function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  if (getRandomInt() === 0) {
    return "Rock";
  } else if (getRandomInt() === 1) {
    return "Paper";
  } else getRandomInt() === 2;
  return "Scissors";
}

let playerChoice = prompt();


/*function playerChoice() {
    if (getPlayerChoice === "Rock") {
      return 0;
    } else if (getPlayerChoice === "Paper") {
      return 1;
    } else (getPlayerChoice === "Scissors");
    return 2; 
    } 
*/
function playRound(playerChoice, computerChoice) {
    if (playerChoice == "rock") 
        if (computerChoice === "Rock") {
        return "Tie!";
         } else if (computerChoice === "Paper") {
        return "You lose!";
         } else (computerChoice === "Scissors") {
        return "You win!";
         }
    if (playerChoice == "paper") 
        if (computerChoice === "Rock") {
    return "You win!";
        } else if (computerChoice === "Paper") {
    return "Tie!";
        } else if (computerChoice === "Scissors" ) {
        } return "You win!";
if (playerChoice == "scissors")
    if (computerChoice === "Rock") {
    return "You lose!";
    } else if(computerChoice === "Paper") {
    return "You Win!";
    } else if (computerChoice === "Scissors") {
    return "Tie";
    }
}