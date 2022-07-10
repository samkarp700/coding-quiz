// global variables for quiz page
var timerEl = document.getElementById("time-left");
var greetingEl = document.querySelector("#greeting");
var startButtonEl = document.getElementById("start-btn");
var quizEl = document.getElementById("quiz-questions");
var questionEl = document.getElementById("question");
var answerEl = document.querySelector("#choice-btn");

//answer buttons
var answerA = document.querySelector(".btn-1");
var answerB = document.querySelector(".btn-2");
var answerC = document.querySelector(".btn-3");
var answerD = document.querySelector(".btn-4");

//timer start settings
var startTime = 60;

//event listener to start game
startButtonEl.addEventListener("click", function() {
    startGame();
});
    

//functions main
var nextQuestionIndex = 0;
var startGame = function() {
    //hide start and greeting
    document.getElementById("greet").style.visibility='hidden';
   document.getElementById("start-btn").style.visibility='hidden';
   //timer begins
   time = startTime;
   timer = setInterval(startTimer, 1000);
    //start question loop
    quizEl.classList.remove("hide");
    showQuestion();
}

var startTimer = function () {
    //timer function
    if (time>0) {
        time-=1;
        document.getElementById("time-left").innerHTML=time;
    }
    else {
        clearInterval(startTime);

    }
    if (time === 0) {
        clearInterval(timer);
      
      
    }
    //alert out of time
    // document.getElementById("status").innerHTML="You are out of time!"

}

function showQuestion() {
        //loop through array of questions
        var nextQuestion = questionAnswer[nextQuestionIndex];
        questionEl.textContent = nextQuestion.question;
        answerA.textContent=questionAnswer[nextQuestionIndex].answers[0];
        answerB.textContent=questionAnswer[nextQuestionIndex].answers[1];
        answerC.textContent=questionAnswer[nextQuestionIndex].answers[2];
        answerD.textContent=questionAnswer[nextQuestionIndex].answers[3];

    // questionEl.classList.remove("hide");
    // //new question and answer choices
    // for (var i = 0; i < questionAnswer.length; i++) {

    // }
    // var addQuestion = document.querySelector("#question");
    // addQuestion.textContent = questionAnswer.question;
    // addQuestion.className = "container";

};

var answerStatus = function () {
    //check answer
}

var endGame = function () {
    //timer runs out or last question
    //prompt to save high score
}

var saveHighScore = function () {
    // set initials and score to local storage
}

//question and answer array for question loop


var questionAnswer = [
    {
        question: "In the following array, who is at index 3? ['Jorge', 'Robert', 'Joe', 'Dexter', 'Lincoln']",
        answers: ["Dexter", "Lincoln", "Jorge", "Joe"],
        correct: "Dexter"
    }, 

    {
        question: "Inside which HTML element do we put JavaScript?", 
        answers:["<javascript>", "<script>", "<scripting", "<js>"],
        correct: "<script>"
    },

    {
        question: "Which of the following is used to increase or decrease the boldness of a text?",
        answers: ["font-style", "font-weight", "font-variant", "font-family"],
        correct: "font-weight"
    },

    {
        question: "How do you display 'Hello World' in an alert box?",
        answers: ["msgBox('Hello World)'", "msg('Hello World')", "alertBox('Hello World')", "alert('Hello World')"],
        correct: "alert('Hello World')"
    },

    {
        question: "How do you add comments in a JavaScript file?",
        answers: ["<!--Comments-->", "~Comment~", "//Comment", "'Comment'"],
        correct: "//Comment"
    }
];
