// DOM -> Document Object Model => Event-driven
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');

const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let minutes;

// Função contagem regressiva
function countdown() {
  setTimeout( () => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    
    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0');                                                                                                                                                                                                                                                                                                                                                                                                                                                                               t = String(seconds -1).padStart(2,'0');
    
    if (minutes <= 0) {
      buttonPlay.classList.remove('hide');
      buttonPause.classList.add('hide');
      buttonSet.classList.remove('hide');
      buttonStop.classList.add('hide');

      return;
    }

    if (seconds <= 0) {                                                                   
      seconds = 60;

      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0');
    }




    countdown();    
  }, 1000);
}

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');

  countdown();
});

buttonPause.addEventListener('click', () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');
}); 

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonSet.classList.remove('hide');
  buttonStop.classList.add('hide');
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOff.classList.add('hide');
  buttonSoundOn.classList.remove('hide');
})

buttonSet.addEventListener('click', () => {
  minutes = parseInt(Number(prompt('Quantos minutos?')));
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
})