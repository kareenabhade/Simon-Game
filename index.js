var userClickedPattern = [];

var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomColourChosen= buttonColours[randomNumber];
    gamePattern.push(randonColourChosen);

    $("#"+randomColourChosen).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColourChosen);
}

function playSound(name){
    var audio= new Audio(name+".mp3");
    audio.play();
}
