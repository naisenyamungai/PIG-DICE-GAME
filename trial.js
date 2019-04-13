function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function() {
    $("#rollDice").click(function() { 
        activePlayer.rollDice();
        $("#rollScore").text(activePlayer.rollScore);
        $("#roundScore").text(activePlayer.roundScore);
  
    });
    $("#hold").click(function() {
        activePlayer.holdDice();
        $("#totalScore").text(activePlayer.totalScore);
       
    });
});


//Business Logic

var rollScore, roundScore, totalScore, activePlayer, gamePlaying;
var rollDice = document.querySelector('#rollDice');
var holdDice = document.querySelector('#hold');
function start(){
    totalScore = 0;
    roundScore = 0;
    rollScore = 0;
    activePlayer = 0;
    gamePlaying = true;    
}

function disableButton(button, time){
    button.disabled = true;
    setTimeout(function(){button.disabled=false;},time);
}

function nextPlayer(){
    var icons = document.getElementsByTagName('i');
    for(i=0;i<icons.length;i++){
        icons[i].classList.remove(activePlayer);
    }
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    for(i=0;i<icons.length;i++){
        icons[i].classList.add(activePlayer);
    }
}


start();
document.querySelector('#rollDice').addEventListener('click', function(){
    if(gamePlaying(){
        var dice = Math.floor(Math.random()*6)+1;
        rollScore=dice;
        if(dice !== 1){
            roundScore += rollScore;
        }else{
            roundScore = 0;
            disableButton(rollDice, 100);
            nextPlayer();
        }
    }
});


document.querySelector('#hold').addEventListener('click', function(){
    if(gamePlaying){
        disableButton(rollDice,100);
        totalScore[activePlayer] += roundScore;

        //check if player has won the game
        if(totalScore[activePlayer] >= 100){
            alert("HURRAY!!!!! You have won the Game!");
        } else{
            nextPlayer();
        }
    }
});





    
    
