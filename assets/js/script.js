var questions = [
  {
    title: "What is an if/else question enclosed with?",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "What data is not used commonly?",
    choices: ["alerts", "booleans", "numbers", "strings"],
    answer: "alerts",
  },
  {
    title:
      "Tool used for development and debugging to print debugger content _______",
    choices: ["JavaScript", "console.log", "terminal/bash", "for loops"],
    answer: "console.log",
  },
  {
    title: "In JavaScript which of the following can be used to store arrays?",
    choices: [
      "strings and numbers",
      "booleans",
      "other arrays",
      "all the above",
    ],
    answer: "all the above",
  },
  {
    title: "What are string values enclosed with when assigning variables?",
    choices: ["curly brackets", "quotes", "paranthesis"],
    answer: "quotes,",
  },
];

//Variables
var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = documnt.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

//Time left 10 seconds per question
var secondsLeft = 51;
var holdInterval = 0;
var penalty = 5;

//New Element
val ulCreate = document.createElement("ul");

//Trigger time on button click, show display on screen
timer.addEventListener ("click", function () {
    if(holdInterval ===0 ) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "TIME EXPIRED"
            }
        }, 1000);
    }
    render(questionIndex);
});

function render(questionIndex) {
    // Clear Existing Data
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    //Loop through all array info
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionsIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    //New for each question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", compare);
    });
}
// Compare Choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent =
            "Correct! The answer is " + questions[questionIndex].answer;
        } else {
            //Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = 
            "Wrong Answer! The Correct answer is: " + questions[questionIndex].answer;
        }
    }
    // Question Index determines number question user is on
    questionIndex++;

    if (question >= questions.length) {
        allDone();
        createDiv.textContent = 
        "End of Quiz" +
        " " +
        "You got " +
        score +
        "/" +
        questions.length +
        " Correct!";
    } else {
        render(questionIndex);
    }
}