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
  nextPlayer1();
  $("#player1").click(function(){
    $("#rollDice").click(function(){
      p1.rollDice();
      if(p1.rollScore === 1){
        $("#p1rollScore").text("Oops! You rolled 1");
        $("#p1roundScore").text("0");
        $("p1, #rollDice").prop("disabled", true);
        $("p1, #holdDice").prop("disabled", true);
      }else{
        $("#p1rollScore").text(p1.rollScore);
        $("#p1roundScore").text(p1.roundScore);
      }
    });
    $("#hold").click(function() {
      p1.holdDice();
      if(p1.totalScore >= 100){
        $("#p1totalScore").text("You are the WINNER !!!!");
      }else{
        $("#p1totalScore").text(p1.totalScore);
        $("p1, #rollDice").prop("disabled", true);
        $("p1, #holdDice").prop("disabled", true);
      } 
    });
  });
});

$(document).ready(function() {
  nextPlayer2();
  $("#player2").click(function(){
    $("#rollDice").click(function() { 
      p2.rollDice();
      if(p2.rollScore === 1){
        $("#p2rollScore").text("Oops! You rolled 1");
        $("#p2roundScore").text("0");
        $("p2, #rollDice").prop("disabled", true);
        $("p2, #holdDice").prop("disabled", true);
      }else{
        $("#p2rollScore").text(p2.rollScore);
        $("#p2roundScore").text(p2.roundScore);
      }
    });
    $("#hold").click(function() {
      p2.holdDice();
      if(p2.totalScore >= 100){
        $("#p2totalScore").text("You are the WINNER !!!!");
      }else{
        $("#p2totalScore").text(p2.totalScore);
        $("p2, #rollDice").prop("disabled", true);
        $("p2, #holdDice").prop("disabled", true);
      } 
    });
  });
});

$(document).ready(function(){
  $("#newGame").click(function(){
      $("#p1totalScore").text("");
      $("#p2totalScore").text("");
      $("#p1rollScore").text("");
      $("#p1roundScore").text("");
      $("#p2rollScore").text("");
      $("#p2roundScore").text("");
  });
});

/* Business Logic */
function PigDice(rollScore, roundScore, totalScore){
this.rollScore = 0;
this.roundScore =0;
this.totalScore =0;
}

var p1 = new PigDice();
var p2 = new PigDice();

PigDice.prototype.rollDice = function(){
var dice = Math.floor(Math.random()*6)+1;
this.rollScore = dice;
this.roundScore += this.rollScore;
}

PigDice.prototype.holdDice = function(){
this.totalScore += this.roundScore;
}

function nextPlayer2(){
  $("p2, #rollDice").prop("disabled", false); 
  $("p2, #hold").prop("disabled",false);
}

function nextPlayer1(){
  $("p1, #rollDice").prop("disabled", false); 
  $("p1, #hold").prop("disabled",false);
}
