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

window.addEventListener("keydown", playSound);

