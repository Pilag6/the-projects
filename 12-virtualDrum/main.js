function playSound(e) {
    const audioSound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audioSound) return;

    audioSound.currentTime = 0;
    audioSound.play();

    key.classList.add("playing");

    setTimeout(() => {
        key.classList.remove("playing");
    }, 100);
}

window.addEventListener("keydown", playSound);

