///////////// Constant Variables \\\\\\\\\\\\\\\\\
const playButton = document.querySelector('.play-parent');
const currentScore = document.getElementById('score')

const quit = document.getElementById('quit');
const direction = document.getElementById('rules');
const theRules= document.querySelector('.directions')
const closeRules= document.querySelector('.close-rules')
const htmlQuestion = document.getElementById('question')
const htmlAnswer = document.getElementById('answer')
const questions = [
	first ={
		question: "What is the name of Superman's alter ego? ",
		choices: ['Clark Kent', 'Kal-el', 'Conner Kent', 'Jon Kent'],
		// answer: this.choices[0]
	}
	// {
	// 	question: "What is the name of Thor's alter ego?",
	// 	choices: [
	// 		'Donald Blake',
	// 		'Uhtred Ragnarson',
	// 		'Olaf of Freljord',
	// 		'Thor Laufeyson',
	// 	],
	// },
	// {
	// 	question: 'The quater Anodite grandson of Maxwell Tennyson',
	// 	answer: ['Kevin Levin', 'Ben Tennyson', 'Clyde Fyfe', 'Flash Gordon'],
	// },
	// {
	// question:''
	// answer:''
	// },
	// 5{
	// question:''
	// answer:''
	// },
	// 6:{
	// question:''
	// answer:''
	// },
	// 7:{
	// question:''
	// answer:''
	// },
	// 8:{
	// question:''
	// answer:''
	// },
	// 9:{
	// question:''
	// answer:''
	// },
	// 10:{
	// question:''
	// answer:''
	// },
];
/////////       State Variables        \\\\\\\\\
let score = 0;
// let questionsNum=0
// overall number left
let questionsLeft = 10;
let titleDisplay = document.querySelector('.head');

///////////////     Functions     \\\\\\\\\\\\\\\\\\\
function startGame(event) {
	event.preventDefault();
	playButton.style.display = 'none';
	titleDisplay.style.display = 'none';
	quit.style.display = 'inline'
    questionCycle(question)
}

function increaseScore() {
	score++;
    currentScore.innerText = `Score:${score}`
    if(score === 10 ){
        currentScore.innerText = 'Score:Max'
    }
}
// console.log(questions[0].question)
function questionCycle(){
    questions.forEach(question => {
        htmlQuestion.innerText = questions[0].question;
    });

    let choice =document.createElement('li')
    htmlAnswer.append(choice)
    questions.forEach(choices => {
        choice.append(questions[0].choices)
    });
    // console.log(questions['question'])
    // htmlQuestion.innerText = questions[0].question
    // htmlAnswer.innerText = questions[0].choices
    // let choice document.createElement('button')
    // choices.append
    // question.forEach(element => {
        
    // });

}

// function quit{

// }

// function showCorrectAnswer{}

function showDirections() {
	theRules.style.display= 'inline'
}

function closeDirections(){
    theRules.style.display = 'none'
}

///////////////     event listeners     \\\\\\\\\\\\\\\\\

// Directions.addEvent Listener
// Music
// Quit
// Play
playButton.addEventListener('click',startGame);

quit;

direction.addEventListener('click', showDirections);

closeRules.addEventListener('click', closeDirections)


// Submit
