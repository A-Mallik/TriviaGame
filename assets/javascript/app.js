
$("#strtBtn").click(function(){

   location.reload();

});


var gameQuestions = {

      QuestionOne:{
         question: "In what place was Christmas once illegal?",
         choices: ["England", "France", "Brazil","Russia"],
         answer: "France"
       },

       QuestionTwo:{
         question: "In California, it is illegal to eat oranges while doing what?",
         choices: ["Gardening", "Bathing", "Driving","Working on a computer"],
         answer: "Gardening",
       },

       QuestionThree:{
         question: "Coulrophobia means fear of what?",
         choices: ["Sacred Things", "Clowns", "Old People","Jews"],
         answer: "Clowns",
       },



}

var test=false;
var number = 0;
randomQ = Math.floor(Math.random() * (Object.keys(gameQuestions).length)); // random number up to size of object
var one = gameQuestions.QuestionOne;
var two = gameQuestions.QuestionTwo;
var three = gameQuestions.QuestionThree;
var oneChoices = one.choices;
//var Two = gameQuestions.QuestionTwo;
var oneAnswer = gameQuestions.QuestionOne.answer;
//console.log(gameQuestions.QuestionOne.qOne);

function displayChoice(OneChoices){
  for(var i = 0; i < OneChoices.length; i++){
       $("#displayQ").append("<br />" + "<input type='button' class='btn btn-primary' value= " + OneChoices[i] + ">" + "<br />");
  }
};

function findAns(oneAnswer){

  $(document).click(function(event) {
    if($(event.target).val() === oneAnswer){

      $("#displayA").html("Correct!"+ " " + oneAnswer + " is the answer!" + "</ br>")
      console.clear();
      $("#displayQ").empty();
    //  $("#displayA").append(oneAnswer);

      // $(document).dequeue(function(){setTimeout(countDown2,1000) });
      // setTimeout(countDown,1000);
      // setTimeout(countDown2,1000)
       runTheGame(gameQuestions,number);


    }
  });



}


     console.log(Object.keys(gameQuestions)[0])       // shows 'Questions'
     console.log(Object.keys(gameQuestions).length) // shows how many questions



  //    for(var i = 0; i < Object.keys(gameQuestions).length; i++){                 // for loop questions
     //      console.log(gameQuestions[Object.keys(gameQuestions)[i]].choices)
     // }

    //   $("p1").append(gameQuestions[Object.keys(gameQuestions)[0]].question + " " + "<input type='button' value= " + gameQuestions[Object.keys(gameQuestions)[0]].choices+ ">" + "<br />"); // generate the questions randomly
//console.log(test);
//setTimeout(function(){

function displayAnswer(oneAnswer){

  $("#displayA").html(oneAnswer);

}

function runTheGame(gameQuestions,number){


              $("#strtBtn").html('Restart');
              $("#displayQ").html(gameQuestions[Object.keys(gameQuestions)[number]].question + "<br />");
              findAns(gameQuestions[Object.keys(gameQuestions)[number]].answer);
              displayChoice(gameQuestions[Object.keys(gameQuestions)[number]].choices);

              //console.log(number);
              j=5;


              // counter++;

              //}, 1000);

              //   continue;


}
var j = 5;
var m;


//----------------



function countDown(){
   k--;


   if(k > 0){
      setTimeout(countDown,5000);
   }

  // console.log(j);
   runTheGame(gameQuestions, number++);
  m = number;
   //j=5;
   if(number === 2){
     return;
     console.log(number);
   }


}

function countDown2(){
   j--;

   if(j >= 0){
      setTimeout(countDown2,1000);

   }

   console.log(j);
   if(j >=0){
     // if(j === 0 ){
     //
     //   setTimeout(function(){
     //
     //          $("#displayA").html("Time's Up!<br/> The answer is: " + displayAnswer(gameQuestions[Object.keys(gameQuestions)[number]].answer));
     //
     //    }, 3000);
     //
     //
     //
     //
     // }
   $("#timer").html("Time Left for This Question: <br/>" + j);
    }


}

var k = 3;
//var j = 5;
setTimeout(countDown,1000);
  setTimeout(countDown2,1000);
runTheGame(gameQuestions,number);
console.log(m);
// setTimeout(function(){ $("#displayA").append("game over! Game is restarting..(Not reload, restarting function)")
// location.reload();
// setTimeout(countDown,1000);
//   setTimeout(countDown2,1000);
// runTheGame(gameQuestions,number);
//
//
// }, 15000);


// $(document).click(function(event) {
// if($(event.target).val() === gameQuestions[Object.keys(gameQuestions)[number]].answer){
// $("#displayQ").empty();
//   // setTimeout(countDown,1000);
//   //   setTimeout(countDown2,1000);
//       //  runTheGame(gameQuestions,number++);
//          if(number === 2){
//            alert("game over!");}
//
//          }
//
//
//
//
// });
