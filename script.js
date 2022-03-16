import allTriviaQuestions from './trivia-questions.js';

const questionCountSpan = document.querySelector('#question-count');
const currentScoreSpan = document.querySelector('#current-score');
const currentQuestion = document.querySelector('#current-question');
const answersContainer = document.querySelector('.answers-container');

const GAME_QUESTION_COUNT = 10;
const PAUSE_TIME_IN_MS = 500;
let triviaQuestions = [...allTriviaQuestions];
let score = 0;
let questionsCount = 0;

getNextTriviaQuestion();

function getNextTriviaQuestion() {
	if(questionsCount >= GAME_QUESTION_COUNT || triviaQuestions.length == 0) {
		gameOver();
		return;
	}
	const index = Math.floor(Math.random() * triviaQuestions.length);
	const triviaQuestion = triviaQuestions[index];
	triviaQuestions.splice(index, 1);
	displayQuestion(triviaQuestion);
}

function displayQuestion(triviaQuestion) {
	currentQuestion.textContent = triviaQuestion.question;
	answersContainer.innerHTML = '';
	triviaQuestion.answers.sort(() => Math.random() - 0.5);
	triviaQuestion.answers.forEach(answer => {
		const button = document.createElement('button');
		button.textContent = answer.text;
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
		answersContainer.appendChild(button);
	});
}
function selectAnswer(e) {
	questionCountSpan.innerText = (++questionsCount).toString();
	if (e.target.dataset.correct) {
		e.target.classList.add('correct');
		currentScoreSpan.innerText = (++score).toString();
	} else {
		e.target.classList.add('incorrect');
	}
	answersContainer.querySelectorAll('button').forEach(button => {
		button.disabled = true;
	});

	setTimeout(getNextTriviaQuestion, PAUSE_TIME_IN_MS);
}

function gameOver() {
	let msg = `GAME OVER!\nYou scored ${score} out of ${GAME_QUESTION_COUNT}.`;
	currentQuestion.innerText = msg;
	answersContainer.innerHTML = '';
	const button = document.createElement('button');
	button.textContent = 'Play Again';
	button.addEventListener('click', resetGame);
	button.classList.add('reset-button');
	answersContainer.appendChild(button);
}

function resetGame() {
	triviaQuestions = [...allTriviaQuestions];
	score = 0;
	questionsCount = 0;
	questionCountSpan.innerText = '0';
	currentScoreSpan.innerText = '0';
	getNextTriviaQuestion();
}