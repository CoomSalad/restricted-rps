const STARTING_ROCK = 3;
const STARTING_PAPER = 3;
const STARTING_SCISSORS = 3;
const STARTING_HAND_SIZE = STARTING_ROCK+STARTING_PAPER+STARTING_SCISSORS;

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

function initialize() {
    // Draw opponent's remaining card types
    const opponentRock = document.querySelector(".remaining .cards .rock");
    const opponentPaper = document.querySelector(".remaining .cards .paper");
    const opponentScissors = document.querySelector(".remaining .cards .scissor");
    for (let i = 0; i < STARTING_ROCK; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/rock.png");
        opponentRock.appendChild(card);
    }
    for (let i = 0; i < STARTING_PAPER; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/paper.png");
        opponentPaper.appendChild(card);
    }
    for (let i = 0; i < STARTING_SCISSORS; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/scissors.png");
        opponentScissors.appendChild(card);
    }
    // Draw opponent's hand
    const opponentHand = document.querySelector(".opponent-hand");
    for (let i = 0; i < STARTING_HAND_SIZE; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/back.png");
        opponentHand.appendChild(card);
    }
}

document.addEventListener("DOMContentLoaded", initialize);