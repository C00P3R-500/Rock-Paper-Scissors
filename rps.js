let humanScore = 0;
let computerScore = 0;

function random() {
    let num = Math.floor(Math.random() * 3);
    return num;
}

function getComputerChoice(num) {
    num = random();
    let choice = "none";

    if (num === 0) {
        choice = "rock";
    }
    else if (num === 1) {
        choice = "paper";
    }
    else{
        choice = "scissors";
    }

    console.log("Computer: " +choice);
    return choice;
}


function getHumanChoice() {
    let humanChoice = prompt("Rock Paper Scissors? ");

    while (humanChoice.toLowerCase() != "rock" && humanChoice.toLowerCase() != "paper" && humanChoice.toLowerCase() != "scissors") {
        alert("Try again!");
        humanChoice = prompt("Rock Paper Scissors? ");
    }

    console.log("You: " + humanChoice.toLowerCase());
    return humanChoice.toLowerCase();
}

function playRound () {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win rock crushes scissors!");
        humanScore = humanScore + 1;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose paper covers rock.");
        computerScore = computerScore + 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose scissors cuts paper.");
        computerScore = computerScore + 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win paper covers rock!");
        humanScore = humanScore + 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win scissors cuts paper.");
        humanScore = humanScore + 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose rock crushes scissors.");
        computerScore = computerScore + 1;
    }
    else if (humanChoice === computerChoice) {
        console.log("Tie!");
    }
    else {
        alert("ERROR");
    }
}

function playGame () {
    
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Congrats you win!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose loser.")
    }
    else {
        console.log("You tie!")
    }
    
}

playGame();





