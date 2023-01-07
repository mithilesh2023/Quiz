const quizData=[
    {
        question:"which is a wild animal ?",
        a:"goat",
        b:"cow",
        c:"lion",
        d:"buffalow",
        correct:"c"
    }, 
    {
        question:"which is a pet animal ?",
        a:"goat",
        b:"tiger",
        c:"lion",
        d:"leopard",
        correct:"a"
    }, 
    {
        question:"where does  bird live ?",
        a:"shed",
        b:"hole",
        c:"nest",
        d:"den",
        correct:"c"
    },
     {
        question:"where is Ram Mandir?",
        a:"patna",
        b:"lakhnaw",
        c:"ayodhya",
        d:"delhi",
        correct:"c"
    }, 
    {
        question:"which is a men live ?",
        a:"water",
        b:"air",
        c:"land",
        d:"moon",
        correct:"c"
    },
    
]
const quiz=document.getElementById("quiz");
const answerE1s=document.querySelectorAll(".answer")
const questionE1s=document.getElementById("question")
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const e_text=document.getElementById('e_text')
const submitBtn=document.getElementById("submit");

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData=quizData[currentQuiz]
    questionE1s.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
    e_text.innerText=currentQuizData.e

}
function getSelected(){
    let answerE1s
    answerE1s.forEach(answerE1=>{
        if(answerE1.checked){
            answerE1=answerE1.id
        }
    })
    return answer
}
submitBtn.addEventListener('click',()=>{
    const answer=getSelected()
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=`
            <h2> You answered ${score}/${quizData.length} questions correctly</h2>
            <button onClick="location.reload()">Reload</button>
            `
        }
    }
})

