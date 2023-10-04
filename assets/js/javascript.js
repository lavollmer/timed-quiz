// Timer (right hand side corner) (code taken from lecture - Activity 04- Stu Traverse)
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startButton = document.querySelector(".btn");

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var secondsLeft = 90;

//sets timer on quiz
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft >= 0) {
      //if answer incorrect and timer count is abover zero
      if (isIncorrect && timerCount > 0) {
        secondsLeft--;
      }
    } else (secondsLeft === 0); {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      loseGame();
    }

  }, 1000);
}

//global variables
var questions = ["What type of animal is a snow leopard?"]

function init() {
  getWins();
  getlosses();
}

//run quiz by generating quiz and starting timer
function runQuiz() {
  generateQuiz();
  setTime();
}

//run the quiz
function generateQuiz() {
  isWin = false;
  quizQuestions();
}

function quizQuestions() {
  for (var i = 0; i < questions.length; i++) {
    chosenQuestion = questions[i]
  }
}

//win when condition is met
function winCounts() {
  winCounter++;
  startButton.disabled = false;
  setWins()
}

//loseGame counter
function loseGame() {
  loseCounter++;
  startButton.disabled = false;
  setLosses()
}

function getWins() {
  var winsLocal = localStorage.getItem("winCount");
  if (winsLocal === null) {
    winCounter = 0;
  } else {
    winCounter = winsLocal;
  }
  winCounter.textContent = winCounter;
}

//startButton will startQuiz when clicked 
startButton.addEventListener("click", runQuiz);

//fires init when page is loaded
init();

