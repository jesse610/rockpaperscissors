let btns = document.querySelectorAll('button')
let resultArea = document.querySelector('p')

let playerSelection;

btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        playerSelection = btn.value
        game()
    })
});

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    
    if (computerChoice === 0) {
        return 'rock'
    } else if (computerChoice === 1) {
        return 'paper'
    } else if (computerChoice === 2) {
        return 'scissors'
    }
    
    return computerChoice.toLowerCase()
}

let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection, x) {
    computerSelection = getComputerChoice();
    x = playerSelection

    if ((computerSelection === 'rock' && playerSelection.toLowerCase() === 'paper') || (computerSelection === 'paper' && playerSelection.toLowerCase() === 'scissors') || (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'rock')) {
        resultArea.textContent = `You win! ${playerSelection} beats ${computerSelection}!` + '' + ` Your score is: ${playerScore += 1}. Computer score is: ${computerScore}.`
    } else if ((computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors') || (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock') || (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper')) {
        resultArea.textContent = `You lose! Your selection: ${playerSelection} loses to ${computerSelection}` + '' + ` Your score is: ${playerScore}. Computer score is: ${computerScore += 1}.`
    } else if ((computerSelection === 'rock' && playerSelection.toLowerCase() === 'rock') || (computerSelection === 'paper' && playerSelection.toLowerCase() === 'paper') || (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'scissors')) {
        resultArea.textContent = `Draw! ${playerSelection} draws to ${computerSelection}` + '' + ` Your score is: ${playerScore}. Computer score is: ${computerScore}.`
    } 
} 

function game() {

console.log(playRound())
if (playerScore > computerScore) {
    return 'You are the winner!'
} else if (computerScore > playerScore) {
    return 'The computer is the winner!'
} else {
    return 'No winner!'
}
}

