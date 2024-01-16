const targetDate = new Date("Jan 16, 2024 09:23:00").getTime();

const jsConfetti = new JSConfetti();

let myfunc = setInterval(function () {
    let now = new Date().getTime();
    let timeleft = targetDate - now;

    // Calculating the days, hours, minutes and seconds left

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    if (days < 10) {
        days = "0" + days;
    }
    let hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    if (hours < 10) {
        hours = "0" + hours;
    }
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Result is output to the specific element

    document.querySelector("#days span").innerHTML = days;
    document.querySelector("#hours span").innerHTML = hours;
    document.querySelector("#mins span").innerHTML = minutes;
    document.querySelector("#secs span").innerHTML = seconds;

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.querySelector("#days span").innerHTML = "00";
        document.querySelector("#hours span").innerHTML = "00";
        document.querySelector("#mins span").innerHTML = "00";
        document.querySelector("#secs span").innerHTML = "00";

        setInterval(function () {
            document
                .querySelector(".countdown__nums")
                .classList.add("animate__bounceOut");
        }, 1000);

        setInterval(function () {
            document.querySelector(".countdown__nums").style.display = "none";
            document.querySelector(".title").style.display = "none";
            document.querySelector("#end").innerHTML = "WE ARE OPEN NOW!";
            document.querySelector("#end").style.display = "block";
            document.querySelector("#end").classList.add("animate__bounceIn");
            
        }, 2000);

        setTimeout(function () {
            jsConfetti.addConfetti({
                emojis: ["💫", "🥳", "✨", "🍀", "🎉", '🦚', '🌈', '☄️', '🎈'],
                emojiSize: 10,
                confettiNumber: 1200,
            });
        }, 2000);

        
    }
}, 1000);
