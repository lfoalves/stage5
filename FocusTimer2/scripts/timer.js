import Sounds from "./sounds.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay
}) {

  let timerTimeOut;

  function countdown() {
    timerTimeOut = setTimeout(function(){
  
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
  
      if (minutes <= 0 && seconds <= 0) {
        Sounds().timerEnd();
        return;
      }
      
      if (seconds <= 0) {
        seconds = 60;
        minutes = minutes - 1;
      }
    
      updateTimerDisplay(minutes, String(seconds - 1));
  
      countdown();
    }, 1000);
  }
  
  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }

  return {
    countdown,
    updateTimerDisplay
  }
}