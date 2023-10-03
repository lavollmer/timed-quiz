//Quiz (questions)
//Front Page - Coding Quiz Challenge - what do you need to do (welcome screen)

// View High Scores (left hand side) - learning to do on Tuesday//

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

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var time = element
  mainEl.appendChild(time);

}

setTime();

