let timerEl = document.querySelector("#countdown");
let responseContentOne = document.createElement("button");
let responseContentTwo = document.createElement("button");
let responseContentThree = document.createElement("button");
let timeLeft = 60;

var rightAnswer = function () {
  document.querySelector(".right-wrong").innerHTML = "Correct!";
};

var wrongAnswer = function () {
  document.querySelector(".right-wrong").innerHTML = "Wrong!";
  timeLeft = timeLeft - 10;
};

function eventsAndButtons(answerA, answerB, answerC) {
  responseContentOne.textContent = answerA;
  responseContentTwo.textContent = answerB;
  responseContentThree.textContent = answerC;
  document.querySelector("#prompt").appendChild(responseContentOne);
  document.querySelector("#prompt").appendChild(responseContentTwo);
  document.querySelector("#prompt").appendChild(responseContentThree);
  responseContentOne.setAttribute("class", "btn a");
  responseContentTwo.setAttribute("class", "btn b ");
  responseContentThree.setAttribute("class", "btn c");
}

function removeButtons() {
  responseContentOne.remove();
  responseContentTwo.remove();
  responseContentThree.remove();
}

var questionOne = function () {
  document.querySelector("#question-title").innerHTML =
    "What is the correct way to connect an external js file to an HTML file";

  eventsAndButtons("<js>", "<script>", "<javascript>");

  document.querySelector(".a").addEventListener("click", questionTwo);
  document.querySelector(".b").addEventListener("click", questionTwo);
  document.querySelector(".c").addEventListener("click", questionTwo);
  document.querySelector(".a").addEventListener("click", wrongAnswer);
  document.querySelector(".b").addEventListener("click", rightAnswer);
  document.querySelector(".c").addEventListener("click", wrongAnswer);
};

var questionTwo = function () {
  document.querySelector("#question-title").innerHTML =
    "What is the correct way to connect an external js file to an HTML file";

  removeButtons();
  eventsAndButtons(
    "<script src='....js'>",
    "<script href='....js'>",
    "<script name='....js'>"
  );

  document.querySelector(".a").addEventListener("click", questionThree);
  document.querySelector(".b").addEventListener("click", questionThree);
  document.querySelector(".c").addEventListener("click", questionThree);
  document.querySelector(".a").addEventListener("click", rightAnswer);
  document.querySelector(".b").addEventListener("click", wrongAnswer);
  document.querySelector(".c").addEventListener("click", wrongAnswer);
};

var questionThree = function () {
  document.querySelector("#question-title").innerHTML =
    "How do you write 'Hello World' in an alert box?";

  removeButtons();
  eventsAndButtons(
    "prompt('Hello World')",
    "confirm('Hello World')",
    "alert('Hello World')"
  );

  document.querySelector(".a").addEventListener("click", questionFour);
  document.querySelector(".b").addEventListener("click", questionFour);
  document.querySelector(".c").addEventListener("click", questionFour);
  document.querySelector(".a").addEventListener("click", wrongAnswer);
  document.querySelector(".b").addEventListener("click", wrongAnswer);
  document.querySelector(".c").addEventListener("click", rightAnswer);
};

var questionFour = function () {
  document.querySelector("#question-title").innerHTML =
    "All 'for' and 'while' loops can be expressed as a recursive function with an if statement?";

  removeButtons();
  eventsAndButtons("True", "False", "Only 'for' loops");

  document.querySelector(".a").addEventListener("click", questionFive);
  document.querySelector(".b").addEventListener("click", questionFive);
  document.querySelector(".c").addEventListener("click", questionFive);
  document.querySelector(".a").addEventListener("click", rightAnswer);
  document.querySelector(".b").addEventListener("click", wrongAnswer);
  document.querySelector(".c").addEventListener("click", wrongAnswer);
};

var questionFive = function () {
  document.querySelector("#question-title").innerHTML =
    "What will be the output of: console.log(5 + '6' + '4')?";

  removeButtons();
  eventsAndButtons("114", "15", "564");

  document.querySelector(".a").addEventListener("click", endQuiz);
  document.querySelector(".b").addEventListener("click", endQuiz);
  document.querySelector(".c").addEventListener("click", endQuiz);
  document.querySelector(".a").addEventListener("click", wrongAnswer);
  document.querySelector(".b").addEventListener("click", wrongAnswer);
  document.querySelector(".c").addEventListener("click", rightAnswer);
};

function countdown() {
  document.querySelector("#explanation").remove();
  document.querySelector("#start").remove();

  var timeInterval = setInterval(function () {
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "";
      endQuiz();
    }
    timeLeft--;
  }, 1000);
  questionOne();
}

function endQuiz() {
  let highScore = timeLeft;
  removeButtons();
  if (highScore >= 0) {
    document.querySelector("#question-title").innerHTML =
      "You reached a score of " + highScore;
  } else {
    document.querySelector("#question-title").innerHTML =
      "Bro... You kinda suck";
  }
}
