const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let timerID = null;

// timer update
function updateTimer() {
    seconds++;

    // time format
    let sec = seconds % 60;
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - hours * 3600) / 60);

    if (sec < 10) sec = "0" + sec;
    if (mins < 10) mins = "0" + mins;
    if (hours < 10) hours = "0" + hours;

    timer.innerText = `${hours}:${mins}:${sec}`;
}

function start() {
    if (timerID) {
        return;
    }
    timerID = setInterval(updateTimer, 1000);
}

function stop() {
    clearInterval(timerID);
    timerID = null;
}

function reset() {
    stop();
    seconds = 0;
    timer.innerText = "00:00:00";
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
