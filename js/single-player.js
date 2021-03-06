import generalQuestions from './trivia-questions.js';
import imageQuestions from './image-questions.js';

const allTriviaQuestions = [...generalQuestions, ...imageQuestions];
allTriviaQuestions.sort(() => Math.random() - 0.5);

const scoreContainer = document.querySelector('.score-container');
const questionCountSpan = document.querySelector('#question-count');
const highScoreSpan = document.querySelector('#high-score');
const currentScoreSpan = document.querySelector('#current-score');
const timerSpan = document.querySelector('#timer');
const currentQuestion = document.querySelector('#current-question');
const answersContainer = document.querySelector('.answers-container');

const GAME_QUESTION_COUNT = 10;
const WAIT_TIME_IN_MS_CORRECT = 750;
const WAIT_TIME_IN_MS_INCORRECT = 1000;
const TIME_TO_ANSWER_IN_SECONDS = 15;
const POINT_DURATION = 5;
const MAXIMUM_SCORE = GAME_QUESTION_COUNT * (TIME_TO_ANSWER_IN_SECONDS / POINT_DURATION);

let score, questionsCount, timer, timerInterval;
let triviaQuestions = [...allTriviaQuestions];

startGame();

function startGame() {
	if (triviaQuestions.length < GAME_QUESTION_COUNT) {
		triviaQuestions = [...allTriviaQuestions];
	}
	score = 0;
	questionsCount = 0;

	highScoreSpan.innerText = getHighScore();
	currentScoreSpan.innerText = '0';
	questionCountSpan.innerText = '0';
	scoreContainer.classList.remove('hidden');

	getNextTriviaQuestion();
}

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
	questionCountSpan.innerText = (++questionsCount).toString();
	currentQuestion.innerHTML = triviaQuestion.question;
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

	timer = TIME_TO_ANSWER_IN_SECONDS;
	timerSpan.innerText = timer.toString();
	timerInterval = setInterval(() => {
		timerSpan.innerText = (--timer).toString();
		if(timer == 0) {
			clearInterval(timerInterval);
			questionCountSpan.innerText = (++questionsCount).toString();
			getNextTriviaQuestion();
		}
	}, 1000);
}

function selectAnswer(e) {
	clearInterval(timerInterval);

	if (e.target.dataset.correct) {
		e.target.classList.add('correct');
		score += Math.ceil(timer / POINT_DURATION);
		currentScoreSpan.innerText = score.toString();
	} else {
		e.target.classList.add('incorrect');
		answersContainer.querySelectorAll('button[data-correct=true]').forEach(button => {
			button.classList.add('correct');
		});
	}

	answersContainer.querySelectorAll('button').forEach(button => {
		button.disabled = true;
	});

	setTimeout(
		getNextTriviaQuestion,
		(e.target.dataset.correct ? WAIT_TIME_IN_MS_CORRECT : WAIT_TIME_IN_MS_INCORRECT)
	);
}

function gameOver() {
	let msg = `<img class="game-over" alt="Game Over, Man!" src="../img/aliens-game-over.jpg">You scored ${score} out of a possible ${MAXIMUM_SCORE} points!`;
	if(setHighScore(score)) {
		msg += " That's a new high score!";
	}
	if (score == MAXIMUM_SCORE) {
		msg += '\nCongratulations!!!';
	} else {
		msg += '\nAnswer faster for even more points!';
	}
	scoreContainer.classList.add('hidden');
	currentQuestion.innerHTML = msg;
	answersContainer.innerHTML = '';
	timerSpan.innerText = '0';

	const button = document.createElement('button');
	button.textContent = 'Play Again';
	button.addEventListener('click', startGame);
	button.classList.add('wide-button');
	answersContainer.appendChild(button);
}

function setHighScore(score) {
	if(score > getHighScore()) {
		localStorage.setItem('high-score', score);
		highScoreSpan.innerText = score.toString();
		return true;
	}
	return false;
}

function getHighScore() {
	return localStorage.getItem('high-score') ?? 0;
}