const mouseContainerEl = document.querySelector(".mouse-container");

window.addEventListener("mousemove", (event)=>{
    // console.log(event);

    mouseContainerEl.innerHTML = `
    <div class="mouse-event">
            ${event.clientX}
            <h4>Mosue X Position(px)</h4>
        </div>
        <div class="mouse-event">
            ${event.clientX}
            <h4>Mosue Y Position(px)</h4>
        </div>
    `;
});