const colorDisplay = document.querySelector(".color-display");
const directionSelect = document.querySelector("select");
const colorInputs = document.querySelectorAll(".box-selector input");
const codeBox = document.querySelector(".code-box");
const randomBtn = document.querySelector("#random-btn");
const copyBtn = document.querySelector("#copy-btn");
const mainContainer = document.querySelector(".container");

const generateGradient = (isRandom) => {
    if (isRandom) {
        colorInputs[0].value = getRandomColor(); // #fa3424
        colorInputs[1].value = getRandomColor(); // #fa3424
    }

    const gradient = `linear-gradient(${directionSelect.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;

    colorDisplay.style.background = gradient;
    mainContainer.style.background = gradient;

    codeBox.textContent = `background: ${gradient}`;
};

const getRandomColor = () => {
    let options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

    let hex = "#";

    for (let i = 0; i < 6; i++) {
        hex += options[Math.floor(Math.random() * options.length)];
        // console.log(`${i}: ${hex}`);
    }

    return hex;
};

function copyGradient() {
    navigator.clipboard.writeText(codeBox.textContent);

    copyBtn.textContent = "Gradient Copied!";
    copyBtn.style.background = "#01857c";
    codeBox.style.fontWeight = "bold";

    setTimeout(() => {
        copyBtn.textContent = "Copy Gradient";
        copyBtn.style.background = "#01b7ab";
        codeBox.style.fontWeight = "normal";
    }, 2000);
};


colorInputs.forEach((color) => {
    color.addEventListener("input", () => generateGradient(false));
});

directionSelect.addEventListener("change", () => generateGradient(false));

randomBtn.addEventListener("click", () => generateGradient(true));

copyBtn.addEventListener("click", copyGradient);

