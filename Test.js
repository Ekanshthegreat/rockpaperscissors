function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    let result;
    if (choice === 0) {
        result = 'rock';
    } else if (choice === 1) {
        result = 'paper';
    } else if (choice === 2) {
        result = 'scissor';
    }
    console.log('Computer choice:', result); // To show the computer's choice
    return result;
}

function getHumanChoice() {
    const choice = prompt("Rock, paper, or scissor?");
    console.log('Human choice:', choice); // To show the human's choice
    return choice.toLowerCase(); // Convert to lowercase to handle case insensitivity
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissor' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissor' && computerChoice === 'paper') {
        return 'human';
    } else if (humanChoice === computerChoice) {
        return 'tie';
    } else {
        return 'computer';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);

        if (roundResult === 'human') {
            humanScore++;
            console.log('Human wins this round!');
        } else if (roundResult === 'computer') {
            computerScore++;
            console.log('Computer wins this round!');
        } else {
            console.log('This round is a tie!');
        }

        console.log(`Scores after round ${i + 1}: Human - ${humanScore}, Computer - ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log('Human is the overall winner!');
    } else if (humanScore < computerScore) {
        console.log('Computer is the overall winner!');
    } else {
        console.log('The game is a tie!');
    }
}

// Start the game
playGame();
