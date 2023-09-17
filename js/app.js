function handleFirstTab(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
};

window.addEventListener('keydown', handleFirstTab);

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('score');
const possibleChoices = document.querySelectorAll('.btn');
let userChoice;
let computerChoice;
let result;
let textColor;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.setAttribute('src', `../img/${userChoice}.svg`);
  userChoiceDisplay.setAttribute('alt', userChoice);
  generateComputerChoice();
  getResult();
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  
  if (randomNumber === 2) {
    computerChoice = 'paper';
  }

  if (randomNumber === 3) {
    computerChoice = 'scissors';
  }
  
  computerChoiceDisplay.setAttribute('src', `../img/${computerChoice}.svg`);
  computerChoiceDisplay.setAttribute('alt', computerChoice);
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!';
    textColor = '#FBFF12';
  }

  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'you win!';
    textColor = '#41EAD4';
  }

  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'you lose!';
    textColor = '#FF206E';
  }

  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'you win!';
    textColor = '#41EAD4';
  }

  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'you lose!';
    textColor = '#FF206E';
  }

  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'you win!';
    textColor = '#41EAD4';
  }

  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'you lose!';
    textColor = '#FF206E';
  }

  resultDisplay.textContent = result;
  resultDisplay.style.color = textColor;
}