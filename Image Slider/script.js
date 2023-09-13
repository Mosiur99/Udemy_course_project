const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const imageEl = document.querySelectorAll("img");

// console.log(imageEl.length);

let currentImage = 0;

let timeout;

nextEl.addEventListener("click",  ()=>{
    currentImage++;
    clearTimeout(timeout);
    updateImage();
});

prevEl.addEventListener("click", ()=>{
    currentImage--;
    clearTimeout(timeout);
    updateImage();
});

updateImage();

function updateImage(){
    if(currentImage == imageEl.length){
        currentImage = 0;
    }
    if(currentImage < 0){
        currentImage = imageEl.length - 1;
    }
    imageContainerEl.style.transform = `translateX(-${currentImage * 500}px)`;

    timeout = setTimeout(()=>{
        currentImage++,
        updateImage()
    }, 3000);
}
