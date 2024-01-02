const counterValue = document.querySelector("#counterValue");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const resetBtn = document.querySelector("#reset");

let counter = 0;

const add = () => {
    counter++;
    counterValue.textContent = counter;
    setColor();
};

const subtract = () => {
    counter--;
    counterValue.textContent = counter;
    setColor();
};

const reset = () => {
    counter = 0;
    counterValue.textContent = counter;
    setColor();
};

const setColor = () => {
    if (counter > 0) {
        counterValue.style.color = "#16c803";
    } else if (counter < 0) {
        counterValue.style.color = "#fd6100";
    } else {
        counterValue.style.color = "#b7d605";
    }
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
resetBtn.addEventListener("click", reset);
