let timerEl = document.querySelector("#countdown");
let responseContentOne = document.createElement("button");
let responseContentTwo = document.createElement("button");
let responseContentThree = document.createElement("button");
let saveScoreFormEl = document.createElement("form");
let saveScoreLabelEl = document.createElement("label");
let saveScoreInputEl = document.createElement("input");
let saveScoreSubmitEl = document.createElement("input");
let timeLeft = 60;
let highScore = 0;
var timeInterval;
let i = 0;

let questionsArray = [
  {
    questionPrompt: "Inside which HTML element do we put the JavaScript?",
    answers: ["<js>", "<script>", "<javascript>"],
    right: "<script>",
  },
  {
    questionPrompt:
      "What is the correct way to connect an external js file to an HTML file",
    answers: [
      "<script src='....js'>",
      "<script href='....js'>",
      "<script name='....js'>",
    ],
    right: "<script src='....js'>",
  },
  {
    questionPrompt: "How do you write 'Hello World' in an alert box?",
    answers: [
      "prompt('Hello World')",
      "confirm('Hello World')",
      "alert('Hello World')",
    ],
    right: "alert('Hello World')",
  },
  {
    questionPrompt:
      "All 'for' and 'while' loops can be expressed as a recursive function with an if statement?",
    answers: ["True", "False", "Only 'for' loops"],
    right: "True",
  },
  {
    questionPrompt: "What will be the output of: console.log(5 + '6' + '4')?",
    answers: ["114", "15", "564"],
    right: "564",
  },
];

var answerCheck = function () {
  if (this.textContent === questionsArray[i].right) {
    document.querySelector(".right-wrong").innerHTML = "Correct!";
  } else {
    document.querySelector(".right-wrong").innerHTML = "Wrong!";
    timeLeft = timeLeft - 10;
  }
  i++;
};

function eventsAndButtons(answerA, answerB, answerC) {
  responseContentOne.textContent = answerA;
  responseContentTwo.textContent = answerB;
  responseContentThree.textContent = answerC;
  document.querySelector("#prompt").appendChild(responseContentOne);
  document.querySelector("#prompt").appendChild(responseContentTwo);
  document.querySelector("#prompt").appendChild(responseContentThree);
  responseContentOne.setAttribute("class", "btn a");
  responseContentTwo.setAttribute("class", "btn b");
  responseContentThree.setAttribute("class", "btn c");
}

function removeButtons() {
  responseContentOne.remove();
  responseContentTwo.remove();
  responseContentThree.remove();
}

var questionOne = function () {
  document.querySelector("#question-title").innerHTML =
    questionsArray[0].questionPrompt;

  eventsAndButtons(
    questionsArray[0].answers[0],
    questionsArray[0].answers[1],
    questionsArray[0].answers[2]
  );

  document.querySelector(".a").addEventListener("click", answerCheck);
  document.querySelector(".b").addEventListener("click", answerCheck);
  document.querySelector(".c").addEventListener("click", answerCheck);
  document.querySelector(".a").addEventListener("click", questionTwo);
  document.querySelector(".b").addEventListener("click", questionTwo);
  document.querySelector(".c").addEventListener("click", questionTwo);
};

var questionTwo = function () {
  document.querySelector("#question-title").innerHTML =
    questionsArray[1].questionPrompt;

  removeButtons();
  eventsAndButtons(
    questionsArray[1].answers[0],
    questionsArray[1].answers[1],
    questionsArray[1].answers[2]
  );

  document.querySelector(".a").addEventListener("click", questionThree);
  document.querySelector(".b").addEventListener("click", questionThree);
  document.querySelector(".c").addEventListener("click", questionThree);
};

var questionThree = function () {
  document.querySelector("#question-title").innerHTML =
    questionsArray[2].questionPrompt;

  removeButtons();
  eventsAndButtons(
    questionsArray[2].answers[0],
    questionsArray[2].answers[1],
    questionsArray[2].answers[2]
  );

  document.querySelector(".a").addEventListener("click", questionFour);
  document.querySelector(".b").addEventListener("click", questionFour);
  document.querySelector(".c").addEventListener("click", questionFour);
};

var questionFour = function () {
  document.querySelector("#question-title").innerHTML =
    questionsArray[3].questionPrompt;

  removeButtons();
  eventsAndButtons(
    questionsArray[3].answers[0],
    questionsArray[3].answers[1],
    questionsArray[3].answers[2]
  );

  document.querySelector(".a").addEventListener("click", questionFive);
  document.querySelector(".b").addEventListener("click", questionFive);
  document.querySelector(".c").addEventListener("click", questionFive);
};

var questionFive = function () {
  document.querySelector("#question-title").innerHTML =
    questionsArray[4].questionPrompt;

  removeButtons();
  eventsAndButtons(
    questionsArray[4].answers[0],
    questionsArray[4].answers[1],
    questionsArray[4].answers[2]
  );

  document.querySelector(".a").addEventListener("click", endQuiz);
  document.querySelector(".b").addEventListener("click", endQuiz);
  document.querySelector(".c").addEventListener("click", endQuiz);
};
//Quiz is over. This function starts the process of building the high score screen
function endQuiz() {
  highScore = timeLeft;
  clearInterval(timeInterval);
  removeButtons();
  if (highScore > 0) {
    document.querySelector("#question-title").innerHTML =
      "You reached a score of " + highScore + "!";
  } else {
    document.querySelector("#question-title").innerHTML =
      "You did not complete the test.";
  }
  highScoreScreen();
}

function highScoreScreen() {
  saveScoreFormEl.setAttribute("id", "high-score");
  document.querySelector("#prompt").appendChild(saveScoreFormEl);

  saveScoreLabelEl.textContent =
    "Enter your initials below if you would like to save your score.";
  saveScoreLabelEl.setAttribute("for", "initials");
  saveScoreFormEl.appendChild(saveScoreLabelEl);

  saveScoreInputEl.setAttribute("name", "initials");
  saveScoreInputEl.setAttribute("id", "initials");
  saveScoreInputEl.setAttribute("type", "text");
  saveScoreInputEl.setAttribute("class", "text-field");
  saveScoreFormEl.appendChild(saveScoreInputEl);
  //This is where I just made the change
  saveScoreSubmitEl.setAttribute("type", "button");
  saveScoreSubmitEl.setAttribute("value", "Save Score");
  saveScoreSubmitEl.setAttribute("class", "btn");
  saveScoreSubmitEl.setAttribute("onclick", "submitHighScore()");
  saveScoreFormEl.appendChild(saveScoreSubmitEl);
}

function submitHighScore() {
  let allScores = [];
  function loadScores() {
    let previousScores = JSON.parse(localStorage.getItem("scores"));
    if (!previousScores) {
      return false;
    }
    for (let j = 0; j < previousScores.length; j++) {
      allScores.push(previousScores[j]);
    }
  }
  loadScores();
  if (saveScoreInputEl === "") {
    saveScoreLabelEl.textContent = "Maybe try entering your initials, champ";
  } else {
    let newScore = {
      name: saveScoreInputEl.value,
      score: highScore,
    };
    allScores.push(newScore);
    localStorage.setItem("scores", JSON.stringify(allScores));

    window.location.href = "./highScores.html";
    return false;
  }
}

//First function. Initiates quiz/timer
function countdown() {
  document.querySelector("#explanation").remove();
  document.querySelector("#start").remove();

  timeInterval = setInterval(function () {
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
