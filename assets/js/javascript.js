// Timer (right hand side corner) (code taken from lecture - Activity 04- Stu Traverse)
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startButton = document.querySelector(".btn");
var questionCounter = 0;

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
var answers = [
  {
    question: "where do snow leopards live?",
    choices: ["turkey", "india", "china"],
    answer: "india"
  }
]

var winCounts = "";
var loseCounts = "";
var questionCounter = "";


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
  secondsLeft = 90;
  welcomescreen.style.display = "none";
  console.log(display = "none");
  renderQuestions();
}

function renderQuestions() {
  var currQuestion = questions[questionCounter];
  var h1Tag = document.createElement("h1");
  h1Tag.textContent = currQuestion.question;

  var divTag = document.createElement("div");
  for (var i = 0; i < currQuestion.choices; i++) {
    var currChoice = currQuestion.choices[i]
    var btn = document.createElement("button");
    btn.textContent = currChoice;
    //Gary - append button to div tag

  }
}

//Gary - append div and h1 tag to where needs to appear on the page
//event listener to quiz element where target event matches answer button

/*
when an answer button is clicked:
- tell if button is correct or incorrect
- if incorrect button is clicked - display message incorrect
- if incorrect button - decreases the timer
- if correct - display message and logs correct

- Increment questionCounter by one
no matter what, the next question is shown (function renderQuestions)

*/

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

//event listener for quiz area - check to see if answer button was clicked (Gary)


//startButton will startQuiz when clicked 
startButton.addEventListener("click", runQuiz);

//fires init when page is loaded
init();

