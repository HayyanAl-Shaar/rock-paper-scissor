const rock = document.getElementsByClassName('rock')[0];
const player = document.getElementsByClassName('player')[0];
const computer = document.getElementsByClassName('computer')[0];
const random = Math.floor(Math.random() * 3);
const computerArray = ['rock', 'paper', 'scissors'];
rock.addEventListener('click', () => {
  player.innerHTML = 'rock';
  setTimeout(() => {
    computer.innerHTML = computerArray[random];
  }, 500);
});
