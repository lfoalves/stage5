// DOM -> Document Object Model => Event driven
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
let minutes;
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let seconds;
let countSet = false;

alert('Difina o temporizador')

if (!minutes || !seconds) {
  buttonPlay.setAttribute('disabled', '');
}

// Função contagem regressiva
function countdown() {
  if (seconds <= 0) {
    seconds = 60;
  }

  if (minutes == 60) {
    minutes = 59;
  } else if (minutes == 50) {
    minutes = 49;  
  } else if (minutes == 40) {
    minutes = 39;
  } else if (minutes == 30) {
    minutes = 29;
  } else if (minutes == 20) {
    minutes = 19;
  } else if (minutes == 10) {
    minutes = 9;
  } 
  minutesDisplay.textContent = minutes;

  seconds = seconds - 1
  console.log(seconds)

  if (seconds < 10) {
    secondsDisplay.textContent = '0' + seconds;
  } else {
    secondsDisplay.textContent = seconds;
  }
}

buttonPlay.addEventListener('click', () => {
  if (countSet == false) {
    return alert('Por favor configure o temporizador')
  }
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');

  setInterval( () => {
    countdown();    
  }, 100)
});
buttonPlay.addEventListener('mousemove', () => {
  buttonPlay.setAttribute('title', 'Clique para iniciar o temporizador')
})
buttonSet.addEventListener('mousemove', () => {
  console.log('MOUSEMOVE')
})

buttonPause.addEventListener('click', () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');

  clearInterval;
  console.log('PAUSE')
}); 

function tooglePlayPause() {
  buttonPlay.classList.toggle('hide');
  buttonPause.classList.toggle('hide');
}

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
  
  if (!minutes) {
    return alert('Por favor insira os minutos');
  }
  if (minutes < 1 || minutes > 60) {
    return alert('Por favor insira em minutos')
  }

  
  seconds = parseInt(Number(prompt('Quais o segundos')));

  if (!seconds) {
    return alert('Por favor insira os segundos')
  }
  if (seconds < 01 || seconds > 60) {
    return alert('Insira em segundos');
  }

  if (String(minutes).endsWith('0')) {
    seconds = '0' + 0;
  }


  if (!minutes || !seconds) {
    return alert('Por favor insira o tempo')
  }

  if (minutes && seconds) {
    buttonPlay.removeAttribute('disabled');
  }

  countSet = true;

  minutesDisplay.textContent = minutes;
  secondsDisplay.textContent = seconds;
})