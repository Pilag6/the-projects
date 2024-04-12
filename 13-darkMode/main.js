import { articles } from "./articles.js";

const articlesContainer = document.querySelector(".articles");

// Function to switch to light mode
function switchToLightMode() {
    document.body.classList.remove("dark-mode");
    document.querySelectorAll(".btn-toggle").forEach((btn) => {
        btn.classList.remove("hidden");
        if (btn.classList.contains("sun")) {
            btn.classList.add("hidden");
        }
    });
}

// Function to switch to dark mode
function switchToDarkMode() {
    document.body.classList.add("dark-mode");
    document.querySelectorAll(".btn-toggle").forEach((btn) => {
        btn.classList.remove("hidden");
        if (btn.classList.contains("moon")) {
            btn.classList.add("hidden");
        }
    });
}

// Example toggle function
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        switchToLightMode();
    } else {
        switchToDarkMode();
    }
}

// Event listener for toggling theme
document.querySelector(".toggle").addEventListener("click", toggleTheme);

function addArticles() {
    articles.forEach((article) => {
        // Create an element

        let articleTemplate = document.createElement("article");

        articleTemplate.className = "posts";

        articleTemplate.innerHTML = `
        
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <button>Read more...</button>
        
        `;

        articlesContainer.appendChild(articleTemplate);
    });
}

addArticles();
