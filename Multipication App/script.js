const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const btnEl = document.querySelector(".btn");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");

const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

questionEl.innerText = `What is ${num1} multiply by ${num2}`;
scoreEl.innerText = `score: ${score}`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value; //string to int typecasting by using +
    if(userAns == correctAns){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}
