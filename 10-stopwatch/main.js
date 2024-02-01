const timer = document.getElementById("timer")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")

let seconds = 0;
let timerID = null;

// timer update
function timer(){
  seconds++

  // time format
	let sec = seconds % 60;
	let mins = Math.floor((seconds - (hours * 3600)) / 60);
  let hours = Math.floor(seconds / 3600);

	if (sec < 10) sec = "0" + sec;
	if (mins < 10) mins = "0" + mins;
	if (hours < 10) hours = "0" + hrs;

	timer.innerText = `${hours}:${mins}:${sec}`;
}





startBtn.addEventListener("click", start)
stopBtn.addEventListener("click", stop)
resetBtn.addEventListener("click", reset)