import { cardsInfo } from "./cardInfo.js";

const cardsContainer = document.querySelector(".cards-container");
const itemsPerPage = 10;
let currentPage = 1;
let filteredCards = cardsInfo;

export function addCardsTemplate(page = 1) {
    cardsContainer.innerHTML = ''; // Clear previous cards

    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    const paginatedCards = filteredCards.slice(start, end);

    paginatedCards.forEach((card) => {
        let cardTemplate = document.createElement("article");

        cardTemplate.className = "cardArticle";

        cardTemplate.innerHTML = `
            <p class="card-number">${card.id < 9 ? 0 : ""}${card.id + 1}</p>
            <div class="card-image">
                <img src="${card.image}" alt="${card.name}" draggable="false" />
            </div>
            <div class="card-text">
                <h3>${card.name}</h3>
                <p class="card-description">${card.description}</p>
            </div>
            <a href="${card.url}" target="_blank" class="goToProject-btn">Go to project <i class="fa-brands fa-space-awesome"></i></a>
        `;

        cardsContainer.appendChild(cardTemplate);
    });

    updatePagination();
}

function updatePagination() {
    const paginationContainer = document.querySelector(".pagination-container");
    paginationContainer.innerHTML = ''; // Clear previous pagination

    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

    if (filteredCards.length > 10) { // Only show pagination if more than 10 cards
        for (let i = 1; i <= totalPages; i++) {
            let pageButton = document.createElement("button");
            pageButton.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
            pageButton.innerText = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                addCardsTemplate(currentPage);
                // Scroll to top of page
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            paginationContainer.appendChild(pageButton);
        }
    }
}

export function filterCards(category) {
    currentPage = 1; // Reset to first page on filter change
    filteredCards = category === 'all' ? cardsInfo : cardsInfo.filter(card => card.category === category);
    addCardsTemplate(currentPage);
}
