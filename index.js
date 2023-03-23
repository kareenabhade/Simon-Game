var userClickedPattern = [];

var level=0;
var started=false;


var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];


$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});

$(document).keypress(function(){
    if(!started){
    
        $("h1").text("level "+level);
        nextSequence();
        started=true;
    }
})

function nextSequence(){
    level++;

    var randomNumber = Math.floor(Math.random()*4);
    var randomColourChosen= buttonColours[randomNumber];
    gamePattern.push(randonColourChosen);

    $("#"+randomColourChosen).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColourChosen);
    animatePress(randomColourChosen);

}


function playSound(name){
    var audio= new Audio(name+".mp3");
    audio.play();
}

function animatePress(currentColour){

    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}


