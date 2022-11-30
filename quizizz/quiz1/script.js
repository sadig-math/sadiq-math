const quizData = [
    {
        question: "What is the average rate of change of f(x) on the interval [-3, -2]",
        a: "-1/2",
        b: "-2",
        c: "1/3",
        d: "2",
        correct: "d",
    },
    {
        question: "what is instantaneous velocity",
        a: "a mathematical function that describes the velocity of an object as it varies with time",
        b: "the velocity calculated for an infinitesimal interval of time",
        c: "the opsite of acceleration",
        d: "the radio velocity between the space and air",
        correct: "b",
    },
    {
        question: "Approximate the instantaneous rate of change of the function f(x)= 3x^2+2x-1 at x = -1",
        a: "-4",
        b: "3",
        c: "1/4",
        d: "4",
        correct: "a",
    },
    {
        question: "What type of segments are being shown? Click on the pdf and go to Drawing 1 ",
        a: "secant",
        b: "tangent",
        c: "both",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What is average velocity?",
        a: "is the absolute value of the velocity vector. For a moving object, speed is always positive.",
        b: "the ratio between the displacement and the interval of time taken for such displacement",
        c: "the average of earth speed",
        d: "none of the above",
        correct: "b",
    },
    
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})