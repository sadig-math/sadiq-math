const quizData = [
    {
        question: "Find the derivative of the given equation g(x) = 6 + ⅔x",
        a: "⅔",
        b: "6",
        c: "12",
        d: "6+2/3",
        correct: "a",
    },
    {
        question: "Find the derivative:f(x) = (-2/3)x3 - (1/2)x^2 + 9x",
        a: "-2x^2 + x + 9",
        b: "2x^2 - x - 9",
        c: "4x^2 - x - 9",
        d: "-2x^2 - x + 9",
        correct: "b",
    },
    {
        question: "Find the derivative of g(x)=(3x-2)/(x^2+2)",
        a: "(-3x^2+4x +6)/(x^2+2)^2",
        b: "(-3x^2-4x +6)/(x^2+2)^2",
        c: "3/(2x)",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "Which if the following is not a correct notation for 'derivative?",
        a: "f'(x)",
        b: "dy",
        c: " y'",
        d: "dy/dx",
        correct: "b",
    },
    {
        question: "Derivative means the same thing as",
        a: "none of them",
        b: "exponent",
        c: "slope of the secant line",
        d: "slope of the tangent line",
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