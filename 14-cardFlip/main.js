import { sentences } from "./sentences.js";
import { questions } from "./questions.js";
import { adjectives } from "./adjectives.js";
import { verbs } from "./verbs.js";

console.log(sentences[0]);

// Variables

const cards = document.querySelector(".cards");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const flipBtn = document.querySelector(".flipBtn");
const randomBtn = document.querySelector(".randomBtn");
const filterBtns = document.querySelectorAll(".filters button");



let currentIndex = 0;
let dataArray = sentences;


function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="front">
        <p>${data.german}</p>
        <h3 class="id">${data.id}</h3>
      </div>
      <div class="back">
        <p>${data.english}</p>
        <h3 class="id">${data.id}</h3>
      </div>
    `;
    cards.innerHTML = card.outerHTML;
    // cards.innerHTML = ""
    // cards.appendChild(card)
}

createCard(sentences[currentIndex]);

function nextCard() {
    currentIndex++;
    if (currentIndex > dataArray.length - 1) {
      currentIndex = 0;
    }
    createCard(dataArray[currentIndex]);
  }
  
  function prevCard() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = dataArray.length - 1;
    }
    createCard(dataArray[currentIndex]);
  }
  

function flipCard() {
    const card = document.querySelector(".card");
    card.classList.toggle("flipped");
}

function randomCard() {
    currentIndex = Math.floor(Math.random() * dataArray.length)
    createCard(dataArray[currentIndex]);
}

// Event Listeners
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);
flipBtn.addEventListener("click", flipCard)
randomBtn.addEventListener("click", randomCard)

filterBtns.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        console.log(category);
        switch (category) {
            case "sentences":
                dataArray = sentences;
                currentIndex = 0;
                createCard(dataArray[currentIndex]);
                break;
            case "questions":
                dataArray = questions;
                currentIndex = 0;
                createCard(questions[currentIndex]);
                break;
            case "adjectives":
                dataArray = adjectives;
                currentIndex = 0;
                createCard(adjectives[currentIndex]);
                break;
            case "verbs":
                dataArray = verbs;
                currentIndex = 0;
                createCard(verbs[currentIndex]);
                break;
        }
    });
});
