//high score page only 

//restart 

var showScoreList = document.getElementById('show-scores');




// pull from local storage and display players and scores

function showHighScore() {
       

   window.localStorage.getItem('savedScore')
   var highScores = JSON.parse(window.localStorage.getItem('savedScore'));
   
   highScores.forEach(function(showScoreItems) {
    console.log(showScoreItems);
    var ul = document.createElement('ul');
    var player = showScoreItems.playerEl;
    var score = showScoreItems.scoreEl;

   
   ul.textContent = "Player: " + player + " Score: " + score;
   showScoreList.appendChild(ul);
})

};

showHighScore();

