import argentinaPlayers from "./players.js";

// reference

const img = document.querySelector("#imgPlayer");
const name = document.querySelector("#name");
const position = document.querySelector("#position");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

window.addEventListener("DOMContentLoaded", () => {
    showPlayers();
});

let currentPlayer = 0;

function showPlayers() {
    const playerNumber = argentinaPlayers[currentPlayer];

    img.src = playerNumber.img;
    name.textContent = playerNumber.name;
    position.textContent = playerNumber.position;
    info.textContent = playerNumber.text;
}

nextBtn.addEventListener("click", () => {
    currentPlayer++;

    if(currentPlayer > argentinaPlayers.length -1) {
        currentPlayer = 0
    }

    
    showPlayers();
});

prevBtn.addEventListener("click", () => {
    currentPlayer--;

    if(currentPlayer < 0) {
        currentPlayer = argentinaPlayers.length -1
    }
    showPlayers();
});

randomBtn.addEventListener("click", () => {
    currentPlayer = Math.floor(Math.random() * argentinaPlayers.length);
    showPlayers();
});
