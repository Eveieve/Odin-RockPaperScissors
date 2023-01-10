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

let getPlayerChoice = prompt();

function playerChoice() {
    if (getPlayerChoice === "Rock") {
      return 0;
    } else if (getPlayerChoice === "Paper") {
      return 1;
    } else (getPlayerChoice === "Scissors");
    return 2; 
    }
  

/*
if player is rock 
    if computer is rock
    return 'tie'
if else computer is paper
    return plalyer loses 
    if computer is scissors
    return player wins
if player is paper 
    if computer is rock
    return player wins
    if else computer is paper
    return 'tie'
    if else computer is scissors 
    return player wins
if player is scissors 
    if computer is rock 
    reutrn player loses
    if computer is paper
    return player wins
    if computer is scissors 
    return 'tie' 
*/