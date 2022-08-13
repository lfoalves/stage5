const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonStop = document.querySelector('.stop');

const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');

let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');

let minutes;
let seconds;

console.log(buttonPlay, buttonPause, buttonSet, buttonStop, minutesDisplay, secondsDisplay)
console.log(buttonSoundOn, buttonSoundOff)

buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');
})
buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
})
buttonStop.addEventListener('click', () => {
  console.log('SET')
  buttonStop.classList.add('hide');
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
  buttonSet.classList.remove('hide');
})
buttonSet.addEventListener('click', () => {
  minutes = Number(prompt('Insira os minutos'));
  minutesDisplay.textContent = minutes;
  seconds = Number(prompt('Insira os segundos'));
  secondsDisplay.textContent = seconds;
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
})
buttonSoundOff.addEventListener('click', () => {
  buttonSoundOff.classList.add('hide');
  buttonSoundOn.classList.remove('hide');
})