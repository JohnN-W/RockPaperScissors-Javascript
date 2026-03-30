let humanChoice = '';

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

let rock = document.querySelector('.btnRock');
rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

let paper = document.querySelector('.btnPaper');
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

let scissors = document.querySelector('.btnScissors');
scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});


//makes the first letter uppercase
function formatChoice(choice) {
    let firstLetter = choice.substring(0, 1)
    firstLetter = firstLetter.toUpperCase()
    let remainder = choice.substring(1)
    choice = firstLetter + remainder
    return choice
}

let scoreboard = document.querySelector('.scoreboard');
let humanScore = 0;
let computerScore = 0;
let round = 1;

function showScore() {
    console.log("The score is " + humanScore + " to " + computerScore)
}

function scoreReset() {
    humanScore = 0;
    computerScore = 0;
    round = 1;
}

function playRound(humanChoice, computerChoice) {
    //check for a human win
    if ((humanChoice == "rock" && computerChoice == "scissors")
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++

        let board = document.createElement('p');
        board.textContent = ('You win! ' +
            formatChoice(humanChoice) +
            " beats " +
            formatChoice(computerChoice) + "." +
            '. ---- Score after Round ' + round +
            ': Player ' + humanScore +
            ' - Computer ' + computerScore

        );
        scoreboard.appendChild(board)
        round++


        //check for human loss
    } else if ((humanChoice == "rock" && computerChoice == "paper")
        || (humanChoice == "paper" && computerChoice == "scissors")
        || (humanChoice == "scissors" && computerChoice == "rock")) {

        let board = document.createElement('p');
        computerScore++
        board.textContent = ('You lose! ' +
            formatChoice(humanChoice) +
            " doesn't beat " +
            formatChoice(computerChoice) +
            '. ---- Score after Round ' + round +
            ': Player ' + humanScore +
            ' - Computer ' + computerScore
        );
        scoreboard.appendChild(board);
        round++


        //else it's a tie
    } else {

        let board = document.createElement('p');
        board.textContent = ("It's a tie! ---- Score after Round " + round +
            ': Player ' + humanScore +
            ' - Computer ' + computerScore
        );
        scoreboard.appendChild(board);
        round++

    }

    if (humanScore === 5) {
        let board = document.createElement('p');
        board.textContent = "You have won the game!";
        scoreboard.appendChild(board);
        scoreReset();
    }
    if (computerScore === 5) {
        let board = document.createElement('p');
        board.textContent = "You have lost the game!";
        scoreboard.appendChild(board);
        scoreReset();
    }

}
