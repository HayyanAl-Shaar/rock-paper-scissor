const btn = document.querySelectorAll('.btn');
const player = document.getElementsByClassName('player')[0];
const computer = document.getElementsByClassName('computer')[0];
const playerScore = document.getElementsByClassName('player-score')[0]
const computerScore = document.getElementsByClassName('computer-score')[0]
const computerArray = ['rock', 'paper', 'scissors'];
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    player.innerHTML = btn[i].innerHTML;
    setTimeout(() => {
      const random = Math.floor(Math.random() * 3);
      computer.innerHTML = computerArray[random];
    }, 500);
  });
}


const gamelogic = ()=> {
  if((player.innerHTML === 'paper' && computer.innerHTML === 'rock')||  )

}