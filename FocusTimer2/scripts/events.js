export default function Events({
  resetTimer,
  countdown, timerTimeOut,
  minutesDisplay,
  buttonPlay, buttonStop, buttonPlus, buttonLow,
  buttonFlorest, buttonStorm, buttonCoffee, buttonFire, sound
}) {

  let minutes;

  buttonPlay.addEventListener('click', function() {
    sound.pressButton();
    countdown();
  });
  
  buttonStop.addEventListener('click', () => {
    sound.pressButton();
    clearTimeout(timerTimeOut);
    resetTimer();
  });
  
  buttonPlus.addEventListener('click', () => {
    sound.pressButton();
    if (minutesDisplay.textContent >= 60) {
      return;
    }
    minutes = Number(minutesDisplay.textContent);
    minutesDisplay.textContent = String(minutes + 5).padStart(2, '0');
  });
  
  buttonLow.addEventListener('click', () => {
    sound.pressButton();
    if (minutesDisplay.textContent <= 0) {
      return;
    }
    minutes = Number(minutesDisplay.textContent);
    minutesDisplay.textContent = String(minutes - 5).padStart(2, '0');
  });



  buttonFlorest.addEventListener('click', () => {
    sound.florestSound();

    buttonFlorest.classList.add('active');
    buttonStorm.classList.remove('active');
    buttonCoffee.classList.remove('active');
    buttonFire.classList.remove('active');
  });
  
  buttonStorm.addEventListener('click', () => {
    sound.stormSound();
    buttonStorm.classList.add('active');
    buttonFlorest.classList.remove('active');
    buttonCoffee.classList.remove('active');
    buttonFire.classList.remove('active');
  });

  buttonCoffee.addEventListener('click', () => {
    sound.coffeeSound();
    buttonCoffee.classList.add('active');
    buttonFlorest.classList.remove('active');
    buttonStorm.classList.remove('active');
    buttonFire.classList.remove('active');
  });

  buttonFire.addEventListener('click', () => {
    sound.fireSound();
    buttonFire.classList.add('active');
    buttonFlorest.classList.remove('active');
    buttonStorm.classList.remove('active');
    buttonCoffee.classList.remove('active');
  })
  
}