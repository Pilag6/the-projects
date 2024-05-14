import { addCardsTemplate, filterCards } from "./js/cardsTemplate.js";
import { toggleDarkMode, toggleLightMode } from "./js/darkMode.js";
import { cardsInfo } from "./js/cardInfo.js";

// Initial load
addCardsTemplate();

// Filter buttons
const filters = document.querySelectorAll(".filter buttons");

// Event listeners for filter buttons
filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filters.forEach(f => f.classList.remove("filter-active"));
        filter.classList.add("filter-active");
        const category = filter.classList[0].split('-')[1]; // Extract category from class name
        filterCards(category);
    });
});

// DARK MODE

const lightMode = document.querySelector("i.fa-sun");
const darkMode = document.querySelector("i.fa-moon");

lightMode.addEventListener("click", toggleLightMode);
darkMode.addEventListener("click", toggleDarkMode);

// Aside Collapse

const aside = document.querySelector("aside");
const chevronCollapse = document.querySelector(".aside-collapse");
const navLinks = document.querySelector(".nav-links");
const navLinksSpan = document.querySelectorAll(".nav-link-item span");
const logoH2 = document.querySelector(".logo h2");
const main = document.querySelector("main");
const logo = document.querySelector(".logo");
const footerGithub = document.querySelector("footer .github");
const hideLinks = document.querySelector(".hide-link");

chevronCollapse.addEventListener("click", () => {
    aside.classList.toggle("collapse");
    chevronCollapse.classList.toggle("chevron-rotate");
    navLinksSpan.forEach(span => span.classList.toggle("span-hide"));
    logoH2.classList.toggle("logo-hide");
    main.classList.toggle("main-collapse");
    navLinks.classList.toggle("nav-links-collapse");
    logo.classList.toggle("nav-links-collapse");
    footerGithub.classList.toggle("github-hide");
    hideLinks.classList.toggle("show-link");
});
