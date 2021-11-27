var questions = [ 
    {
    title: "Q1. What is Javascript ?",
    options: ["1. It is a language","2. It is a rock song ?","3. It is a type of car","4. It is a mountain"],
    answer: "1. It is a language"
},
{
    title: "Q2. How do you comment in Javascript ?",
    options: ['--','++','//','CC'],
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
function genQuestions () {
startButtonEl.remove();
p1El.remove();

if (qCount <= questions.length) {
    
    qContainerEl.textContent = questions[qCount].title;
    optionsEl.textContent = "";


for( var i = 0; i < questions[qCount].options.length; i++) {
    var genOptions = document.createElement('button');
    genOptions.textContent = questions[qCount].options[i];
    
    genOptions.setAttribute("data-id", i);
    genOptions.addEventListener("click", function(event) { 
       event.stopPropagation();

        if (genOptions.textContent === questions[qCount].answer) {
            timeLeft = timeLeft + 10;
             }
        else{ timeLeft = timeLeft - 13 };
        console.log(genOptions.textContent);
       
        qContainerEl.textContent = "";

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

var getUserScore = function () {
        console.log(score);

    let initialsEl = document.createElement('form')
    let postbtn =document.createElement('button')

    postbtn.textContent = "post"
    resultsEl.textContent = `you scored ${score} points. Enter your initials:`
};
getUserScore();

