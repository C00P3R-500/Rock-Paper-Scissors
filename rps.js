let humanScore = 0;
let computerScore = 0;

const message = document.querySelector("#message");
const yscore = document.querySelector("#yscore");
const cscore = document.querySelector("#cscore");

function random() {
    let num = Math.floor(Math.random() * 3);
    return num;
}

function endMessage() {
    if (humanScore > computerScore) {
        message.textContent = "Congrats you win!";
    }
    else if (humanScore < computerScore) {
        message.textContent = "You lose loser.";
    }
    else {
        message.textContent ="You tie!";
    }

    humanScore = 0;
    computerScore = 0;
    cscore.textContent = computerScore;
    yscore.textContent = humanScore;
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


function playRound (humanChoice) {

    const computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        message.textContent = "You win rock crushes scissors!";
        humanScore = humanScore + 1;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        message.textContent = "You lose paper covers rock.";
        computerScore = computerScore + 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        message.textContent = "You lose scissors cuts paper.";
        computerScore = computerScore + 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        message.textContent = "You win paper covers rock!";
        humanScore = humanScore + 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        message.textContent = "You win scissors cuts paper.";
        humanScore = humanScore + 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        message.textContent = "You lose rock crushes scissors.";
        computerScore = computerScore + 1;
    }
    else if (humanChoice === computerChoice) {
        message.textContent = "Same Choice Selected!";
    }
    else {
        alert("ERROR");
    }

    cscore.textContent = computerScore;
    yscore.textContent = humanScore;

    if (humanScore === 5 || computerScore === 5){
        endMessage();
    }
}



const rbtn = document.querySelector("#rbtn");
const pbtn = document.querySelector("#pbtn");
const sbtn = document.querySelector("#sbtn")

rbtn.addEventListener("click", () => playRound("rock"));
pbtn.addEventListener("click", () => playRound("paper"));
sbtn.addEventListener("click", () => playRound("scissors"));





