// Timer (right hand side corner) (part of code taken from lecture - Activity 04- Stu Traverse)
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startButton = document.querySelector(".btn");
var welcomeScreen = document.querySelector(".welcomeScreen");
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
      secondsLeft--;
    }
  }(secondsLeft === 0)) {{
    // Stops execution of action at set interval
    clearInterval(timerInterval);
  // Calls function to create and append image
  loseGame();
}

}, 1000);
})

//global variables
var questions = [
  {
    question: "where do snow leopards live?",
    choices: ["turkey", "india", "china"],
    answer: "india"
  },
  {
    question: "what do snow leopards eat?",
    choices: ["grass", "peanut butter", "jelly"],
    answer: "grass"
  },
  {
    question: "what do snow leopards like to play?",
    choices: ["guitar", "piano", "the keys"],
    answer: "guitar"
  }
]

var winCounts = "";
var loseCounts = "";
var questionsCounter = "";


function init() {
  getWins();
  getlosses();
}

//run quiz by generating quiz
function runQuiz() {
  generateQuiz();
  setTime();
}

//run the quiz
function generateQuiz() {
  isWin = false;
  // secondsLeft = 90;
  //hides beginning screen when you click the button
  welcomeScreen.style.display = "none";
  console.log(welcomeScreen.style.display);
  renderQuestions();
}

//render questions using an index element
function renderQuestions() {
  {
    var currQuestion = questions[questionsCounter];
    // console.log(currQuestion);
    var h1Tag = document.createElement("h1");
    h1Tag.textContent = currQuestion[i].question;

    var divTag = document.createElement("div");
    for (var i = 0; i < currQuestion.choices; i++) {
      var currChoice = currQuestion.choices[i]
      var btn = document.createElement("button");
      btn.textContent = currChoice;
      //Gary - append button to div tag
      divTag = document.append(h1Tag);
      //Gary - append div and h1 tag to where needs to appear on the page
      welcomeScreen = document.append(divTag);
    }

    //event listener to quiz element where target event matches answer button
    welcomeScreen.addEventListener("click", function (event) {
      var buttonAnswer = event.target
      var div2Tag = document.createElement("div");
      div2Tag.textContent = "";
      if (buttonAnswer === questions.answer) {
        div2Tag.textContent = "Correct!"
        winCounter++;
        winCounts();
      } else (buttonAnswer !== questions.answer); {
        div2Tag.textContent = "Incorrect!"
        secondsLeft--;
        loseCounter++;
        loseCounts();
        setTime();
      }
      questionCounter++;
      renderQuestions();
    })
  }


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
}
