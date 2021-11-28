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
var maincontentEl = document.getElementById("main-content")


// variable to keep track of what question we're on
var qCount = 0;

// score variable
let score = 0;

// highscores
let highScoresEl = document.getElementById("highscores")

// an array to store high scores
let storeHighScoresArray = [];

// the array of high scores from local storage
let storedArray = JSON.parse(window.localStorage.getItem("highScores"));

// timer starts when startButton is clicked
var timerCountdown = function(){
    let timerInterval = setInterval(function(){timeLeft--;
    timerEl.textContent = timeLeft;
if(timeLeft <= 0 || qCount === questions.length ) {
    clearInterval(timerInterval);
    getUserSCore ();
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
            score+=20
             }
        else{ timeLeft = timeLeft - 13 };
            
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

const saveScores = function(array){
    window.localStorage.setItem("highScores", JSON.stringify(array))
};


function getUserSCore () {
    timerEl.remove();
    optionsEl.textContent="";

    let initialsEl = document.createElement("input")
    let postScoreBtn = document.createElement("button");

    initialsEl.textContent = "";
    initialsEl.setAttribute("type", "text")
    postScoreBtn.textContent = "Post Score";
    resultsEl.innerHTML = `Your score is ${score}.   Enter your initials here `

    resultsEl.append(initialsEl);
    resultsEl.append(postScoreBtn);
    


    postScoreBtn.addEventListener("click", function(event) {
        event.preventDefault();
        let scoresArray = defineScoresArray(storedArray, storeHighScoresArray);

        let initials = initialsEl.value;
        let userAndScore = {
            initials: initials,
            score: score
        };

        scoresArray.push(userAndScore);
        saveScores(scoresArray); 
        displayScore ();
        homebtn();
    });
}


const defineScoresArray = (array1, array2) => {
    if(array1 !== null) {
      return array1
    } else {
      return array2
    }
  }


function displayScore () {
let scoresArray = defineScoresArray(storedArray, storeHighScoresArray);
scoresArray.forEach(obj => {
    let initials = obj.initials;
    let storedScore = obj.score;
    let resultsP = document.createElement("p");

    resultsP.innerText = `${initials}: ${storedScore}`;
    resultsEl.append(resultsP);

});

};

function homebtn() {
    let homebtn = document.createElement('button');
    homebtn.textContent = "Back to home page"
    homebtn.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.reload();
    })
    maincontentEl.append(homebtn);
}


