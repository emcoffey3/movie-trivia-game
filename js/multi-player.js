import generalQuestions from './trivia-questions.js';
import imageQuestions from './image-questions.js';

const allTriviaQuestions = [...generalQuestions, ...imageQuestions];
allTriviaQuestions.sort(() => Math.random() - 0.5);

const gameSetupContainer = document.querySelector('.game-setup-container');
const gameSetupForm = document.querySelector('#game-setup');
const playerCountInput = document.querySelector('#player-count');
const roundCountInput = document.querySelector('#round-count');
const startGameButton = document.querySelector('#start-game');

const playerScoresContainer = document.querySelector('.player-scores-container');
const playerScoresTableBody = document.querySelector('#player-scores');

const currentQuestion = document.querySelector('#current-question');
const answersContainer = document.querySelector('.answers-container');

const WAIT_TIME_IN_MS = 1500;

let triviaQuestions = [...allTriviaQuestions];
let playerCount = parseInt(playerCountInput.value);
let numberOfRounds, players, currentPlayer, currentRound, fiftyFiftyUsed;

playerCountInput.addEventListener('change', () => {
	const oldPlayerCount = playerCount;
	playerCount = parseInt(playerCountInput.value);

	if (playerCount < oldPlayerCount) {
		for(let i = oldPlayerCount; i > playerCount; i--) {
			const playerNameElement = document.querySelector(`#player-${i}`);
			playerNameElement.parentElement.remove();
		}
	} else if (playerCount > oldPlayerCount) {
		for(let i = oldPlayerCount + 1; i <= playerCount; i++) {
			const labelElement = document.createElement('label');
			labelElement.setAttribute('for', `player-${i}`);
			labelElement.innerText = `Player #${i}:`;

			const playerNameElement = document.createElement('input');
			playerNameElement.type = 'text';
			playerNameElement.id = `player-${i}`;
			playerNameElement.placeholder = `Player ${i} Name`;
			playerNameElement.autocomplete = 'off';
			playerNameElement.required = true;

			const inputGroupElement = document.createElement('div');
			inputGroupElement.classList.add('input-group');
			inputGroupElement.appendChild(labelElement);
			inputGroupElement.appendChild(playerNameElement);

			gameSetupForm.insertBefore(inputGroupElement, startGameButton);
		}
	}
});

gameSetupForm.addEventListener('submit', e => {
	e.preventDefault();
	gameSetup();
	startGame();
});

function resetGame() {
	players = [];
	gameSetupContainer.classList.remove('hidden');
	playerScoresContainer.classList.add('hidden');
	currentQuestion.innerText = '';
	answersContainer.innerHTML = '';
}

function gameSetup() {
	numberOfRounds = parseInt(roundCountInput.value);
	playerCount = parseInt(playerCountInput.value);

	if (triviaQuestions.length < (playerCount * numberOfRounds)) {
		triviaQuestions = [...allTriviaQuestions];
	}

	players = [];

	for (let i = 0; i < playerCount; i++) {
		players.push({
			name: document.querySelector(`#player-${i+1}`).value,
			correctAnswers: 0,
			incorrectAnswers: 0,
			score: 0
		});
	}

	gameSetupContainer.classList.add('hidden');
	playerScoresContainer.classList.remove('hidden');
	displayScores();
}

function displayScores(currentPlayerIndex) {
	playerScoresTableBody.innerHTML = '';
	players.forEach((player, idx) => {
		const row = document.createElement('tr');
		if (currentPlayerIndex == idx) {
			row.classList.add('current-player');
		}
		row.innerHTML = `
			<td>${idx + 1}</td>
			<td>${player.name}</td>
			<td>${player.correctAnswers}</td>
			<td>${player.incorrectAnswers}</td>
			<td>${player.score}</td>
		`;
		playerScoresTableBody.appendChild(row);
	});
}

function startGame() {
	currentRound = 0;
	currentPlayer = 0;
	getNextTriviaQuestion();
}

function getNextTriviaQuestion() {
	displayScores(currentPlayer);
	fiftyFiftyUsed = false;

	if (triviaQuestions.length == 0) {
		triviaQuestions = [...allTriviaQuestions];
	}

	const index = Math.floor(Math.random() * triviaQuestions.length);
	const triviaQuestion = triviaQuestions[index];
	triviaQuestions.splice(index, 1);
	displayQuestion(triviaQuestion);
}

function displayQuestion(triviaQuestion) {
	currentQuestion.innerHTML = triviaQuestion.question;
	answersContainer.innerHTML = '';

	triviaQuestion.answers.sort(() => Math.random() - 0.5);
	triviaQuestion.answers.forEach(answer => {
		const button = document.createElement('button');
		button.textContent = answer.text;
		button.classList.add('answer-button');
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
		answersContainer.appendChild(button);
	});

	const fiftyFiftyButton = document.createElement('button');
	fiftyFiftyButton.textContent = '50/50';
	fiftyFiftyButton.classList.add('fifty-fifty');
	fiftyFiftyButton.addEventListener('click', useFiftyFifty);
	answersContainer.appendChild(fiftyFiftyButton);

	const skipButton = document.createElement('button');
	skipButton.textContent = 'Skip Question';
	skipButton.classList.add('skip');
	skipButton.addEventListener('click', getNextTriviaQuestion);
	answersContainer.appendChild(skipButton);
}

function useFiftyFifty() {
	fiftyFiftyUsed = true;

	const fiftyFiftyButton = document.querySelector('.fifty-fifty');
	fiftyFiftyButton.disabled = true;
	fiftyFiftyButton.classList.add('not-available');

	const incorrectAnswers = answersContainer.querySelectorAll('.answer-button:not([data-correct=true])');
	const keep = Math.floor(Math.random() * incorrectAnswers.length);
	for (let i = 0; i < incorrectAnswers.length; i++) {
		if (i == keep) continue;
		incorrectAnswers[i].disabled = true;
		incorrectAnswers[i].classList.add('not-available');
	}
}

function selectAnswer(e) {
	if (e.target.dataset.correct) {
		e.target.classList.add('correct');
		players[currentPlayer].correctAnswers++;
		players[currentPlayer].score += (fiftyFiftyUsed ? 1 : 2);
	} else {
		e.target.classList.add('incorrect');
		answersContainer.querySelectorAll('button[data-correct=true]').forEach(button => {
			button.classList.add('correct');
		});
		players[currentPlayer].incorrectAnswers++
		players[currentPlayer].score += (fiftyFiftyUsed ? -1 : 0);
	}

	answersContainer.querySelectorAll('button').forEach(button => {
		button.disabled = true;
	});

	getNextPlayer();
}

function getNextPlayer() {
	currentPlayer = (currentPlayer + 1) % players.length;
	if (currentPlayer == 0) {
		currentRound++;
	}
	if (currentRound >= numberOfRounds) {
		setTimeout(gameOver, WAIT_TIME_IN_MS);
		return;
	}
	setTimeout(getNextTriviaQuestion, WAIT_TIME_IN_MS);
}

function gameOver() {
	displayScores();
	players.sort((a,b) => b.score - a.score);

	let msg = `<div>GAME OVER!</div> <div>Final Scores:\n<ol>`;
	players.forEach(player => {
		msg += `<li>${player.name} (${player.score} points)</li>`;
	});
	msg += `</ol></div>`;
	currentQuestion.innerHTML = msg;
	answersContainer.innerHTML = '';

	const button = document.createElement('button');
	button.textContent = 'Play Again';
	button.addEventListener('click', resetGame);
	button.classList.add('wide-button');
	answersContainer.appendChild(button);
}