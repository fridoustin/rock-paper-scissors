function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(){
    let input = prompt("Please Choose Rock, Paper or Scissors")
    return change(input)
}

function change(input){
    let choice = input.toLowerCase()
    if (choice == "rock"){
        return 0;
    } else if (choice == "paper"){
        return 1;
    } else if (choice == "scissors"){
        return 2;
    } else {
        alert("Please Input The Right Choice!!")
        return getHumanChoice();
    }
}

let humanScore = 0
let computerScore = 0
const choices = ["Rock", "Paper", "Scissors"]

function playRound(HumanChoice, ComputerChoice){
    if (HumanChoice == ComputerChoice){
        alert(`You choose ${choices[HumanChoice]} and your enemy choose ${choices[ComputerChoice]}, So it is a Tie`)
    } else if (
        (HumanChoice == 0 && ComputerChoice == 2) ||
        (HumanChoice == 1 && ComputerChoice == 0) ||
        (HumanChoice == 2 && ComputerChoice == 1)) {
        alert("You Win This Round !")
        humanScore += 1
    } else {
        alert("You Lose This Round :(")
        computerScore += 1
    }
}

function playGame(){
    while (humanScore < 5 && computerScore < 5){
        const HumanChoice = getHumanChoice()
        const ComputerChoice = getComputerChoice()
        playRound(HumanChoice, ComputerChoice)
        alert(`Current Score : You: ${humanScore}, Computer: ${computerScore}`)
    }

    if (humanScore == 5){
        alert("You Win!")
    } else if (computerScore == 5){
        alert("You Lose, Better luck next time !!")
    }
}

playGame()


