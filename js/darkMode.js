// DARK MODE

const lightMode = document.querySelector('i.fa-sun');
const darkMode = document.querySelector('i.fa-moon');
const aside = document.querySelector('aside');
const body = document.querySelector('body');
const mainTitleH1 = document.querySelector('.main-title h1');
const mainTitle = document.querySelector('.main-title');
const cardsArticle = document.querySelectorAll('.cardArticle');
const goToProject = document.querySelectorAll('#goToProject-btn');

console.log(cardsArticle);

export function toggleDarkMode() {
    lightMode.style.display = 'flex';
    darkMode.style.display = 'none';
    aside.style.backgroundColor = '#2a2828';
    body.style.backgroundColor = '#131212';
    mainTitleH1.style.color = '#f5f5f5';
    mainTitle.style.backgroundColor = '#2a2828';

    goToProject.forEach(link => {
        link.style.color = '#f5f5f5';
    });

    cardsArticle.forEach(card => {
        card.style.border = '1px solid #f5f5f52d';
        card.style.backgroundColor = '#2a2828';
        card.style.color = '#f5f5f5';
    });
}

export function toggleLightMode() {
    lightMode.style.display = 'none';
    darkMode.style.display = 'flex';
    body.style.backgroundColor = '#f5f5f5';
    aside.style.backgroundColor = '#131212';
    mainTitleH1.style.color = '#131212';
    mainTitle.style.backgroundColor = '#f5f5f5';

    cardsArticle.forEach(card => {
        // card.style.border = 'none';
        card.style.backgroundColor = '#f5f5f5';
        card.style.color = '#131212';
    });
}