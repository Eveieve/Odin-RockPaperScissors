function getRandomInt() {
  return Math.floor(Math.random() * 3);
}



function playRound() {
  if (getRandomInt() === 0) {
    return "Rock";
  } else if (getRandomInt() === 1) {
    return "Paper";
  } else getRandomInt() === 2;
  return "Scissors";
}
