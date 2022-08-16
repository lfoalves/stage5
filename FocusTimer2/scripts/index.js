import {
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
  buttonDarkTheme
} from './elements.js';
import Sounds from "./sounds.js";
import Events from './events.js';
import Timer from './timer.js';

const sound = Sounds();

const timer = Timer({
  minutesDisplay,
  secondsDisplay
});

Events({
  buttonLightTheme, buttonDarkTheme,
   
  updateTimerDisplay: timer.updateTimerDisplay,
  countdown: timer.countdown,
  minutesDisplay,
  buttonPlay, buttonStop, buttonPlus, buttonLow,
  buttonFlorest, buttonStorm, buttonCoffee, buttonFire, sound
});