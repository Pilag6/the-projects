import { articles } from "./articles.js";

const articlesContainer = document.querySelector(".articles");
const btnToggle = document.querySelector(".btn-toggle")

console.log(document.documentElement); // HTML

btnToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode")
})

function addArticles() {
    articles.forEach((article) => {
        // Create an element

        let articleTemplate = document.createElement("article");

        articleTemplate.className = "posts"

        articleTemplate.innerHTML = `
        
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        
        `;

        articlesContainer.appendChild(articleTemplate);
    });
}

addArticles();
