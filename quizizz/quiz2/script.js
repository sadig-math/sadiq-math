const quizData = [
    {
        question: "Find the derivative of f(x) = 6x^30 -2x^15 + 4x^3 - 2x + 1",
        a: " f'(x) = 180x^29 - 30x^14 + 12x^2 - 2 ",
        b: " f'(x) = 18x^29 + 30x^15 + 12x^3  ",
        c: " '(x) = 180x^29 - 30x^14 + 12x^2  ",
        d: " f'(x) = 180x^29 - 30x^14 + 12x^2 +1 ",
        correct: "a",
    },
    {
        question: "If the position function for a particle is s(t) = -t2 - t, what is the instantaneous velocity function for the particle?",
        a: "v(t) = -2",
        b: "v(t) -2t - 1",
        c: "v(t) = -t",
        d: "v(t) = -2t",
        correct: "b",
    },
    {
        question: "At which x-value is f continuous but not differentiable? click on the pdf",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correct: "a",
    },
    {
        question: "If the position function for a particle is s(t) = -t2 - t, what is the instantaneous velocity function for the particle?",
        a: "-2",
        b: "-2t-1",
        c: "t-1",
        d: "-2x^1/2-1",
        correct: "b",
    },
    {
        question: "Find y' if y=e^3x",
        a: "0",
        b: "none",
        c: "3e",
        d: "3e^3x",
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