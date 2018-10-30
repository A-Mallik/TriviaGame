
$("#strtBtn").click(function(){

   location.reload();

});


var gameQuestions = {

  QuestionOne:{
     question: "In what place was Christmas once illegal?",
     choices: ["England", "France", "Brazil","Russia"],
     answer: "England"
   },

   QuestionTwo:{
     question: "In California, it is illegal to eat oranges while doing whats?",
     choices: ["Gardening", "Bathing", "Driving","Working on a computer"],
     answer: "Bathing",
   },

   QuestionThree:{
     question: "Coulrophobia means fear of what?",
     choices: ["Sacred Things", "Clowns", "Old People","Jews"],
     answer: "Clowns",
   },

   QuestionFour:{
     question: "How many pounds of pressure do you need to rip off your ear?",
     choices: ["11", "17", "7","2"],
     answer: "7",
   },

   QuestionBonus:{
     question: "Which of the following is the longest running American animated TV show??",
     choices: ["TV Funhouse", "Rugrats", "Simpsons","Pokemon"],
     answer: "Simpsons",
   }


}

var test=false;
var number = 0;
var number2 = 1;
var number3 = 1;
var correctAnswers= [];
randomQ = Math.floor(Math.random() * (Object.keys(gameQuestions).length)); // random number up to size of object
var one = gameQuestions.QuestionOne;
var two = gameQuestions.QuestionTwo;
var three = gameQuestions.QuestionThree;
var oneChoices = one.choices;
//var Two = gameQuestions.QuestionTwo;
var oneAnswer = gameQuestions.QuestionOne.answer;
//console.log(gameQuestions.QuestionOne.qOne);

function displayChoice(OneChoices){    // display the question and choices as a button
  for(var i = 0; i < OneChoices.length; i++){
       $("#displayQ").append("<br />" + "<input type='button' class='btn btn-primary' value= " + OneChoices[i] + ">" + "<br />");

  }
};

function findAns(oneAnswer){     // actions depending on if answer is found.

  $(document).click(function(event) {
    if($(event.target).val() === oneAnswer){
      Time = 5;
      $("#displayA").html("Correct!"+ " " + oneAnswer + " is the answer!" + "</ br>")
      console.clear();
      $("#displayQ").empty();

        runTheGame(gameQuestions,number2);
        clearInterval(myTimer);
        if(correctAnswers.indexOf($(event.target).val())){    //check if array has answers or else push into array
          return;
        }else{
        correctAnswers.push($(event.target).val());
      }
        $("#correct").html("Your correct answers: " + correctAnswers);

        var myTimer = setInterval(function(){
            if(Time!=0){
            //  Time--;
            };


        //  console.log(Time3);


        }, 1000);

    }
  });



}


     console.log(Object.keys(gameQuestions)[0])       // shows 'Questions'
     console.log(Object.keys(gameQuestions).length) // shows how many questions



//display the answers in an array (Unusued)

function displayAnswer(oneAnswer){

  $("#displayA").html(oneAnswer);

}

function runTheGame(gameQuestions,number){


              $("#strtBtn").html('Restart');
              $("#displayQ").html(gameQuestions[Object.keys(gameQuestions)[number]].question + "<br />");
              findAns(gameQuestions[Object.keys(gameQuestions)[number]].answer);
              displayChoice(gameQuestions[Object.keys(gameQuestions)[number]].choices);

}
var j = 5;
var m;


//Counter for seconds left
var Time = 5;

//-------
//Timer for seconds left
//-------
var myTimer = setInterval(function(){
    if(Time!=0){
      Time--;
    };

  console.log(Time);
  $("#timer").html("You have " + Time + " seconds left!")

}, 1000);


//----------------
var Time2= 5;

//------- runs the game for limit of seconds selected, in my case only 5 seconds to test functionality
//
runTheGame(gameQuestions,number);
var myGame = setInterval(function(){
    if(Time2!=0){
      Time2--;
    };

 if(number2 != 4){
runTheGame(gameQuestions,number2++);

}
 else{
   clearInterval(myTimer);
 }

 Time = 5;
 $("#displayC").html("Correct Answers: " + correctAnswers);

}, 5000);
