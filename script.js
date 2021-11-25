var timerEl = document.getElementById('timertext');



var startButEl = document.getElementById("start-btn");
let count = 100;
startButEl.addEventListener("click",function(){setInterval(function(){
    
    count--;
    timerEl.textContent = count;
}, 1000)

});