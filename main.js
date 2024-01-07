import { addCardsTemplate } from "./js/cardsTemplate.js";
import { toggleDarkMode, toggleLightMode } from "./js/darkMode.js";

// ADD CARDS

addCardsTemplate();

// DARK MODE

const lightMode = document.querySelector("i.fa-sun");
const darkMode = document.querySelector("i.fa-moon");

lightMode.addEventListener("click", toggleLightMode);
darkMode.addEventListener("click", toggleDarkMode);


