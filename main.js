function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(choices){
    let input = choices
    if (input == "rock"){
        return 0;
    } else if (input == "paper"){
        return 1;
    } else if (input == "scissors"){
        return 2;
    }
}

let humanScore = 0
let computerScore = 0

const choices = ["Rock", "Paper", "Scissors"]
const rockBtn = document.getElementById("rockButton")
const paperBtn = document.getElementById("paperButton")
const scissorsBtn = document.getElementById("scissorsButton")
const restartBtn = document.getElementById("restartButton")
const firstMsg = document.getElementById("chooseMessage")
const humanSelect = document.getElementById("humanChoice")
const compSelect = document.getElementById("computerChoice")
const humanScoreParam = document.getElementById("humanScore")
const compScoreParam = document.getElementById("computerScore")

rockBtn.addEventListener('click', () => playGame('rock'))
paperBtn.addEventListener('click', () => playGame('paper'))
scissorsBtn.addEventListener('click', () => playGame('scissors'))

restartBtn.style.display = `none`
restartBtn.addEventListener('click', () => restartGame())

function playRound(HumanChoice, ComputerChoice){
    humanSign(HumanChoice)
    compSign(ComputerChoice)
    if (HumanChoice == ComputerChoice){
        firstMsg.textContent = `It is a Tie`
    } else if (
        (HumanChoice == 0 && ComputerChoice == 2) ||
        (HumanChoice == 1 && ComputerChoice == 0) ||
        (HumanChoice == 2 && ComputerChoice == 1)) {
        firstMsg.textContent = "You Win This Round"
        humanScore += 1
        humanScoreParam.textContent = `Player : ${humanScore}`
    } else {
        firstMsg.textContent = "You Lose This Round"
        computerScore += 1
        compScoreParam.textContent = `Computer : ${computerScore}`
    }
}

function playGame(choices){
    const HumanChoice = getHumanChoice(choices)
    const ComputerChoice = getComputerChoice()
    playRound(HumanChoice, ComputerChoice)

    if (humanScore == 5){
        firstMsg.textContent = "You Win!"
        rockBtn.style.display = `none`
        paperBtn.style.display = `none`
        scissorsBtn.style.display = `none`
        restartBtn.style.display = `block`
    } else if (computerScore == 5){
        firstMsg.textContent = "You Lose, Better luck next time !!"
        rockBtn.style.display = `none`
        paperBtn.style.display = `none`
        scissorsBtn.style.display = `none`
        restartBtn.style.display = `block`
    }
}

function compSign(computerChoice){
    if (computerChoice == 0){
        compSelect.textContent = "✊";
    } else if (computerChoice == 1){
        compSelect.textContent = "✋";
    } else if (computerChoice == 2){
        compSelect.textContent = "✌️";
    }
}

function humanSign(humanChoice){
    if (humanChoice == 0){
        humanSelect.textContent = "✊";
    } else if (humanChoice == 1){
        humanSelect.textContent = "✋";
    } else if (humanChoice == 2){
        humanSelect.textContent = "✌️";
    }
}

function restartGame(){
    humanScore = 0
    computerScore = 0

    compSelect.textContent = "❔"
    humanSelect.textContent = "❔"

    firstMsg.textContent = "Who score 5 points first is the winner!"
    humanScoreParam.textContent = `Player : ${humanScore}`
    compScoreParam.textContent = `Computer : ${computerScore}`

    restartBtn.style.display = `none`
    rockBtn.style.display = `inline-block`
    paperBtn.style.display = `inline-block`
    scissorsBtn.style.display = `inline-block`
}

