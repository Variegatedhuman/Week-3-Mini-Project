
    




let playerScore = 0;
let robotScore = 0;



function battle(playerChoice, robotChoice) {
     if(playerChoice === robotChoice) {
        return "It was a tie!";
    }   else if (playerChoice === "rock" && robotChoice === "paper") {
        console.log ("Robot wins with paper!");
        robotScore++;

    }   else if (playerChoice === "rock" && robotChoice === "scissors"){
        console.log ("Player wins with rock!");
        playerScore++;

    }   else if (playerChoice === "paper" && robotChoice === "rock"){
        console.log ("Player wins with paper!");
        playerScore++;

    }   else if (playerChoice === "paper" && robotChoice === "scissors"){
        console.log ("Robot wins with scissors!");
        robotScore++;

    }    else if (playerChoice === "scissors" && robotChoice === "rock"){
        console.log ("Robot wins with rock!");
        robotScore++;

    }    else if (playerChoice === "scissors" && robotChoice === "paper"){
        console.log ("Player wins with scissors!");
        playerScore++;
        
    }   
}

var restart = "yes";

while (restart === "yes"){

var playerChoice = prompt("Choose one: rock, paper, or scissors");
    var robotChoice = Math.random() * 11;
    if (robotChoice < 4) {
        robotChoice = "rock";
    } else if(robotChoice < 8) {
        robotChoice = "paper";
    } else {
        robotChoice = "scissors";
    }

    
    console.log("Player's Choice: " + playerChoice);
    console.log("Robot's Choice: " + robotChoice);
    console.log (battle(playerChoice, robotChoice));
    console.log("Player's Score: " + playerScore);
    console.log("Robot's Score: " + robotScore);
    restart = prompt("Would you like to play again? yes or no");
}





