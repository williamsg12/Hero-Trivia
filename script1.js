///////////// Constant Variables \\\\\\\\\\\\\\\\\
const playButton = document.querySelector('.play-parent');
const currentScore = document.getElementById('score');

const quit = document.getElementById('quit');
const direction = document.getElementById('rules');
const theRules = document.querySelector('.directions');
const closeRules = document.querySelector('.close-rules');
const htmlQuestion = document.getElementById('question');
const htmlAnswer = document.getElementById('answer')
const questions = [
	(first = {
		question: "What is the name of Superman's alter ego? ",
		choices: ['Clark Kent', 'Kal-el', 'Conner Kent', 'Jon Kent'],
		answer: 1
	}),
	{
		question: "What is the name of Thor's alter ego?",
		choices: [
			'Donald Blake',
			'Uhtred Ragnarson',
			'Olaf of Freljord',
			'Thor Laufeyson',
		],
	},
	{
		question: 'The quater Anodite grandson of Maxwell Tennyson',
		choices: ['Kevin Levin', 'Ben Tennyson', 'Clyde Fyfe', 'Flash Gordon'],
	},
	{
		question: 'The name of the sword weilded by Eragon is ?',
		choices: ['Riptide', 'Inheretence', 'Brisingr', 'Murtagh'],
	},
	{
		question: "Thor's hammer is named?",
		choices: ['Stormbreaker', 'Mjolnir', 'Laevatinn', 'Chidori'],
	},
	{
		question: "Superman's hometown of smallville is located in what state?",
		choices: ['Illinois', 'Ohio', 'Kansas', 'Wyoming'],
	},
	{
		question: 'The main character of the My hero Academia is  ?',
		choices: [
			'Peter Parker',
			'Toshinori Yagi',
			'Izuku Midoriya',
			'Light Yagami',
		],
	},
	{
		question: 'Who is the only one that is not a Hero?',
		choices: ['Hal Jordan', 'Carol Danvers', 'Billy Batson', 'Jonathan Crane'],
	},
	{
		question: 'Who was a sidekick to Batman?',
		choices: [
			'Cassandra Sandsmark',
			'Wally West',
			'Victor Stone',
			'Duke Thomas',
		],
	},
	{
		question: 'Who is  a Hero?',
		choices: [''],
	},
];
/////////       State Variables        \\\\\\\\\
let score = 0;
// let questionsNum=0
// overall number left
let questionsLeft = 10;
let titleDisplay = document.querySelector('.head');
let yourAnswer = ''
///////////////     Functions     \\\\\\\\\\\\\\\\\\\
function startGame(event) {
	event.preventDefault();
	playButton.style.display = 'none';
	titleDisplay.style.display = 'none';
	quit.style.display = 'inline';
	questionCycle(question);
    answerQuestion()
}

function increaseScore() {
	score++;
	currentScore.innerText = `Score:${score}`;
	if (score === 10) {
		currentScore.innerText = 'Score:Max';
	}
}
// console.log(questions[0].question)
function questionCycle() {
	for (let question = 0; question < questions.length; question++) {
        for (let choice = 0; choice < questions.length; choice++) {
            htmlAnswer.innerText=questions[0].choices
            
        }
        htmlQuestion.innerText= questions[0].question
    }   

          // questions.forEach((question) => {
	// 	htmlQuestion.innerText = questions[0].question;
	// });

	// let choice = document.createElement('li');
	// htmlAnswer.append(choice);
	// questions.forEach((choices) => {
	// 	choice.append(questions[0].choices);
	// });
	// console.log(questions['question'])
	// htmlQuestion.innerText = questions[0].question
	// htmlAnswer.innerText = questions[0].choices
	// let choice document.createElement('button')
	// choices.append
	// question.forEach(element => {

	// });


}
function reset(){
    score =0
    questionsLeft =10
    playButton.style.display='flex'
    htmlAnswer.innerText=
    htmlQuestion.innerText=''
    
}

function answerQuestion(){
    yourAnswer= prompt()
    if (yourAnswer=== questions[0].choices[0]) {
        console.log(`Your Right!!!!!!`)
        increaseScore()
    }
    else{
        console.log('Incorrect')
    }
}
function quitting() {
	let imQuitting = prompt('Are You Sure');
	if (imQuitting == 'Yes') {
		score = 0;
		questionsLeft = 10;
		playButton.style.display = 'flex';

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

// Directions.addEvent Listener
// Music
// Quit
// Play
playButton.addEventListener('click', startGame);

quit.addEventListener('click', quitting);

direction.addEventListener('click', showDirections);

closeRules.addEventListener('click', closeDirections);

// Submit
