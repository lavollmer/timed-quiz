// Timer (right hand side corner) (code taken from lecture - Activity 04- Stu Traverse)
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 90;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

//Quiz (questions) - take quiz button
var generateBtn = document.querySelector(".btn");
//javascript looking for click of button to generate quiz/event
generateBtn.addEventListener("click", runQuiz);

var roseColor = ["Yellow", "White", "Red", "Pink", "Violet"]


function generateQuiz() {
  console.log(roseColor);

  //Question 1(ask the user - no functionality)
  //Answer 1(correct) - say correct
  //Answer 2(false) - say incorrect
  //Answer 3(false) - say incorrect
  //Answer 4(false) - say incorrect
}
//quiz function for questions

// function generateQuiz() {
//   //Front Page - Coding Quiz Challenge - what do you need to do (welcome screen)
//   var container = document.querySelector(".questions");

//   container.addEventListener("click", function (event) {
//     var element = event.target;

//     if (element.matches(".ques")) {
//       var state = element.getAttribute("data-state");

//       // Use an if statement to conditionally render the number on the card
//       if (state === "correct") {
//         element.textContent = "Correct!";;
//       } else {
//         element.textContent = "";
//         element.setAttribute("data-state", "Incorrect!")

//       }
//     }

//   })
// }

function runQuiz() {
  var quiz = generateQuiz();
  var quizTime = setTime();
}
