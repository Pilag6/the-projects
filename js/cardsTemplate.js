import { cardsInfo } from "./cardInfo.js";

const cardsContainer = document.querySelector(".cards-container");

export function addCardsTemplate() {
    cardsInfo.forEach((card) => {
        let cardTemplate = document.createElement("article");

        cardTemplate.id = "cardArticle";

        cardTemplate.innerHTML = `
            <div class="card-image">
                <img src="${card.image}" alt="${card.name}" draggable="false" />
            </div>
            <div class="card-text">
                <h3>${card.name}</h3>
                <p>${card.description}</p>
            </div>
            <a href="${card.url}" target="_blank" class="goToProject-btn">Go to project <i class="fa-brands fa-space-awesome"></i
            ></a>
    `;

        cardsContainer.appendChild(cardTemplate);
    });
}

/* 
TEMPLATE EXAMPLE
<!-- <article>
        <div class="card-img">
            <img src="./assets/counter.webp" alt="Countify" draggable="false"/>
        </div>

        <div class="card-text">
            <h3>Countify</h3>

            <p>
                <em>Counter</em> developed using <strong>Vanilla JavaScript</strong>. We explore the utilization of the <code>addEventListener</code> method to respond to events, specifically the <code>click</code> event. 
            </p>
        </div>

        <a 
            href="./01-counterApp/index.html"
            target="_blank" 
            rel="noopener noreferrer"
        >
            Go to Project <i class="fa-brands fa-space-awesome">
        </a>

</article> -->

*/
