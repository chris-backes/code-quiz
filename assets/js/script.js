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
let allScores = [];

//The questions used in the course of the quiz. Each function pulls the questions from this array of objects.
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
//functions used in the course of creating and styling the quiz questions
//checks to see if answer is correct by comparing with the string stored in the "right" property of the object.
//Shares features of an iterative loop with the i++, but is not the same, since it is not recursive.
var answerCheck = function () {
  if (this.textContent === questionsArray[i].right) {
    document.querySelector(".right-wrong").innerHTML = "Correct!";
  } else {
    document.querySelector(".right-wrong").innerHTML = "Wrong!";
    timeLeft = timeLeft - 10;
  }
  i++;
};
//creatings the buttons for each question
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
//Removes the buttons for the next question.
//Is only called after question one becasue there is nothing to remove when question one is called
function removeButtons() {
  responseContentOne.remove();
  responseContentTwo.remove();
  responseContentThree.remove();
}
//functions create and style question in the quiz
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
//Styles the scoring page, which automatically opens once the initials are entered
function styleScorePage() {
  allScores = JSON.parse(localStorage.getItem("scores"));
  console.log(allScores);
  for (let j = 0; j < allScores.length; j++) {
    let tableEl = document.querySelector("#page-scores");
    let tableRowEl = document.createElement("tr");
    let tableHeadOneEl = document.createElement("th");
    let tableHeadTwoEl = document.createElement("th");
    tableEl.appendChild(tableRowEl);
    tableHeadOneEl.textContent = allScores[j].name;
    tableRowEl.appendChild(tableHeadOneEl);
    tableHeadTwoEl.textContent = allScores[j].score;
    tableRowEl.appendChild(tableHeadTwoEl);
  }
}
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

//restyles the page after the last question for user to submit the score
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

  saveScoreSubmitEl.setAttribute("type", "button");
  saveScoreSubmitEl.setAttribute("value", "Save Score");
  saveScoreSubmitEl.setAttribute("class", "btn");
  saveScoreSubmitEl.setAttribute("onclick", "submitHighScore()");
  saveScoreFormEl.appendChild(saveScoreSubmitEl);
}

//Checks if local storage already has scores and pulls them into an array if there are any scores
// Is called by an onclick attribute
function submitHighScore() {
  function loadScores() {
    let previousScores = JSON.parse(localStorage.getItem("scores"));
    if (!previousScores) {
      return false;
    }
    for (let j = 0; j < previousScores.length; j++) {
      allScores.push(previousScores[j]);
    }
  }
  //Adds the score of the recent roud to local storage
  loadScores();
  function logScores() {
    if (saveScoreInputEl.value === "") {
      saveScoreLabelEl.textContent = "Maybe try entering your initials, champ";
      logScores();
    } else {
      let newScore = {
        name: saveScoreInputEl.value,
        score: highScore,
      };
      allScores.push(newScore);
      localStorage.setItem("scores", JSON.stringify(allScores));
      //directs user to high score page
      window.location.href = "./highScores.html";
    }
  }
  logScores();
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
