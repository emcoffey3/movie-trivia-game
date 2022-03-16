import allTriviaQuestions from './trivia-questions.js';

const questionCountSpan = document.querySelector('#question-count');
const currentScoreSpan = document.querySelector('#current-score');
const timerSpan = document.querySelector('#timer');
const currentQuestion = document.querySelector('#current-question');
const answersContainer = document.querySelector('.answers-container');

const GAME_QUESTION_COUNT = 10;
const WAIT_TIME_IN_MS = 500;
const TIME_TO_ANSWER_IN_SECONDS = 15;
const POINT_DURATION = 5;
const MAXIMUM_SCORE = GAME_QUESTION_COUNT * (TIME_TO_ANSWER_IN_SECONDS / POINT_DURATION);

let triviaQuestions, score, questionsCount, timer, timerInterval;

startGame();

function startGame() {
	triviaQuestions = [...allTriviaQuestions];
	score = 0;
	questionsCount = 0;
	questionCountSpan.innerText = '0';
	currentScoreSpan.innerText = '0';
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
	}

	answersContainer.querySelectorAll('button').forEach(button => {
		button.disabled = true;
	});

	setTimeout(getNextTriviaQuestion, WAIT_TIME_IN_MS);
}

function gameOver() {
	let msg = `GAME OVER!\nYou scored ${score} out of a possible ${MAXIMUM_SCORE} points!`;
	if (score == MAXIMUM_SCORE) {
		msg += '\nCongratulations!!!';
	} else {
		msg += '\nAnswer faster for even more points!';
	}
	currentQuestion.innerText = msg;
	answersContainer.innerHTML = '';
	timerSpan.innerText = '0';

	const button = document.createElement('button');
	button.textContent = 'Play Again';
	button.addEventListener('click', startGame);
	button.classList.add('reset-button');
	answersContainer.appendChild(button);
}
