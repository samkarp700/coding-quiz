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
    //hide start and greeting
    document.getElementById("greet").style.visibility='hidden';
   document.getElementById("start-btn").style.visibility='hidden';
   console.log("questions begin");
   //timer begins
   time = startTime;
   timer = setInterval(startTimer, 1000);
    console.log("timer began");
    //start question loop
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
        console.log("out of time!");
    }
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

var questionAnswerEl = [
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
        answer: ["font-style", "font-weight", "font-variant", "font-family"],
        correct: "font-weight"
    },

    {
        question: "How do you display 'Hello World' in an alert box?",
        answer: ["msgBox('Hello World)'", "msg('Hello World')", "alertBox('Hello World')", "alert('Hello World')"],
        correct: "alert('Hello World')"
    },

    {
        question: "How do you add comments in a JavaScript file?",
        answer: ["<!--Comments-->", "~Comment~", "//Comment", "'Comment'"],
        correct: "//Comment"
    }
];
