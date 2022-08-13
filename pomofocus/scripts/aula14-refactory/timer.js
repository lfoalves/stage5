function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2,'0');
  secondsDisplay.textContent = String(seconds).padStart(2,'0');
}

function resetTimer() {
  updateTimerDisplay(minutes,0);
  clearTimeout(timertimeOut);
}

function countdown(minutesDisplay, secondsDisplay, resetControls) {
  timertimeOut = setTimeout(function() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    updateTimerDisplay(minutes, 0);

    if (minutes <= 0) {
      resetControls();      
      // e também verificar os segundo 58
      return;
    }
    
    if (seconds <= 0) {
      seconds = 60;

      --minutes;
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown(minutesDisplay, secondsDisplay, resetControls);
  }, 1000);
};

// named exports
export { resetTimer, countdown }