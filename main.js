//Generate number 1-3 and return a string value of rock paper or scissors

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    if (choice == 1) {
        return "rock"
    } else if (choice == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

//gets user input and returns it as a string

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?")
    choice = choice.toLowerCase()
    return choice

}
//makes the first letter uppercase
function formatChoice(choice) {
    let firstLetter = choice.substring(0, 1)
    firstLetter = firstLetter.toUpperCase()
    let remainder = choice.substring(1)
    choice = firstLetter + remainder
    return choice
}


//runs playRound 5 times and keeps score
function playGame() {
    let humanScore = 0
    let computerScore = 0

    function showScore() {
        console.log("The score is " + humanScore + " to " + computerScore)
    }

    function playRound(humanChoice, computerChoice) {
        //check for a human win
        if ((humanChoice == "rock" && computerChoice == "scissors")
            || (humanChoice == "paper" && computerChoice == "rock")
            || (humanChoice == "scissors" && computerChoice == "paper")) {
            console.log("You win! " + formatChoice(humanChoice) + " beats " + formatChoice(computerChoice) + ".")
            humanScore++
            showScore()

            //check for human loss
        } else if ((humanChoice == "rock" && computerChoice == "paper")
            || (humanChoice == "paper" && computerChoice == "scissors")
            || (humanChoice == "scissors" && computerChoice == "rock")) {
            console.log("You lose! " + formatChoice(humanChoice) + " doesn't beat " + formatChoice(computerChoice) + ".")
            computerScore++
            showScore()

            //else it's a tie
        } else {
            console.log("It's a tie!")
            showScore()
        }
    }
    for (let round = 0; round < 5; round++){
        playRound(getHumanChoice(), getComputerChoice())
    }

}

playGame()
