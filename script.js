let currentNumber = Math.floor(Math.random() * 100) + 1;
let score = 0;

// Display the initial number but hide game container until game starts
document.getElementById('current-number').innerText = currentNumber;
document.querySelector('.container').style.display = 'none'; // Hide the game container initially

// Function to start the game by hiding the rules modal
function startGame() {
    document.getElementById('rules-modal').style.display = 'none';
    document.querySelector('.container').style.display = 'block'; // Show the game container
}

// Function to handle guesses
function guess(choice) {
    const nextNumber = Math.floor(Math.random() * 100) + 1;
    let message = '';

    if (
        (choice === 'higher' && nextNumber > currentNumber) ||
        (choice === 'lower' && nextNumber < currentNumber)
    ) {
        score++;
        message = `Correct! The next number was ${nextNumber}.`;
    } else {
        score--;
        message = `Wrong! The next number was ${nextNumber}.`;
    }

    currentNumber = nextNumber;
    document.getElementById('current-number').innerText = currentNumber;
    document.getElementById('score').innerText = score;
    document.getElementById('message').innerText = message;
}
