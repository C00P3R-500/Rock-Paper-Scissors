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
    let humanChoice = prompt("Rock Paper Scissors?: ");


}

random();
getHumanChoice();