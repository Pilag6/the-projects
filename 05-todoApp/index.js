const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// Load items from local storage on page load
document.addEventListener("DOMContentLoaded", loadItemsFromLocalStorage);
// loadItemsFromLocalStorage();

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();
    const valueAppend = input.value;
    input.value = "";

    if (valueAppend !== "") {
        const li = createListItem(valueAppend);
        ul.appendChild(li);

        // Save items to local storage
        saveItemsToLocalStorage();
    }
}

function createListItem(text) {
    const li = document.createElement("li");

    li.innerHTML = `
        <i class="fas fa-circle-check"></i>
    `;

    const span = document.createElement("span");
    span.textContent = text;
    li.appendChild(span);

    const iDiv = document.createElement("div");

    iDiv.innerHTML = `
        <i class="fas fa-pen-to-square"></i>
        <i class="fas fa-trash-alt"></i>
    `;

    li.appendChild(iDiv);

    return li;
}

ul.addEventListener("click", handleUlClick);

function handleUlClick(e) {
    if (e.target.matches(".fa-trash-alt")) {
        e.target.closest("li").remove();
    } else if (e.target.matches(".fa-circle-check")) {
        e.target.closest("li").classList.toggle("checked");
    }

    // Save items to local storage
    saveItemsToLocalStorage();
}

// Save items to local storage

function saveItemsToLocalStorage() {
    const items = [];
    const listItems = ul.children;

    for (let i = 0; i < listItems.length; i++) {
        const li = listItems[i];
        const item = {
            text: li.querySelector("span").textContent,
            checked: li.classList.contains("checked"),
        };
        items.push(item);
        console.log(item.text)
    }

    localStorage.setItem("todoItems", JSON.stringify(items));
}

function loadItemsFromLocalStorage() {
    const items = JSON.parse(localStorage.getItem("todoItems"));
    if (items) {
        items.forEach((item) => {
            const li = createListItem(item.text);
            ul.appendChild(li);

            // Add the "checked" class if the item is checked
            if (item.checked) {
                li.classList.add("checked");
            }
        });
    }
}


