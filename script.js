var questions = [ 
    {
    title: "Q1. What is Javascript ?",
    options: ["1. It is a language","2. It is a rock song ?","3. It is a type of car","4. It is a mountain"],
    answer: "1. It is a language"
},
{
    title: "Q2. How do you comment in Javascript ?",
    options: ['--','++','//','<!--'],
    answer: "//"
},
{
    title: "Q3.  What method returns a random number between 0 and 1 ?",
    options: ["Math.floor()","Math.random()",".push()",".pop()"],
    answer: "Math.random()"
},
{
    title: "Q4. Objects have key pair values called ?",
    options: ["data and life", "life and value", "property and life", "property and value"],
    answer: "property and value"
},
{
    title: "Q5. What does DOM stand for",
    options: ["Document object model", "Dog and Monkey", "property and life", "property and value"],
    answer: "Document object model"
}]

var body = document.body;
let timeLeft  = 100;
var timerEl = document.getElementById('timertext');
p1El = document.getElementById('p1');
var resultsEl = document.getElementById("results-div")
var qContainerEl = document.getElementById("q-container");
optionsEl = document.getElementById("options-div");


// variable to keep track of what question we're on
var qCount = 0;

// score variable
let score = 0;

// an array to store high scores
let emptyArray = [];

// the array of high scores from local storage
let storedArray = JSON.parse(window.localStorage.getItem("highScores"));

// timer starts when startButton is clicked
var timerCountdown = function(){
    let timerInterval = setInterval(function(){timeLeft--;
    timerEl.textContent = timeLeft;
if(timeLeft <= 0) {
    clearInterval(timerInterval)
}}, 1000)
};

let startButtonEl = document.getElementById("start-btn");
startButtonEl.addEventListener("click", timerCountdown);
startButtonEl.addEventListener("click", genQuestions)

// Generate questions
function genQuestions() {
startButtonEl.remove();
p1El.remove();

if (qCount < questions.length) {
    
    qContainerEl.innerHTML = questions[qCount].title;
    optionsEl.textContent = "";


for( var i = 0; i < questions[qCount].options.length; i++) {
    let genOptions = document.createElement('button');
    genOptions.innerText = questions[qCount].options[i];
    console.log(qCount)

    genOptions.setAttribute("data-id", i);
    genOptions.addEventListener("click", function(event) { 
       event.stopPropagation();
       
       
        if (genOptions.innerText === questions[qCount].answer) {
            timeLeft = timeLeft;
             }
        else{ 
            score -= 10;
            timeLeft = timeLeft - 13 };
            
            console.log(genOptions.innerText)
        qContainerEl.innerHTML = "";

        if(qCount === questions.length) {
            return;} 
        else {
        qCount++;
        genQuestions();
    }
    });
    optionsEl.append(genOptions);
    }  
    }
}

function getUserSCore () {
    timerEl.remove();
    optionsEl.textContent="";

    let initialsEl = document.createElement('form')
    let postScoreBtn = document.createElement('button');

    initialsEl.textContent = "";
    postScoreBtn.textContent = "Post Score";


    postScoreBtn.addEventListener();
}



