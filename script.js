// ||

const btn = document.querySelectorAll('.btn');
const player = document.getElementsByClassName('player')[0];
const computer = document.getElementsByClassName('computer')[0];
const playerScore = document.getElementsByClassName('player-score')[0];
const computerScore = document.getElementsByClassName('computer-score')[0];
const computerArray = ['rock', 'paper', 'scissores'];
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    player.innerHTML = btn[i].innerHTML;
    setTimeout(() => {
      const random = Math.floor(Math.random() * 3);
      computer.innerHTML = computerArray[random];
      gamelogic();
    }, 500);
  });
}

const gamelogic = () => {
  if (
    (player.innerHTML === 'paper' && computer.innerHTML === 'rock') ||
    (player.innerHTML === 'rock' && computer.innerHTML === 'scissores') ||
    (player.innerHTML === 'scissores' && computer.innerHTML === 'paper')
  ) {
    playerScore.innerHTML = Number(playerScore.innerHTML) + 1;
    console.log(playerScore.innerHTML);
  } else if (player.innerHTML === computer.innerHTML) {
  } else {
    computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
  }
};
