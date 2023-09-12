const btnEl = document.querySelector(".btn");
const imageContainerEl = document.querySelector(".image-container");

btnEl.addEventListener("click", ()=>{
    addNewImage();
});

function addNewImage(){
    for(let i = 0; i < 10; i++){
        const newImageEl = document.createElement("img");
        const randomNum = Math.floor(Math.random() * 2000);
        newImageEl.src = `https://picsum.photos/200/300?random=${randomNum}`;
        imageContainerEl.appendChild(newImageEl);
    }
}