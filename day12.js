function getComputerChoice() {
    const choices = ['hajara', 'wara9a', 'mi9ass'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); 
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'hajara' && computerSelection === 'mi9ass')  ||
        (playerSelection === 'mi9ass' && computerSelection === 'wara9a')  ||
        (playerSelection === 'wara9a' && computerSelection === 'hajara') 
    ) {
        return `You win! ${playerSelection} wins ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} wins ${playerSelection}`;
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter your choice (hajara, wara9a, or mi9ass):");
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        console.log(result);
    }
}

game();



