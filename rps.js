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

    console.log(choice);
    return choice;
}


function getHumanChoice() {
    let humanChoice = prompt("Rock Paper Scissors? ");

    if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors"){
        console.log(humanChoice.toLowerCase())
        return humanChoice.toLowerCase();
    }
    else {
        alert("Try again!");
        getHumanChoice();
    }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win rock crushes scissors!");
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose paper covers rock.");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose scissors cuts paper.");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win paper covers rock!");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win scissors cuts paper.");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose rock crushes scissors.");
    }
    else if (humanChoice === computerChoice) {
        console.log("Tie!");
    }
    else {
        alert("ERROR");
    }
}


const humanPick = getHumanChoice();
const computerPick = getComputerChoice();
playRound(humanPick, computerPick);




