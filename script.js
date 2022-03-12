const quizDB = [
    {
        question: "Q1: What is the full form of HTML?", 
        a: "Hello To My Land", 
        b: "Hey Text Markup Language", 
        c: "HyperText Makeup Language", 
        d: "Hypertext Markup Language", 
        ans: "ans4",
        image:"9BI2iC.jpg"
    },
    {
        question: " Q2: What is the full form of CSS?", 
        a: "Cascading Style Sheets", 
        b: "Cascading Style Sheep", 
        c: "Cartoon Style Sheets", 
        d: "Cascading Super Sheets", 
        ans: "ans1", 
        image:"15882.jpg"   
    },
    {
        question: " Q3: What is the full form of HTTP?", 
        a: "Hypertext Transfer Product", 
        b: "Hypertext Test Protocol", 
        c: "Hey Transfer Protocol", 
        d: "Hypertext Transfer Protocol",
        ans: "ans4",
        image:"1013802.jpg"   
    },
    {
        question: " Q4: What is the full form of JS?", 
        a: "JavaScript", 
        b: "Jadui script", 
        c: "Jadu script", 
        d: "Java scriptu",
        ans: "ans1",
        image:"1003219.jpg"   
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit ');
const background = document.getElementById('image')

const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score = 0;

const loadQuestion = () =>
{
    
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    // document.getElementById('bgImage').style.backgroundImage = "url(question.image)";
}

loadQuestion();

const getCheckAnswer = () =>
{
    let answer;

    answers.forEach((curAnsEle) => 
    {
        if(curAnsEle.checked)
        {
            answer = curAnsEle.id;
        }
    });
    return answer;
};

const deselectAll = () =>
{
    answers.forEach((curAnsEle) => 
    {
        curAnsEle.checked= false
    });
}

function backgroundImage() {

    document.getElementById('bgImage').style.backgroundImage = "url(question.image)"
}

submit.addEventListener('click', () =>
{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans)
    {
        score++;
    };

    questionCount++;

    deselectAll(); 

    if(questionCount < quizDB.length)
    {
        loadQuestion();
    }
    else
    {
        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length}✌🏻</h3>
            <button class = "btn" onclick= "location.reload()"> Play Again </button>
        `;

        showScore.classList.remove('scoreArea'); 
    }


});