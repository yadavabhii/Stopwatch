const display = document.querySelector("#display");
const controls = document.querySelector(".controls");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let timerId = null;

start.addEventListener("click", () => {
    timerId = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        display.innerText = currentTime;
    }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(timerId);
})

reset.addEventListener("click", () => {
    clearInterval(timerId);
    display.innerText = "00:00:00";
});
