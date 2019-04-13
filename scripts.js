/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function() {
  var p1 = new PigDice();
  $("#rollDice").click(function() { 
      p1.rollDice();
      $("#rollScore").text(p1.rollScore);
      $("#roundScore").text(p1.roundScore);

  });
  $("#hold").click(function() {
      p1.holdDice();
      $("#totalScore").text(p1.totalScore);
     
  });
});

/*$(document).ready(function() {
var p2 = new PigDice();
$("#rollDice").click(function() { 
    p2.rollDice();
    $("#rollScore").text(p2.rollScore);
    $("#roundScore").text(p2.roundScore);
});
$("#hold").click(function() {
    p2.holdDice();
    $("#totalScore").text(p2.totalScore);
    $("#rollDice").prop("disabled", true); 
});
});*/

/* Business Logic */
function PigDice(rollScore, roundScore, totalScore){
this.rollScore = 0;
this.roundScore =0;
this.totalScore =0;
}

PigDice.prototype.rollDice = function(){
var dice = Math.floor(Math.random()*6)+1;
this.rollScore=dice; 
if(dice !== 1){
    this.roundScore += this.rollScore;
}else{
    this.roundScore = 0;
    $("#rollDice").prop("disabled", true); 
    }  
}

PigDice.prototype.holdDice = function(){
this.totalScore += this.roundScore;
$("#rollDice").prop("disabled", true);
}


function nextPlayer() {
	//next player
		var icons = document.getElementsByTagName('i');
		for(i=0;i<icons.length;i++){
			icons[i].classList.remove(Player1);
		}
		
		Plaayer1 ===0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		
		for(i=0;i<icons.length;i++){
			icons[i].classList.add('color-' + activePlayer);
		}
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('active-' + activePlayer);
		document.querySelector('#current-0').textContent = '0';
		document.querySelector('#current-1').textContent = '0';
}