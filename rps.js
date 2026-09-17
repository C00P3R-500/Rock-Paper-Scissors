let humanScore = 0;
let computerScore = 0;



function getComputerChoice(num) {

    if (num === 0) {
        choice = "Rock";
    }
    else if (num === 1) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";

    }

    console.log(choice);

}

function random() {
    let num = Math.floor(Math.random() * 3);
    getComputerChoice(num);
}

function getHumanChoice() {
    let humanChoice = prompt("Rock Paper Scissors? ");

    if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors"){
        console.log(humanChoice);
    }
    else {
        alert("Try again!");
        getHumanChoice();
    }
}

random();
getHumanChoice();