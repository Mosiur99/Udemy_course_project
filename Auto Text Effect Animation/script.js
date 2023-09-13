const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Instructor"];

let careerIndex = 0, characterIndex = 0;

updateText();

function updateText(){
    characterIndex++;
    containerEl.innerHTML = `
        <h1>I am ${(careers[careerIndex][0] == 'A' || careers[careerIndex][0] == 'E' || careers[careerIndex][0] == 'O' || careers[careerIndex][0] == 'I' || careers[careerIndex][0] == 'U')? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>
    `;
    if(characterIndex == careers[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }

    if(careerIndex == careers.length){
        careerIndex = 0;
    }
    setTimeout(updateText, 400);
}

