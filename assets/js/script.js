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
  timeLeft = timeLeft - 15;
};

var questionOne = function () {
  document.querySelector("#question-title").innerHTML =
    "What is the correct way to connect an external js file to an HTML file";
  responseContentOne.textContent = "<js>";
  responseContentTwo.textContent = "<script>";
  responseContentThree.textContent = "<javascript>";
  document.querySelector("#prompt").appendChild(responseContentOne);
  document.querySelector("#prompt").appendChild(responseContentTwo);
  document.querySelector("#prompt").appendChild(responseContentThree);
  responseContentOne.setAttribute("class", "btn");
  responseContentTwo.setAttribute("class", "btn");
  responseContentThree.setAttribute("class", "btn");
  responseContentTwo.setAttribute("id", "b");
  responseContentOne.setAttribute("id", "a");
  responseContentThree.setAttribute("id", "c");

  document.querySelector("#b").addEventListener("click", function () {
    rightAnswer();
    questionTwo();
  });
  document.querySelector("#a").addEventListener("click", function () {
    wrongAnswer();
    questionTwo();
  });
  document.querySelector("#c").addEventListener("click", function () {
    wrongAnswer();
    questionTwo();
  });
};

var questionTwo = function () {
  document.querySelector("#question-title").innerHTML =
    "What is the correct way to connect an external js file to an HTML file";
  responseContentOne.textContent = "<script src='....js'>";
  responseContentTwo.textContent = "<script href='....js'>";
  responseContentThree.textContent = "<script name='....js'>";
  //This does not fix the problem specified below
  document.querySelector("#b").removeEventListener("click", function () {
    rightAnswer();
    questionTwo();
  });
  document.querySelector("#a").removeEventListener("click", function () {
    wrongAnswer();
    questionTwo();
  });
  document.querySelector("#c").removeEventListener("click", function () {
    wrongAnswer();
    questionTwo();
  });

  document.querySelector("#a").addEventListener("click", function () {
    rightAnswer();
    questionThree();
  });
  document.querySelector("#b").addEventListener("click", function () {
    wrongAnswer();
    questionThree();
  });
  document.querySelector("#c").addEventListener("click", function () {
    wrongAnswer();
    questionThree();
  });
};
//Bug: timer disappears right here, it is because the event listeners stay active after being pressed, and reactivate when another button is pressed
var questionThree = function () {
  document.querySelector("#question-title").innerHTML =
    "How do you write 'Hello World' in an alert box?";
  responseContentOne.textContent = "prompt('Hello World')";
  responseContentTwo.textContent = "confirm('Hello World')";
  responseContentThree.textContent = "alert('Hello World')";

  document.querySelector("#c").addEventListener("click", function () {
    rightAnswer();
    questionFour();
  });
  document.querySelector("#a").addEventListener("click", function () {
    wrongAnswer();
    questionFour();
  });
  document.querySelector("#b").addEventListener("click", function () {
    wrongAnswer();
    questionFour();
  });
};

var questionFour = function () {
  document.querySelector("#question-title").innerHTML =
    "All for and while loops can be expressed as a recursive function with an if statement?";
  responseContentOne.textContent = "True";
  responseContentTwo.textContent = "False";
  responseContentThree.textContent = "Only for loops";

  document.querySelector("#a").addEventListener("click", function () {
    rightAnswer();
    questionFive();
  });
  document.querySelector("#c").addEventListener("click", function () {
    wrongAnswer();
    questionFive();
  });
  document.querySelector("#b").addEventListener("click", function () {
    wrongAnswer();
    questionFive();
  });
};

var questionFive = function () {
  document.querySelector("#question-title").innerHTML =
    "What will be the outout of: console.log(5 + '6' + '4')?";
  responseContentOne.textContent = "114";
  responseContentTwo.textContent = "15";
  responseContentThree.textContent = "564";

  document.querySelector("#c").addEventListener("click", function () {
    rightAnswer();
    endQuiz();
  });
  document.querySelector("#a").addEventListener("click", function () {
    wrongAnswer();
    endQuiz();
  });
  document.querySelector("#b").addEventListener("click", function () {
    wrongAnswer();
    endQuiz();
  });
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
  if (highScore >= 0) {
    document.querySelector("#question-title").innerHTML =
      "You reached a score of " + highScore;
  } else {
    document.querySelector("#question-title").innerHTML =
      "Bro... You kinda suck";
  }
}

function quiz() {
  countdown();
}
