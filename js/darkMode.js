// DARK MODE

const lightMode = document.querySelector('i.fa-sun');
const darkMode = document.querySelector('i.fa-moon');
const aside = document.querySelector('aside');
const body = document.querySelector('body');
const mainTitleH2 = document.querySelectorAll('.main-titles h2');
const mainTitle = document.querySelectorAll('.main-titles');
const cardsArticle = document.querySelectorAll('#cardArticle');
const goToProject = document.querySelectorAll('.goToProject-btn');
const aboutText = document.querySelector('.about-text');

console.log(goToProject)

export function toggleDarkMode() {
    lightMode.style.display = 'flex';
    darkMode.style.display = 'none';
    aside.style.backgroundColor = '#2a2828';
    body.style.backgroundColor = '#131212';
    aboutText.style.color = '#f5f5f5';

    mainTitle.forEach(link => {
        link.style.backgroundColor = '#2a2828';
    });
    

    mainTitleH2.forEach(link => {
        link.style.color = '#f5f5f5';
    });

    goToProject.forEach(link => {
        link.style.backgroundColor = "red";
    });
    
    cardsArticle.forEach(card => {
        card.style.border = '1px solid #f5f5f52d';
        card.style.backgroundColor = 'red';
        card.style.color = '#f5f5f5';
        // link.id = 'goToProject-btn-dark';
    });

    // Save the current mode to localStorage
    localStorage.setItem('darkMode', 'enabled');
}

export function toggleLightMode() {
    lightMode.style.display = 'none';
    darkMode.style.display = 'flex';
    body.style.backgroundColor = '#f5f5f5';
    aside.style.backgroundColor = '#131212';
    aboutText.style.color = '#131212';

    mainTitle.forEach(link => {
        link.style.backgroundColor = '#f5f5f5';
    });
    

    mainTitleH2.forEach(link => {
        link.style.color = '#131212';
    });

    cardsArticle.forEach(card => {
        // card.style.border = 'none';
        card.style.backgroundColor = '#f5f5f5';
        card.style.color = '#131212';
    });

    // Save the current mode to localStorage
    localStorage.setItem('darkMode', 'disabled');
}

// Check the initial mode from localStorage
const initialDarkMode = localStorage.getItem('darkMode');

// Set the initial mode based on the value retrieved from localStorage
if (initialDarkMode === 'enabled') {
    toggleDarkMode();
} else {
    toggleLightMode();
}