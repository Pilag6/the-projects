import { sentences } from "./data/sentences.js";
import { questions } from "./data/questions.js";
import { adjectives } from "./data/adjectives.js";
import { verbs } from "./data/verbs.js";
import { nouns } from "./data/nouns.js";
import { colors } from "./data/colors.js";
import { animals } from "./data/animals.js";
import { adverbs } from "./data/adverbs.js";
import { family } from "./data/family.js";
import { prepositions } from "./data/prepositions.js";
import { food } from "./data/food.js";
import { conjunctions } from "./data/conjunctions.js";

// Variables

const cards = document.querySelector(".cards");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const flipBtn = document.querySelector(".flipBtn");
const randomBtn = document.querySelector(".randomBtn");
const filterBtns = document.querySelectorAll(".filters button");

let currentIndex = 0;
let dataArray = sentences;

// Functions
function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="front">
            <p>${data.german}</p>
            <h3 class="id">${data.id}</h3>
            <i class="fa-solid fa-volume-high"></i>
        </div>
        <div class="back">
            <p>${data.english}</p>
            <h3 class="id">${data.id}</h3>
            <i class="fa-solid fa-volume-high"></i>
        </div>
    `;
    cards.innerHTML = card.outerHTML;
    // cards.innerHTML = ""
    // cards.appendChild(card)

    function attachVolumeIconEventListener(lang, selector) {
        const volumeIcon = document.querySelector(selector);
        volumeIcon.addEventListener("click", () => {
            const outputText = document.querySelector(
                selector.replace(".fa-volume-high", "p")
            ).textContent;
            const speech = new SpeechSynthesisUtterance(outputText);
            speech.lang = lang;
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            window.speechSynthesis.speak(speech);
        });
    }

    attachVolumeIconEventListener("de-DE", ".front .fa-volume-high");
    attachVolumeIconEventListener("en-US", ".back .fa-volume-high");
}

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
    currentIndex = Math.floor(Math.random() * dataArray.length);
    createCard(dataArray[currentIndex]);
}

// INITIAL LOAD
createCard(sentences[currentIndex]);

// Event Listeners
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);
flipBtn.addEventListener("click", flipCard);
randomBtn.addEventListener("click", randomCard);

filterBtns.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        // console.log(category);
        filterBtns.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        const dataMap = {
            adjectives,
            adverbs,
            animals,
            colors,
            conjunctions,
            family,
            food,
            nouns,
            prepositions,
            questions,
            sentences,
            verbs,
        };
        dataArray = dataMap[category];
        currentIndex = 0;
        createCard(dataArray[currentIndex]);
    });
});
