const loadingBarBackEl = document.querySelector(".loading-bar-back");
const loadingBarFrontEl = document.querySelector(".loading-bar-front");
const counterEl = document.querySelector(".counter");

let idx = 0;

updateNum();

function updateNum(){
    counterEl.innerText = idx + "%";
    loadingBarFrontEl.style.width = idx + "%";
    idx++;

    if(idx <= 100){
        setTimeout(updateNum, 30);
    }
}