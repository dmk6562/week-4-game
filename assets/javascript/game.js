//Declaring variables
var targetNum =[];
var crystalNum=[];

//Question: Can I be able to import the container of images and assign to crystals array list? It seems to NOT work.
var crystals = $('#crystal-imgs');
var crystals = $('["crystal-imgs"]')
var userScore = 0;
var userGuesses;
var wins=0;
var losses=0;

//game reset
 function reset() {
userScore=0;
 }
var resetAndStart = function () {
 	$(".crystals").empty();
 	console.log("reset");
 }

//assign random target number between 19-120 
targetNum=Math.floor((Math.random() *100) + 19);
 $(".value").text(targetNum);
 $("#yourscore").text(userScore);


//assign random number to crystals between 1-12
 for (i = 0; i < 4; i++) {
   crystalNum[i] = Math.floor(Math.random() * 12 + 1);
 } console.log("hey", crystalNum);
 console.log("Crystal Object "+crystals);

//when clicked, adds number to the userScore 
 $("#blue").attr("value", crystalNum[0]);
 $("#green").attr("value", crystalNum[1]);
 $("#red").attr("value", crystalNum[2]);
 $("#yellow").attr("value", crystalNum[3]);

//click function for crystals
 $("#crystal-container").on("click", ".crystal-imgs", function() {
 console.log('crystal Value', crystalNum);

crystalNum = ($(this).attr("value"));
crystalNum = parseInt(crystalNum);
console.log('crystal Value', crystalNum);
  
userScore += crystalNum;
console.log('Score', userScore);
$(".target update").text(targetNum);
$("#userScore update").text(userScore);

if userScore = targetNum, then win
if (userScore === targetNum) {
alert("You win!");
 }

if userScore > targetNum, then lose
else if (userScore > targetNum) {
   alert("You lose!!");
  
   }
  











        


        

















