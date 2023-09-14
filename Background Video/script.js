const btnEl = document.querySelector(".btn");
const videoEl = document.querySelector(".background-video");
const faSolidEl = document.querySelector(".fa-solid");

btnEl.addEventListener("click", ()=>{
    // console.log(btnEl.classList.contains("pause"));
    if(btnEl.classList.contains("pause")){
        btnEl.classList.remove("pause");
        videoEl.play();
        faSolidEl.classList.add("fa-pause");
        faSolidEl.classList.remove("fa-play");
    }
    else{
        btnEl.classList.add("pause");
        videoEl.pause();
        faSolidEl.classList.remove("fa-pause");
        faSolidEl.classList.add("fa-play");
    }
});