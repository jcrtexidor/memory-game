const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

const generateComputerChoice = () => {
    const randomIndex = Math.trunc(Math.random() * possibleChoices.length);
    computerChoice = possibleChoices[randomIndex].id;
    computerChoiceDisplay.innerHTML = computerChoice;
}

const getResult = () => {
    switch (true) {
        case computerChoice === userChoice:
            result = `It's a draw!`
            break;
        case computerChoice === 'rock' && userChoice === 'scissors':
        case computerChoice === 'paper' && userChoice === 'rock':
        case computerChoice === 'scissors' && userChoice === 'paper':
            result = `Computer wins!`;
            break;
        default:
            result = `User wins!`;
    }
    resultDisplay.innerHTML = result;
}

possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
    });
})