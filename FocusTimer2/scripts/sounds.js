export default function Sounds() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  const soundFlorest = new Audio('https://github.com/lfoalves/material-stage-05/blob/master/sounds/Floresta.mp3?raw=true');
  const soundStorm = new Audio('https://github.com/lfoalves/material-stage-05/blob/master/sounds/Chuva.mp3?raw=true');
  const soundCoffee = new Audio('https://github.com/lfoalves/material-stage-05/blob/master/sounds/Cafeteria.mp3?raw=true');
  const soundFire = new Audio('https://github.com/lfoalves/material-stage-05/blob/master/sounds/Lareira.mp3?raw=true');

  soundFlorest.loop = true;
  soundStorm.loop = true;
  soundCoffee.loop = true;
  soundFire.loop = true;
  
  function pressButton() {
    buttonPressAudio.play();
  }

  function timerEnd() {
    kitchenTimer.play();
  }


  // Controles para volume
  function florestVolume(volume) {
    soundFlorest.volume = volume / 100;
  }
  function stormVolume(volume) {
    soundStorm.volume = volume / 100;
  }
  function coffeeVolume(volume) {
    soundCoffee.volume = volume / 100;
  }
  function fireVolume(volume) {
    soundFire.volume = volume / 100;
  }



  function florestSound() {
    soundFlorest.play();
    soundStorm.pause();
    soundCoffee.pause();
    soundFire.pause();
  }

  function stormSound() {
    soundStorm.play();
    soundFlorest.pause();
    soundCoffee.pause();
    soundFire.pause();
  }

  function coffeeSound() {
    soundCoffee.play();
    soundFlorest.pause();
    soundStorm.pause();
    soundFire.pause();
  }

  function fireSound() {
    soundFire.play();
    soundFlorest.pause();
    soundStorm.pause();
    soundCoffee.pause();
  }

  function notSound() {
    soundFlorest.pause();
    soundStorm.pause();
    soundCoffee.pause();
    soundFire.pause();
  }
  

  return {
    pressButton, timerEnd, florestSound, stormSound, coffeeSound, fireSound,
    notSound,
    
    florestVolume,
    stormVolume,
    coffeeVolume,
    fireVolume
  }
}