// EcmaScript6 - 2015 ES6 Module
import resetControls from './controls.js'; // import default porde ser qualquer nome
import { Timer } from './timer.js' // named export aceita somente os nomes exportados

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonStop = document.querySelector('.stop');

const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');

let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');

let minutes = Number(minutesDisplay.textContent);
let seconds;
let timertimeOut;


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timertimeOut,
  resetControls
});


buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');

  timer.countdown();    

});
buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');

  clearTimeout(timertimeOut);
});
buttonStop.addEventListener('click', function() {
  resetControls();
  timer.resetTimer();
});
buttonSet.addEventListener('click', function() {
  let newMinutes = parseInt(Number(prompt('Quantos minutos')));

  if (!newMinutes) {
    resetTimer();
    return;
  }
  
  minutes = newMinutes;
  updateTimerDisplay(minutes, 0);
});

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
});
buttonSoundOff.addEventListener('click', function() {
  buttonSoundOff.classList.add('hide');
  buttonSoundOn.classList.remove('hide');
});