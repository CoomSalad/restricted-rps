let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 1/3)
        return "rock";
    else if (choice < 2/3)
        return "paper";
    return "scissors";
}

function getHumanChoice() {
    return prompt("Rock, paper, scissors!");
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("A tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win - ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    else {
        console.log(`You lose - ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();