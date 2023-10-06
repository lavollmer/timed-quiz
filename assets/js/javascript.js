// Timer (right hand side corner) (part of code taken from lecture - Activity 04- Stu Traverse)
var timeEl = document.querySelector(".time");
var startButton = document.querySelector("#generate");
var welcomeScreen = document.querySelector(".welcomeScreen");
var eventScreen = document.querySelector(".content")
var divTag = document.createElement("div");
var div2Tag = document.createElement("div");
var h1Tag = document.createElement("h1");
var scores = document.querySelector("#scores");
var correct = document.querySelector("#correct");
var endScreen = document.querySelector("#endScreen")
var highScoresScreen = document.querySelector('#highScoresScreen')
var scoreboard = document.querySelector('#scoreboard');
var questionsCounter = 0;

var winCounter = 0;
var isWin = false;
var secondsLeft = 0;
var timerInterval = "";

//sets timer on quiz
function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    //received <=0> from AskBCS
    if (secondsLeft <= 0) {
      // Stops execution of action at set interval
      endQuiz();
    }
  }, 1000)
}

function sendMessage() {
  timeEl.textContent = "Time is up!";
}


//global variables
var questions = [
  {
    question: "Snow leopards live in high alpine places. What country would you most likely find a snow leopard?",
    choices: ["Greece", "Japan", "China", "Canada"],
    answer: "China"
  },
  {
    question: "What sound can a snow leopard NOT make?",
    choices: ["mew", "growl", "puff", "roar"],
    answer: "roar"
  },
  {
    question: "Snow Leopards have powerful legs. How high can they jump?",
    choices: ["30ft", "40ft", "50ft", "60ft"],
    answer: "50ft"
  }
]

var winCounts = "";
var loseCounts = "";
var questionsCounter = 0;

//initializing the wins and losses
function init() {
  endScreen.style.display = "none";
  highScoresScreen.style.display = "none";
}

//run quiz by generating quiz
function runQuiz() {
  generateQuiz();
  endScreen.style.display = "none";
  highScoresScreen.style.display = "none";
}

//run the quiz
function generateQuiz() {
  isWin = false;
  //where the time is set for the timer
  secondsLeft = 60;
  //hides beginning screen when you click the button
  welcomeScreen.style.display = "none";
  highScoresScreen.style.display = "none";
  console.log(welcomeScreen.style.display);
  renderQuestions();
  setTime();
}


//render questions using an index element
function renderQuestions() {
  {
    var currQuestion = questions[questionsCounter];
    console.log(currQuestion);
    var questionTitle = document.querySelector("#title");
    questionTitle.textContent = currQuestion.question;
    var optionChoices = document.querySelector("#answerChoices");
    optionChoices.innerHTML = "";
    for (var i = 0; i < currQuestion.choices.length; i++) {
      var currChoice = currQuestion.choices[i]
      var btn = document.createElement("button");
      btn.textContent = currChoice;
      btn.setAttribute('value', currQuestion.choices[i])
      btn.onclick = checkAnswer;
      optionChoices.appendChild(btn);
    }

  }
};

//event listener to quiz element where target event matches answer button
function checkAnswer() {
  var buttonAnswer = this.value
  correct.textContent = "";
  if (buttonAnswer === questions[questionsCounter].answer) {
    correct.textContent = "Correct!"
    console.log(questions[questionsCounter].answer)
    winCounter++;
    // winScore();
  } else {
    (buttonAnswer !== questions[questionsCounter].answer); {
      correct.textContent = "Incorrect!"
      //received -=5 for timer from AskBCS
      secondsLeft -= 5;
      //AskBCS said to delete this
      // setTime();
    }
  }
  questionsCounter++;
  if (questionsCounter === questions.length || secondsLeft === 0) {
    endQuiz();
  } else {
    renderQuestions();
  }
}

function endQuiz() {
  console.log("quiz is over");
  eventScreen.style.display = "none";
  highScoresScreen.style.display = "none";
  var endScreen = document.querySelector("#endScreen");
  endScreen.style.display = "block";
  clearInterval(timerInterval);
  timerInterval = sendMessage();
  //run to input intials
  intialsScores();
}


function intialsScores() {
  scores.textContent = "High Score:" + winCounter;
  //button creation
  var name = document.createElement('label');
  name.textContent = 'Initials';
  var form = document.createElement('form');
  form.setAttribute('method', 'POST');
  form.setAttribute('type', 'submit');
  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'intials');
  var button = document.createElement('button');
  button.textContent = "Submit";
  button.style.color = 'blue';
  //button event listener for high scores screen
  button.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem(input.value, winCounter);
    scoreBoard();
  })
  form.appendChild(name);
  form.appendChild(input);
  form.appendChild(button);
  endScreen.appendChild(form);
  // form.display = "flex";
  // form.style.flexDirection = "row";
  // form.style.justifyContent = "center";
}

//highscore scoreboard
function scoreBoard() {
  var button = document.createElement('button');
  button.textContent = "Go Back";
  button.addEventListener("click", function (event) {
    event.preventDefault();
    welcomeScreen.scrollIntoView({ behavior: 'smooth' });
    welcomeScreen.style.display = "block";
    endScreen.style.display = "none";
    highScoresScreen.style.display = "none";
    timerInterval = 0;
  })
  var buttonClear = document.createElement('button');
  buttonClear.textContent = "Clear High Scores";
  buttonClear.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
  })
  button.style = "blue";
  buttonClear.style = "blue";
  highScoresScreen.appendChild(button);
  highScoresScreen.appendChild(buttonClear);

  console.log("scoreboard");
  eventScreen.style.display = "none";
  endScreen.style.display = "none";
  highScoresScreen.style.display = "block";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    var displayScore = `${key}: ${localStorage.getItem(key)}`;
    var pTag = document.createElement("p");
    pTag.textContent = displayScore;
    scoreboard.appendChild(pTag);
  }
}

//fires init when page is loaded
init();

//startButton will startQuiz when clicked 
startButton.addEventListener("click", runQuiz);


