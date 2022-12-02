const btn = document.querySelectorAll('.btn');
const player = document.getElementsByClassName('player')[0];
const computer = document.getElementsByClassName('computer')[0];
const random = Math.floor(Math.random() * 3);
const computerArray = ['rock', 'paper', 'scissors'];
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    player.innerHTML = btn[i].innerHTML;
    setTimeout(() => {
      computer.innerHTML = computerArray[random];
    }, 500);
  });
}
