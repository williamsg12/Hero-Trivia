///////////// Constant Variables \\\\\\\\\\\\\\\\\
const playButton = document.querySelector('.play-parent')


const quit =null;
const direction = document.querySelector('.direction')

const questions =[
    {
    question:"What is the name of Superman's alter ego? ",
    choices:['Clark Kent','Kal-el','Conner Kent','Jon Kent'],
    // answer: this.choices[0]
    },
    {
    question:"What is the name of Thor's alter ego?",
    choices:['Donald Blake','Uhtred Ragnarson','Olaf of Freljord','Thor Laufeyson']
    },
    // 3:{
    // question:''
    // answer:''
    // },
    // 4:{
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

]
/////////       State Variables        \\\\\\\\\
// score
let score =0
// questions number
// let questionsNum=0
// music
// overall number left
let questionsLeft = 10
// quit
// play
// direction
let titleDisplay = document.querySelector('.head')

///////////////     Functions     \\\\\\\\\\\\\\\\\\\
function startGame(event){
    event.preventDefault()
    playButton.style.display='none'
    titleDisplay.style.display='none'
    
}

// function answer{}

function increaseScore(){
    return score ++
}

function compareAnswer(answer){
    if (answer === questions[1]) {
        increaseScore()
        questionDisplay.innerText= questions[1].question
    } else {
        
    }
}

// function quit{
    
// }
function showDirections(event){
    event.preventDefault()
    direction.style.display.toggle()
}
// function showCorrectAnswer{}

///////////////     event listeners     \\\\\\\\\\\\\\\\\

// Directions.addEvent Listener
// Music
// Quit
// Play
playButton.addEventListener('click',startGame)

quit

direction.addEventListener('click',showDirections)
// Submit
