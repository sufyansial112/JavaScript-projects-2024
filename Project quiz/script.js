const questions = [
    {
        question: "Which is largest animal in the world",
        answer: [
            {text: 'Shark', correct: false},
            {text: 'Blue whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false},

        ]
    },
    {
        question: "Which is smallest Country in the world",
        answer: [
            {text: 'Vatican city', correct: true},
            {text: 'Bhutan', correct: false},
            {text: 'Nepal', correct: false},
            {text: 'Sri lanka', correct: false},
        ]
    },
    {
        question: "Which is largest desert in the world",
        answer: [
            {text: 'Kalahari', correct: false},
            {text: 'Gobi', correct:false},
            {text: 'Sahara', correct: false},
            {text: 'Antartica', correct: true},
        ]
    },
    {
        question: "Which is the samllest continent in the world",
        answer: [
            {text: 'Asia', correct: false},
            {text: 'Australia', correct: true},
            {text: 'Arctic', correct: false},
            {text: 'Africa', correct: false},
        ]
    }
];


const questionElement = document.querySelector('.questions');
const answerButton = document.querySelector('.answer-buttons');
const nextButton = document.querySelector('.next-btn');
const questionH2 = document.querySelector('.question')


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML = "Next"
    showQuiz();
}

function showQuiz(){
     let currentQuestion = questions[currentQuestionIndex];
     console.log(currentQuestion);
     let questionNo = currentQuestionIndex + 1;

     questionH2.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach((ans)=>{
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = ans.text;
        answerButton.appendChild(button)
    })

}
startQuiz();