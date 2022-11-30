const quizData = [
    {
        question: "Find the derivative of the given equation f(x) = x^3 + x^2 + 3",
        a: "3x^2 + 2x",
        b: "3x + 2x ",
        c: "-6x - 6",
        d: "3x + 2x + 3",
        correct: "a",
    },
    {
        question: "Find the slope  f(x)=2x^3+5x^2−4x at x=2 ",
        a: "30",
        b: "40",
        c: "60",
        d: "0",
        correct: "b",
    },
    {
        question: "Find the derivative of f(x)=(x3-2x)^2",
        a: "6x^5 - 16x^3+8x",
        b: "6x^5 - 12x^3+8x",
        c: "12x^5+8x",
        d: "none of the above",
        correct: "a",
    },
    {
        question: " According to exponent rules, when we raise the power to a power we _______ the exponents.",
        a: "subtract",
        b: "multiply",
        c: "add",
        d: "divide",
        correct: "b",
    },
    {
        question: "(r4)^6",
        a: "r^12",
        b: "24r",
        c: "10r",
        d: "r24",
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