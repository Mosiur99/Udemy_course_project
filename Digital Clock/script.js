const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const millisecondEl = document.getElementById("millisecond");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ms = new Date().getMilliseconds();
    let ampm = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12;
    h = h < 10 ? "0" + h: h;
    m = m < 10 ? "0" + m: m;
    s = s < 10 ? "0" + s: s;
    if(ms < 10){
        ms = "00" + ms;
    }
    else if(ms < 100){
        ms = "0" + ms;
    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    millisecondEl.innerText = ms;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        updateClock();
    }, 1)
}

updateClock();