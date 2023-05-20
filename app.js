var state = 'start';
var startButton;
var quitButton;
var score;
var question = "no question";
var answer;
var inquiry;
var sub
var contain
var questionWindow;

window.onload = function() {
    startButton = document.getElementById("start");
    quitButton = document.getElementById("quit");
    questionWindow = document.getElementById("questions");
    inquiry = document.getElementById("question");
    sub = document.getElementById("subtext");
    
};

let level = 0;
let tally = 0;
let videos = ["https://www.youtube.com/watch?v=AuX7nPBqDts", 
"https://www.youtube.com/watch?v=SgKPw8v4ZI4", 
"https://www.youtube.com/watch?v=8mcTsyV56jI", 
"https://www.youtube.com/watch?v=egjDLFX9VHg",
 "https://www.youtube.com/watch?v=mvOkMYCygps", 
 "https://www.youtube.com/watch?v=3JmnxR8nEi8"]

function getNewQuestion(level) {
    if (level === 0) {
        const n1 = Math.floor(Math.random() * 11);
        const n2 = Math.floor(Math.random() * 11);
        answer = n1 + n2;
        question = `${n1} + ${n2}`;
        
    } else if (level === 1) {
        const n1 = Math.floor(Math.random() * 11);
        const n2 = Math.floor(Math.random() * (n1 + 1));
        
        answer = n1 - n2;
        question = `${n1} - ${n2}`;
    } else if (level === 2) {
        const n1 = Math.floor(Math.random() * 91) + 10;
        const n2 = Math.floor(Math.random() * 91) + 10;
        answer = n1 + n2;
        question = `${n1} + ${n2}`;
    } else if (level === 3) {
        const n1 = Math.floor(Math.random() * 91) + 10;
        const n2 = Math.floor(Math.random() * (n1 - 9)) + 10;
        answer = n1 - n2;
        question = `${n1} - ${n2}`;
    } else if (level === 4) {
        const n1 = Math.floor(Math.random() * 13);
        const n2 = Math.floor(Math.random() * 13);
        answer = n1 * n2;
        question = `${n1} x ${n2}`;
    } else if (level === 5) {
        const n1 = Math.floor(Math.random() * 91) + 10;
        const n2 = Math.floor(Math.random() * 91) + 10;
        answer = n1 * n2;
        question = `${n1} x ${n2}`;
    }
    
    inquiry.textContent = question;
}

function checkAnswer() {
    let user;
    
    
        user = parseInt(document.getElementById("user").value);
    
        inquiry.textContent = "Not a number";


    if (user === answer) {
        inquiry.textContent = "Correct";
        if (tally < 25) {
            tally++;
        }
    } else {
        inquiry.textContent = `Incorrect. The correct answer was ${answer}`;
        sub.style.display="inline";
        sub.href=videos[level];
        tally--;
    }
    
}

function calcLevel(tly, lvl) {
    if (tly <= 3) {
        return 0;
    } else if (tly >= 24) {
        return 5;
    } else {
        return Math.floor(tly / 4);
    }
}

function makeQuestion() {
    checkAnswer();
    setTimeout(function() {
        level = calcLevel(tally, level);
        getNewQuestion(level);
    }, 2000);
}

function run() {
    startButton.style.display = 'none';
    quitButton.style.display = 'inline';
    questionWindow.style.display = 'flex';
    state = 'playing';
    level = 0;
    tally = 0;
    getNewQuestion(level);
}

function quit() {
    quitButton.style.display = 'none';
    startButton.style.display = 'flex';
    questionWindow.style.display = 'none';
    state = 'start';
}
