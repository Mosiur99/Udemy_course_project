const imageEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

const testimonials = [
    {
        name: "Surobi",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        text: "excellent communication skills Apple is an outstanding full-stack developer. She has excellent communication skills and is able to effectively communicate complex technical concepts to non-technical stakeholders. She is a pleasure to work with and I highly recommend her services."
    },
    {
        name: "Golapi",
        photoUrl: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        text: "excellent communication skills Apple is an outstanding full-stack developer. She has excellent communication skills and is able to effectively communicate complex technical concepts to non-technical stakeholders. She is a pleasure to work with and I highly recommend her services."
    },
    {
        name: "Chadni",
        photoUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        text: "excellent communication skills Apple is an outstanding full-stack developer. She has excellent communication skills and is able to effectively communicate complex technical concepts to non-technical stakeholders. She is a pleasure to work with and I highly recommend her services."
    },
];

let index = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[index];
    imageEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    index++;
    if(index == testimonials.length){
        index = 0;
    }
    setTimeout(updateTestimonial, 10000);
}