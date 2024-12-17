function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Draw")
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Computer Wins")
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("Human Wins")
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Human Wins")
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissor") {
        console.log("Computer Wins")
        computerScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("Human Wins")
        humanScore++;
    }
    else if (humanChoice === "scissor" && computerChoice === "rock") {
        console.log("Computer Wins")
        computerScore++;
    }


}

function getComputerChoice() {
    let randomInt = Math.random()

    if (randomInt <= 0.33) {
        return "rock";
    }
    else if (randomInt <= 0.66) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getHumanChoice() {
    return prompt("Human choice: ")
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playGame() {
    for (i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Human:" + humanScore + ", Computer: " + computerScore)

}

playGame()

