// Function to randomly select a choice for the computer from an array of choices
function getComputerChoice() {
    const choices = ['hajara', 'wara9a', 'mi9ass'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Log the computer's choice to the console
console.log(getComputerChoice());

// Function to play a single round of the game
function playRound(playerSelection, computerSelection) {
    // Convert the player's selection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase(); 
    
    // Check for different game outcomes
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'hajara' && computerSelection === 'mi9ass') ||
        (playerSelection === 'mi9ass' && computerSelection === 'wara9a') ||
        (playerSelection === 'wara9a' && computerSelection === 'hajara')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Log the result of a single round to the console
console.log(playRound('hajara', getComputerChoice()));

// Function to play the game
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    // Play 5 rounds of the game
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter your choice (hajara, wara9a, or mi9ass):");
        const computerChoice = getComputerChoice();
        
        // Log the result of each round to the console
        console.log(playRound(playerChoice, computerChoice));
        
        // Update scores based on the result of the round (not implemented in this code)
        // You can add logic to track and display the scores here
    }
}

// Start the game
game();
