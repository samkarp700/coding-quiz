// global variables for quiz page
var timerEl = document.getElementById("time-left");
var greetingEl = document.querySelector("#greeting");
var startButtonEl = document.getElementById("start-btn");
var quizEl = document.getElementById("quiz-questions");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-buttons");


//timer start settings
var startTime = 60;

//event listener to start game
startButtonEl.addEventListener("click", function() {
    startGame();
});
    

//functions main

var startGame = function() {
    document.getElementById("greet").style.visibility='hidden';
   
    
    //hide greeting
    //start question loop
}

var startTime = function () {
    //timer begins
}

var setQuestion = function () {
    //new question and answer choices
}

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

