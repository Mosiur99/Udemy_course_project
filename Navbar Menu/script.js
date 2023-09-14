const menuEl = document.querySelector(".menu");
const barEl = document.querySelector(".fa-bars");

barEl.addEventListener("click", ()=>{
    menuEl.classList.toggle("show-menu");
});