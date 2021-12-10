var timerEl = document.getElementById("countdown");

function countdown() {
  var timeLeft = 60;

  var timeInterval = setInterval(function () {
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "";
    }
    timeLeft--;
  }, 1000);
}

function quiz() {
  countdown();
}
