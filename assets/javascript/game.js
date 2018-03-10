//Declaring variables
var userScore = 0;
var counter = 0;
var targetNum;
var crystalNum =[];
var crystalImages = $('#crystals');
var gameActive = true;


// $('#targetNumberShow').text(targetNum);

// function resetGame() {
//     gameActive =true;
//     counter = 0;
//     targetNum = 0;
//     crystalNum = [];
//     crystalValue = 0;
//     crystalImages.unbind('click');
//     $('#crystalsCountershow').text('--');
//     $("#win").delay("slow").animate({opacity: "0"});
//     $("#loss").delay("slow").animate({opacity: "0"});
//     console.log('game reset');
//     gameplay();
// };
var wins= 0;
var losses = 0;

// Decaring variables for tallies
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function game() {
if (gameActive = true) {
    //assign random target number between 19-120 
targetNum = (Math.floor(Math.random() * 100)+19);
console.log('targetNum', 'targetNum');

//assign random number to crystals between 1-12
for (i = 0; i < 4; i++) {
    crystalNum[i] = (Math.floor(Math.random() * 12)+1);
    console.log('crystalNum', 'crystalNum');
    $('#targetNumberShow').text(targetNum);


//assigning crystalNum to crystals 
 $("#bluecrystal").attr("value", crystalNum[0]);
 $("#greencrystal").attr("value", crystalNum[1]);
 $("#redcrystal").attr("value", crystalNum[2]);
 $("#yellowcrystal").attr("value", crystalNum[3]);
 

 //when clicked, adds crystalnumbers to the userScore 
    crystalImages.on('click', '.crystal-imgs', function() {
    crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);
    console.log('crystalValue:', 'crystalValue');

    userScore += crystalValue;
    $('#targetNumberShow').text(targetNum);
    $('#userScoreshow').text(userScore);

    //  counter += crystalValue;
    //  console.log('counter', 'counter');
    //  $('#crystalsCountershow').text(counter);


     if (userScore === targetNum) {
         wins++;
         alert("You Win!");
         $('#numberWins').text(wins);

    //  $('#userScoreshow').text(userScore);
        (gameActive = false);
        resetGame();
         

     } else if (userScore > targetNum) {
        losses++
        alert("You Lost!");
        $('#numberLosses').text(losses);
        (gameActive= false)
        resetGame();
        
             
    }
     
 });
};

 }   else {
     resetGame();
 };
};

game();

//game reset
    function resetGame() {
    gameActive =true;
    userScore = 0;
    targetNum = 0;
    crystalNum = [];
    crystalValue = 0;
    crystalImages.unbind('click');
    gameplay();
    $('#targetNumberShow').text(targetNum);
    $('#userScoreshow').text(userScore);
};
    
 






