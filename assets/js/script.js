var timerEl = document.getElementById("countdown");

var questionOne = function () {
  document.getElementById("question-title").innerHTML =
    "What is the correct way to connect an external js file to an HTML file";
  var responseContentOne = document.createElement("button");
  var responseContentTwo = document.createElement("button");
  var responseContentThree = document.createElement("button");
  responseContentOne.textContent = "&lt;js&gt;";
  responseContentTwo.textContent = "&lt;script&gt;";
  responseContentThree.textContent = "&lt;javascript&gt;";
  document.main.appendChild(responseContentOne);
  document.main.appendChild(responseContentTwo);
  document.main.appendChild(responseContentThree);
};

function countdown() {
  var timeLeft = 60;
  document.getElementById("explanation").remove();
  document.getElementById("start").remove();

  var timeInterval = setInterval(function () {
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "";
      endQuiz();
    }
    timeLeft--;
  }, 1000);
  questionOne();
}

function endQuiz() {}

function quiz() {
  countdown();
}
