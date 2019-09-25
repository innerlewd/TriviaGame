
var question = document.getElementById("question");
var correct = 0;
var wrong = 0;


var option4 = $("#option4");
var option2 = $("#option2");
var option3 = $("#option3");
var option1 = $("#option1");


var time = document.getElementById("timer");
var timer = function(x) {
if(x === 0) {
   end();
}
time.innerHTML = x;
return setTimeout(() => {timer(--x)}, 1000);
}
timer(60);


window.onload = question1()
function question1() { 
    $("#question").html("<h2>What is the name of Jabba's species?</h2>");
    $("#option1").html("Wookie");
    $("#option2").html("Ewok");
    $("#option3").html("Hutt");
    $("#option4").html("Huk");
    $("button").on("click", question2);
    $("#option3").click(function(){
        correct++;
    });
    $("#option1").click(function(){
        wrong++;
    });
    $("#option2").click(function(){
        wrong++;
    });
    $("#option4").click(function(){
        wrong++;
    });
    console.log("c:", correct, "w:", wrong)
}
// $("#option1").on("click", question2);
// $("#option2").on("click", question2);
// $("#option3").on("click", correct++, question2);
// $("#option4").on("click", question2);

function question2() {
    $("#question").html("<h2>What was the name of Han Solo's ship?</h2>");
    $("#option1").html("The Millenium Falcon");
    $("#option2").html("The Cobra Starship");
    $("#option3").html("The Ebon Hawk");
    $("#option4").html("The Death Star");
    $("button").on("click", question3);
    $("#option1").click(function(){
        correct++;
    });
    $("#option2").click(function(){
        wrong++;
    });
    $("#option3").click(function(){
        wrong++;
    });
    $("#option4").click(function(){
        wrong++;
    });
    console.log("c:", correct, "w:", wrong)

    
}

function question3() {
    $("#question").html("<h2>Which Jedi Knight becomes Darth Vader?</h2>");
    $("#option1").html("Luke Skywalker");
    $("#option2").html("Revan");
    $("#option3").html("Yoda");
    $("#option4").html("Anakin Skywalker");
    $("button").on("click", question4);
    $("#option4").click(function(){
        correct++;
    });
    $("#option3").click(function(){
        wrong++;
    });  
    $("#option2").click(function(){
        wrong++;
    });
    $("#option1").click(function(){
        wrong++;
    });
    console.log("c:", correct, "w:", wrong)

}

function question4() {
    $("#question").html("<h2>How many engines are in an X-wing Fighter?</h2>");
    $("#option1").html("2");
    $("#option2").html("4");
    $("#option3").html("6");
    $("#option4").html("3");
    $("button").on("click", question5);
    $("#option2").click(function(){
        correct++;
    });
    $("#option3").click(function(){
        wrong++;
    });
    $("#option4").click(function(){
        wrong++;
    });
    $("#option1").click(function(){
        wrong++;
    });
    console.log("c:", correct, "w:", wrong)
      
}

function question5() {
    $("#question").html("<h2>The Jedi Council consists of how many members?</h2>");
    $("#option1").html("10");
    $("#option2").html("20");
    $("#option3").html("16");
    $("#option4").html("12");
    $("button").on("click", end);
    $("#option4").click(function(){
        correct++;
    });
    $("#option3").click(function(){
        wrong++;
    });
    $("#option2").click(function(){
        wrong++;
    });
    $("#option1").click(function(){
        wrong++;
    });
    console.log("c:", correct, "w:", wrong)
    
}

function end() {
    document.getElementById("option1").outerHTML = "";
    document.getElementById("option2").outerHTML = "";
    document.getElementById("option3").outerHTML = "";
    document.getElementById("option4").outerHTML = "";
    document.getElementById("question").outerHTML = "";
    document.getElementById("timer").outerHTML = "";
    document.getElementById("score").innerHTML = "correct: " + correct + " wrong: " + wrong;
}








