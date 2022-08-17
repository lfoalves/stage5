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

const buttonLightTheme = document.querySelector('.theme svg:nth-child(1)');
const buttonDarkTheme = document.querySelector('.theme svg:nth-child(2)');

const inputRangeFlorest = document.querySelector('.sounds button:nth-child(1) input');
const inputRangeStorm = document.querySelector('.sounds button:nth-child(2) input');
const inputRangeCoffee = document.querySelector('.sounds button:nth-child(3) input');
const inputRangeFire = document.querySelector('.sounds button:nth-child(4) input');

export {
  minutesDisplay,
  secondsDisplay,

  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonLow,

  buttonFlorest,
  buttonStorm,
  buttonCoffee,
  buttonFire,
  
  buttonLightTheme,
  buttonDarkTheme,

  inputRangeFlorest,
  inputRangeStorm,
  inputRangeCoffee,
  inputRangeFire
}