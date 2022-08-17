export default function Events({
  inputRangeFlorest,
  inputRangeStorm,
  inputRangeCoffee,
  inputRangeFire,

  buttonLightTheme, buttonDarkTheme,
  updateTimerDisplay,
  countdown,
  minutesDisplay,
  buttonPlay, buttonStop, buttonPlus, buttonLow,
  buttonFlorest, buttonStorm, buttonCoffee, buttonFire,

  sound
}) {

  let minutes;

  buttonPlay.addEventListener('click', function() {
    sound.pressButton();
    countdown();
  });
  
  buttonStop.addEventListener('click', () => {
    sound.pressButton();
    updateTimerDisplay(0, 0);
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
    minutes = Number(minutesDisplay.textContent);
    if (minutes <= 0) {
      clearTimeout(timerTimeOut);
      return;
    }
    minutesDisplay.textContent = String(minutes - 5).padStart(2, '0');
  });



  buttonFlorest.addEventListener('click', () => {
    if (buttonFlorest.classList.contains('active')) {
      sound.notSound();
      buttonFlorest.classList.remove('active')
      return
    }
    sound.florestSound();
    buttonFlorest.classList.add('active');
    buttonStorm.classList.remove('active');
    buttonCoffee.classList.remove('active');
    buttonFire.classList.remove('active');
  });
  
  buttonStorm.addEventListener('click', () => {
    if (buttonStorm.classList.contains('active')) {
      sound.notSound();
      buttonStorm.classList.remove('active')
      return
    }
    sound.stormSound();
    buttonStorm.classList.add('active');
    buttonFlorest.classList.remove('active');
    buttonCoffee.classList.remove('active');
    buttonFire.classList.remove('active');
  });

  buttonCoffee.addEventListener('click', () => {
    if (buttonCoffee.classList.contains('active')) {
      sound.notSound();
      buttonCoffee.classList.remove('active')
      return
    }
    sound.coffeeSound();
    buttonCoffee.classList.add('active');
    buttonFlorest.classList.remove('active');
    buttonStorm.classList.remove('active');
    buttonFire.classList.remove('active');
  });

  buttonFire.addEventListener('click', () => {
    if (buttonFire.classList.contains('active')) {
      sound.notSound();
      buttonFire.classList.remove('active')
      return
    }
    sound.fireSound();
    buttonFire.classList.add('active');
    buttonFlorest.classList.remove('active');
    buttonStorm.classList.remove('active');
    buttonCoffee.classList.remove('active');
  });


  // THEME
  buttonLightTheme.addEventListener('click', () => {
    sound.pressButton();
    buttonLightTheme.classList.add('hide');
    buttonDarkTheme.classList.remove('hide');
    document.body.classList.add('dark')
  });
  buttonDarkTheme.addEventListener('click', () => {
    sound.pressButton();
    buttonLightTheme.classList.remove('hide');
    buttonDarkTheme.classList.add('hide');
    document.body.classList.remove('dark')
  });


  // Range
  inputRangeFlorest.addEventListener('input', () => {
    sound.florestVolume(inputRangeFlorest.value);
  });
  inputRangeStorm.addEventListener('input', () => {
    sound.stormVolume(inputRangeStorm.value);
  });
  inputRangeCoffee.addEventListener('input', () => {
    sound.coffeeVolume(inputRangeCoffee.value);
  });
  inputRangeFire.addEventListener('input', () => {
    sound.fireVolume(inputRangeFire.value);
  });
}