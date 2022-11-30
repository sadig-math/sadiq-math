const quizData = [
    {
        question: "Given f (x) = −3x3cosx",
        a: "3x^3sinx − 9x^2cosx",
        b: "3x^3cosx + 9x^2sinx",
        c: " 3x^3sinx + 9x^2cosx",
        d: " 6x^3sinx + 9x^2cosx",
        correct: "a",
    },
    {
        question: "Find dy/dx for y = (x2 + 1)^3 ",
        a: "dy/dx = 3(2x)^2",
        b: "dy/dx = 6x(x2 + 1)2",
        c: "2x(x2 + 1)^2",
        d: "dy/dx = 4(2x)^2",
        correct: "b",
    },
    {
        question: "When do you use the chain rule?",
        a: "when there is a function in a function",
        b: "anytime",
        c: "when there is division",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "d/dx (sin2x) = ?",
        a: "2x(cos x)",
        b: "2(sin x)(cos x)",
        c: "sinx",
        d: "2sinx",
        correct: "b",
    },
    {
        question: "what is the derivarive of y= sin(x^3-2x)",
        a: "tan(2x^2)",
        b: "sin(2x^2-2)",
        c: "cos(2x^2-2)",
        d: "(3x^2-2)cos(x^3-2x)",
        correct: "d",
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