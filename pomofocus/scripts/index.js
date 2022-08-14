// EcmaScript6 - 2015 ES6 Module
import Controls from './controls.js'; // import default porde ser qualquer nome
import Timer from './timer.js' // named export aceita somente os nomes exportados
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} from './elements.js';
import Sound from './sounds.js';
import Events from './events.js';

// Injeção de dependências
const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
});

// Injeção de dependências
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
});

const sound = Sound();

Events({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  controls,
  timer,
  sound
});