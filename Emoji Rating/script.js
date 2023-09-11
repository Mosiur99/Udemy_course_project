const feedbackContainerEl = document.querySelector(".feedback-container");
const emojiContainerEl = document.querySelector(".emoji-container");
const emojisEl = document.querySelectorAll(".fa-regular");
const starsEl = document.querySelectorAll(".fa-star");

const colors = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

// console.log(starsEl);

starsEl.forEach((starEl, index)=>{
    starEl.addEventListener("click", ()=>{
        // console.log("clicked", index);
        updateRating(index);
    });
});

function updateRating(index){
    starsEl.forEach((starEl, idx)=>{
        if(idx <= index){
            starEl.classList.add("active");
        }
        else{
            starEl.classList.remove("active");
        }
    });

    emojisEl.forEach((emojiEl)=>{
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colors[index];
    });
}