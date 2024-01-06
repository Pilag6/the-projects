import { toggleDarkMode } from "./js/darkMode.js";
import { toggleLightMode } from "./js/darkMode.js";

// DARK MODE

const lightMode = document.querySelector("i.fa-sun");
const darkMode = document.querySelector("i.fa-moon");

lightMode.addEventListener("click", toggleLightMode);
darkMode.addEventListener("click", toggleDarkMode);
