// global variables for quiz page
var timerEl = document.getElementById("time-left");
var greetingEl = document.querySelector("#greeting");
var startButtonEl = document.getElementById("start-btn");
var quizEl = document.getElementById("quiz-questions");
var questionEl = document.getElementById("question");
var answerEl = document.querySelector("#choice-btn");
var endGameEl = document.getElementById("game-over");
var statusEl = document.getElementById("status");

//answer buttons
var answerA = document.querySelector(".btn-1");
var answerB = document.querySelector(".btn-2");
var answerC = document.querySelector(".btn-3");
var answerD = document.querySelector(".btn-4");

//timer start settings
var startTime = 60;
var score = timeLeft;
var timeLeft = "";




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
        document.getElementById("status").innerHTML="You are out of time!"
        endGame();
    }

}



function showQuestion() {
        //questions to replace quiz container html
        var nextQuestion = questionAnswer[nextQuestionIndex];
        questionEl.textContent = nextQuestion.question;
        answerA.textContent=questionAnswer[nextQuestionIndex].answers[0];
        answerB.textContent=questionAnswer[nextQuestionIndex].answers[1];
        answerC.textContent=questionAnswer[nextQuestionIndex].answers[2];
        answerD.textContent=questionAnswer[nextQuestionIndex].answers[3];
};

 function answerStatus (answerChoice) {
    //if answer button is clicked, check for 'correct', if true, status appear 'correct'.
    //else status appear wrong, deduct time, move to next question. 

    var correctChoice = questionAnswer[nextQuestionIndex].correct;
    if (answerChoice === correctChoice) {
        document.getElementById("status").innerHTML="Correct!";
        time+=5
        
    }
    else {
       document.getElementById("status").innerHTML="Wrong!";
        time-=5
        document.getElementById("time-left").innerHTML=time;
    }

    //set next question in array or end
    if (nextQuestionIndex ===questionAnswer.length -1) {
        //end quiz;
        endGame();
    }
    else {
        nextQuestionIndex++;
        showQuestion();
        
    }
};

// click event for each button answer - loop to next question in array. 
answerA.addEventListener("click", function() {
    answerStatus(answerA.textContent);
})
answerB.addEventListener("click", function() {
    answerStatus(answerB.textContent);
})
    
answerC.addEventListener("click", function() {
        answerStatus(answerC.textContent);
})
answerD.addEventListener("click", function() {
            answerStatus(answerA.textContent);
})


function endGame () {
    //timer runs out or last question
    //prompt to save high score
    quizEl.classList.add("hide");
    endGameEl.classList.remove("hide");
    clearInterval(timer);
    //timer = score
    var scoreEl = document.getElementById("your-score");
    scoreEl.textContent = time;
    saveScore();

}


var saveScore = function () {
    // set initials and score to local storage
    getInit = setInterval(function () {
        var scoreEl = (document.getElementById("your-score").value=time);
    scoreEl.textContent = time;

        var playerEl = prompt("Awesome! Please enter your initials to save your score.");
       
        var savedScore = {playerEl, scoreEl};
        var savedNameScore = JSON.parse(localStorage.getItem("savedScore")) || [];

        savedNameScore.push(savedScore);
        localStorage.setItem('savedScore', JSON.stringify(savedNameScore));
        clearInterval(getInit);
        
    });
    //go to high score page
    window.location.href = "scores.html"
   
}



//question and answer array for question loop
var questionAnswer = [
    {
        question: "In the following array, who is at index 3? ['Jorge', 'Robert', 'Dexter', 'Lincoln']",
        answers: ["Dexter", "Lincoln", "Jorge", "Robert"],
        correct: "Lincoln"
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
