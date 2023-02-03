let btns = document.querySelectorAll('.btn')
let pScore = document.querySelector('#user_score')
let bScore = document.querySelector('#bot_score')
let resultArea = document.querySelector('#result')
let playerImg = document.querySelector('#player_img')
let botImg = document.querySelector('#bot_img')
let roundNum = document.querySelector('#round')
let count = 0

let playAgainBtn = document.querySelector('.play_again')

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
        playerImg.src = `./images/${playerSelection}.png`
        botImg.src = `./images/${computerSelection}bot.png`
        pScore.textContent = `${playerScore += 1}`
        bScore.textContent = `${computerScore}`
        resultArea.textContent = 'You won the round!'
        count++
        roundNum.textContent = `Round ${count} of 12`
    } else if ((computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors') || (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock') || (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper')) {
        playerImg.src = `./images/${playerSelection}.png`
        botImg.src = `./images/${computerSelection}bot.png`
        pScore.textContent = `${playerScore}`
        bScore.textContent = `${computerScore += 1}`
        resultArea.textContent = 'Computer won the round!'
        count++
        roundNum.textContent = `Round ${count} of 12`
    } else if ((computerSelection === 'rock' && playerSelection.toLowerCase() === 'rock') || (computerSelection === 'paper' && playerSelection.toLowerCase() === 'paper') || (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'scissors')) {
        playerImg.src = `./images/${playerSelection}.png`
        botImg.src = `./images/${computerSelection}bot.png`
        pScore.textContent = `${playerScore}`
        bScore.textContent = `${computerScore}`
        resultArea.textContent = 'Round is a draw!'
        count++
        roundNum.textContent = `Round ${count} of 12`
    }
    
    if (count === 11) {
        resultArea.textContent = 'Last Round!'
    } else if (count === 12) {
        endGame()
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

function endGame() {
    btns.forEach(btn => {
        btn.classList.add('remove')
    })
    playAgainBtn.classList.remove('remove')
    playAgainBtn.classList.add('btn-container')
    playAgainBtn.classList.add('play')

    if (playerScore > computerScore) {
        resultArea.textContent = 'You are the winner!'
    } else if (computerScore > playerScore) {
        resultArea.textContent = 'The computer is the winner!'
    } else {
        resultArea.textContent = 'No winner!'
    }

    playAgainBtn.addEventListener('click', restart)
}

function restart() {
    window.location.reload()
}