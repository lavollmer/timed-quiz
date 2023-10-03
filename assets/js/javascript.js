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

//Quiz (questions) - take quiz

var generateBtn = document.querySelector(".btn");

//javascript looking for click of button to generate quiz/event

generateBtn.addEventListener("click", runQuiz)


function runQuiz() {
  var quiz = generateQuiz();
  var quizTime = setTime();

  function generateQuiz() {
    //Front Page - Coding Quiz Challenge - what do you need to do (welcome screen)
    var container = document.querySelector(".questions");

    container.addEventListener("click", function (event) {
      var element = event.target;

      if (element.matches(".ques")) {
        var state = element.getAttribute("data-state");

        // Use an if statement to conditionally render the number on the card
        if (state === "correct") {
          // If the card is clicked while the state is "hidden", we set .textContent to the number 
          element.textContent = "Correct!";;
          // Using the dataset property, we change the state to visible because the user can now see the numberß

        } else {
          // 'Hide' the number by setting .textContent to an empty string
          element.textContent = "";
          // Use .setAttribute() method
          element.setAttribute("data-state", "Incorrect!")

        }
      }

    })
  }
}
