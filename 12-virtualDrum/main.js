function playSound({ keyCode }) {
    const audioSound = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (audioSound) {
        audioSound.currentTime = 0;
        audioSound.play();
        key?.classList.toggle("playing");
        setTimeout(() => key?.classList.toggle("playing"), 50);
    }
}

const box = document.querySelector(".box");

function handleClick(event) {
    console.log(event.target.dataset.key);
    const keyCode = event.target.dataset.key;

    setInterval(() => {
        box.style.cursor = "grab";
    }, 800);
    box.style.cursor = "grabbing";

    
    playSound({ keyCode });
}

function handleTouch(event) {
    const keyCode = event.target.dataset.key;
    playSound({ keyCode });
}

window.addEventListener("keydown", playSound);
document.addEventListener("click", handleClick);
document.addEventListener("touchstart", handleTouch);
