const questionsEl = document.querySelectorAll(".question");

questionsEl.forEach((question)=>{
    const btnEl = question.querySelector(".question-btn");
    btnEl.addEventListener("click", ()=>{
        question.classList.toggle("show-text");
    });
});