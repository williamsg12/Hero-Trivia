///////////// Constant Variables \\\\\\\\\\\\\\\\\
const playButton = document.querySelector('.play-parent');
const currentScore = document.getElementById('score');
const quit = document.getElementById('quit');
const direction = document.getElementById('rules');
const theRules = document.querySelector('.directions');
const closeRules = document.querySelector('.close-rules');
const htmlQuestion = document.getElementById('question');
const htmlAnswer = document.getElementById('answer');
const questions = [
	{
		question: "What is the name of Superman's alter ego? ",
		choices: ['Clark Kent', 'Kal-el', 'Conner Kent', 'Jon Kent'],
		answer: 'Clark Kent',
	},
	{
		question: "What is the name of Thor's alter ego?",
		choices: [
			'Donald Blake',
			'Uhtred Ragnarson',
			'Olaf of Freljord',
			'Thor Laufeyson',
		],
		answer: 'Donald Blake',
	},
	{
		question: 'The quarter Anodite grandson of Maxwell Tennyson',
		choices: ['Kevin Levin', 'Ben Tennyson', 'Clyde Fyfe', 'Flash Gordon'],
		answer: 'Ben Tennyson',
	},
	{
		question: 'The name of the sword weilded by Eragon is ?',
		choices: ['Riptide', 'Inheretence', 'Brisingr', 'Murtagh'],
		answer: 'Brisingr',
	},
	{
		question: "Thor's hammer is named?",
		choices: ['Stormbreaker', 'Mjolnir', 'Laevatinn', 'Chidori'],
		answer: 'Mjolnir',
	},
	{
		question: "Superman's hometown of smallville is located in what state?",
		choices: ['Illinois', 'Ohio', 'Kansas', 'Wyoming'],
		answer: 'Kansas',
	},
	{
		question: 'The main character of the My hero Academia is  ?',
		choices: [
			'Peter Parker',
			'Toshinori Yagi',
			'Izuku Midoriya',
			'Light Yagami',
		],
		answer: 'Izuku Midoriya',
	},
	{
		question: 'Who is the only one that is not a Hero?',
		choices: ['Hal Jordan', 'Carol Danvers', 'Billy Batson', 'Jonathan Crane'],
		answer: 'Jonathan Crane',
	},
	{
		question: 'Who was a sidekick to Batman?',
		choices: [
			'Cassandra Sandsmark',
			'Wally West',
			'Victor Stone',
			'Duke Thomas',
		],
		answer: 'Duke Thomas',
	},
	{
		question: 'Who is  a Hero?',
		choices: ['Wayton Jones', 'Cyrus Gold', 'David Hyde', 'Jaime Reyes'],
		answer: 'Jaime Reyes',
	},
];
/////////       State Variables        \\\\\\\\\
let score = 0;
let activeIndex = 0;
let currentQuestion = {};
let titleDisplay = document.querySelector('.head');
let yourAnswer = '';
///////////////     Functions     \\\\\\\\\\\\\\\\\\\

function startGame(event) {
	event.preventDefault();
	playButton.style.display = 'none';
	titleDisplay.style.display = 'none';
	quit.style.display = 'inline';
	questionCycle();
}

function increaseScore() {
	score++;
	activeIndex++;
	htmlAnswer.innerHTML = '';
	questionCycle();
	currentScore.innerText = `Score:${score}`;
}

function questionCycle() {
	if (activeIndex < questions.length) {
		htmlQuestion.innerText = questions[activeIndex].question;
		questions[activeIndex].choices.forEach((choice) => {
			let li = document.createElement('button');
			li.innerText = choice;

			li.addEventListener('click', (event) => {
				if (event.target.innerText === questions[activeIndex].answer) {
					increaseScore();
					alert('Correct');
				} else if (event.target.innerText != questions[activeIndex].answer) {
					alert('Incorrect');
					passQuestion();
					if (activeIndex === 10) {
						quit();
					}
				}
			});
			htmlAnswer.append(li);
		});
		function passQuestion() {
			activeIndex++;
			htmlAnswer.innerHTML = '';
			questionCycle();
		}
	} else if ((activeindex = questions.length)) {
		quit();
	}
}
function reset() {
	score = 0;
	activeIndex = 0;
	htmlAnswer.innerHTML = '';
	htmlAnswer.removeChild();
	playButton.style.display = 'flex';
}

function quitting() {
	let imQuitting = prompt('Are You Sure');
	if (imQuitting == 'Yes') {
		alert('Game Over');
		score = 0;
		currentScore.innerText = `Score:${score}`;
		activeIndex = 0;
		titleDisplay.style.display = 'flex';
		playButton.style.display = 'flex';
		htmlAnswer.innerHTML = '';
		htmlQuestion.innerText = '';
	}
}

// function showCorrectAnswer{}

function showDirections() {
	theRules.style.display = 'inline';
}

function closeDirections() {
	theRules.style.display = 'none';
}

///////////////     event listeners     \\\\\\\\\\\\\\\\\
// Music

playButton.addEventListener('click', startGame);

quit.addEventListener('click', quitting);

direction.addEventListener('click', showDirections);

closeRules.addEventListener('click', closeDirections);
