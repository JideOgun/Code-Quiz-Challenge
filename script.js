var body = document.body;
let timeLeft  = 100;
var timerEl = document.getElementById('timertext');

var timerCountdown = function(){
    let timerInterval = setInterval(function(){timeLeft--;
    timerEl.textContent = timeLeft;
if(timeLeft <=0) {
    clearInterval(timerInterval)
}}, 1000)
};

let startButtonEl = document.getElementById("start-btn");
startButtonEl.addEventListener("click", timerCountdown)

