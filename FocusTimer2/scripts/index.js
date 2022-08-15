let minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

const buttonPlay= document.getElementById('play');
const buttonStop = document.getElementById('stop');
const buttonPlus = document.getElementById('plus');
const buttonLow = document.getElementById('low');

const buttonFlorest = document.querySelector('.sounds button:nth-child(1)');
const buttonStorm = document.querySelector('.sounds button:nth-child(2)');
const buttonCoffee = document.querySelector('.sounds button:nth-child(3)');
const buttonFire = document.querySelector('.sounds button:nth-child(4)');
let minutes;
let seconds;
let timerTimeOut;

import Sound from "./sounds.js";
let sound = Sound();
import Events from './events.js';


function countdown() {
  seconds = Number(secondsDisplay.textContent);
  minutes = Number(minutesDisplay.textContent);

  if (secondsDisplay.textContent <= 0) {
    seconds = 60;
    minutes = minutes - 1;
  }
  
  if (Number(minutesDisplay.textContent) <= 0 && secondsDisplay.textContent <= 0) {
    minutes = 0;
    seconds = 0;
    sound.timerEnd();
    return clearInterval(timerTimeOut);
  }
  
  secondsDisplay.textContent = String(seconds - 1).padStart(2, '0');
  minutesDisplay.textContent = String(minutes).padStart(2, '0');

  timerTimeOut = setTimeout(function(){

    countdown();

  }, 1000);
}

function resetTimer() {
  minutes = 0;
  seconds = 0;
  minutesDisplay.textContent = '00';
  secondsDisplay.textContent = '00'
  timerTimeOut = 0;
}

Events({
  resetTimer,
  countdown, timerTimeOut, minutesDisplay,
  buttonPlay, buttonStop, buttonPlus, buttonLow,
  minutes,
  buttonFlorest, buttonStorm, buttonCoffee, buttonFire, sound
});