function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const roundResult = document.createElement("p");

    if (humanChoice === computerChoice) {
        roundResult.textContent = "Draw";
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        roundResult.textContent = "Computer Wins " + humanScore + " - " + computerScore;
    }
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        humanScore++;
        roundResult.textContent = "Human Wins " + humanScore + " - " + computerScore;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        roundResult.textContent = "Human Wins " + humanScore + " - " + computerScore;
    }
    else if (humanChoice === "paper" && computerChoice === "scissor") {
        computerScore++;
        roundResult.textContent = "Computer Wins " + humanScore + " - " + computerScore;
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        humanScore++;
        roundResult.textContent = "Human Wins " + humanScore + " - " + computerScore;
    }
    else if (humanChoice === "scissor" && computerChoice === "rock") {
        computerScore++;
        roundResult.textContent = "Computer Wins " + humanScore + " - " + computerScore;
    }

    result.appendChild(roundResult);

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


let humanScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
const result = document.querySelector("#result");


function playRoundNew(humanSelection) {
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    checkWin();
}

const rockButton = document.querySelector("#rock");

rockButton.addEventListener("click", () => {
    playRoundNew("rock");
});

const paperButton = document.querySelector("#paper");

paperButton.addEventListener("click", () => {
    playRoundNew("paper");
});

const scissorButton = document.querySelector("#scissor");

scissorButton.addEventListener("click", () => {
    playRoundNew("scissor");
});


function checkWin() {
    const playResult = document.createElement("p");
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            playResult.textContent = "Human Wins";
            result.appendChild(playResult);
        }
        else {
            playResult.textContent = "Computer Wins";
            result.appendChild(playResult);
        }
    }
}


