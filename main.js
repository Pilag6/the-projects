// DARK MODE

const lightMode = document.querySelector('i.fa-sun');
const darkMode = document.querySelector('i.fa-moon');
const aside = document.querySelector('aside');
const main = document.querySelector('main');
const body = document.querySelector('body');
const mainTitleH1 = document.querySelector('.main-title h1');
const mainTitle = document.querySelector('.main-title');

lightMode.addEventListener('click', () => {
    lightMode.style.display = 'none';
    darkMode.style.display = 'flex';
    body.style.backgroundColor = '#f5f5f5';
    aside.style.backgroundColor = '#131212';
    mainTitleH1.style.color = '#131212';
    mainTitle.style.backgroundColor = '#f5f5f5';
   
});

darkMode.addEventListener('click', () => {
    lightMode.style.display = 'flex';
    darkMode.style.display = 'none';
    aside.style.backgroundColor = '#2a2828';
    body.style.backgroundColor = '#131212';
    mainTitleH1.style.color = '#f5f5f5';
    mainTitle.style.backgroundColor = '#2a2828';
});

