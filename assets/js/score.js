//high score page only 

var showScoreList = document.getElementById('show-scores');


// pull from local storage and display players and scores

function showHighScore() {
   window.localStorage.getItem('nameScoreArr')
   var highScores = JSON.parse(window.localStorage.getItem('nameScoreArr'));
   
   highScores.forEach(function(showScoreItems) {
   var showScoreItems = document.createElement('ul');
   showScoreItems.textContent = "Player: " + playerEl + "Score: " + scoreEl;
   showScoreList.appendChild(showScoreItems)
})

};

