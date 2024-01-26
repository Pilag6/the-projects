const textarea = document.querySelector("textarea");
const words = document.querySelector("#words span");
const characters = document.querySelector("#chars span");
const sentences = document.querySelector("#sentences span");
const paragraphs = document.querySelector("#paragraphs span");
const avgWord = document.querySelector("#avgWord span");
const avgSentence = document.querySelector("#avgSentence span");
const readingTime = document.querySelector("#reading-time span");

// Buttons
const btns = document.querySelectorAll(".btns");

const fontFamily = document.querySelector(".btn-1");
const fontSize = document.querySelector(".btn-2");
const bold = document.querySelector(".btn-3");
const italic = document.querySelector(".btn-4");
const underline = document.querySelector(".btn-5");
const left = document.querySelector(".btn-6");
const center = document.querySelector(".btn-7");
const right = document.querySelector(".btn-8");
const justify = document.querySelector(".btn-9");
const undo = document.querySelector(".btn-10");
const copy = document.querySelector(".btn-11");
const trash = document.querySelector(".btn-12");

// Social Counter

const twitter = document.querySelector(".twitter p span");
const facebook = document.querySelector(".facebook p span");
const instagram = document.querySelector(".instagram p span");
const linkedIn = document.querySelector(".linkedIn p span");

// Events
textarea.addEventListener("input", () => {
    const text = textarea.value;

    // Words dont count dashes

    const wordsCount = text.split(/\s+/).filter((word) => word !== "").length;

    words.textContent = wordsCount;

    // Characters

    characters.textContent = text.length;

    // Sentences.

    const sentencesCount = text
        .split(/[.!?]+/g)
        .filter((sentence) => sentence !== "").length;

    sentences.textContent = sentencesCount;

    // Paragraphs

    const paragraphsCount = text
        .split("\n\n")
        .filter((paragraph) => paragraph !== "").length;

    paragraphs.textContent = paragraphsCount;

    // Reading Time

    const readingTimeCount = Math.ceil(wordsCount / 200);

    readingTime.textContent = readingTimeCount + " min";

    // Twitter

    const socialCounter = [
        { element: twitter, limit: 280 },
        { element: facebook, limit: 5000 },
        { element: instagram, limit: 2200 },
        { element: linkedIn, limit: 3000 }
    ];

    socialCounter.forEach(counter => {
        const { element, limit } = counter;
        const remainingChars = limit - text.length;

        element.textContent = remainingChars;

        if (text.length > limit) {
            element.style.color = "#F4212E";
        } else if (text.length > limit - 200) {
            element.style.color = "#FFD400";
        } else {
            element.style.color = "#e3e3e3";
        }
    });
});

// Buttons

fontFamily.addEventListener("click", () => {
    textarea.classList.toggle("font-family");
    fontFamily.classList.toggle("activeBg");
});

fontSize.addEventListener("click", () => {
    textarea.classList.toggle("font-size");
    fontSize.classList.toggle("activeBg");
});

bold.addEventListener("click", () => {
    textarea.classList.toggle("bold");
    bold.classList.toggle("activeBg");
});

italic.addEventListener("click", () => {
    textarea.classList.toggle("italic");
    italic.classList.toggle("activeBg");
});

underline.addEventListener("click", () => {
    textarea.classList.toggle("underline");
    underline.classList.toggle("activeBg");
});

left.addEventListener("click", () => {
    textarea.classList.remove("center", "right", "justify");
    textarea.classList.toggle("left");
    left.classList.toggle("activeBg");
    center.classList.remove("activeBg");
    right.classList.remove("activeBg");
    justify.classList.remove("activeBg");
});

center.addEventListener("click", () => {
    textarea.classList.remove("left", "right", "justify");
    textarea.classList.toggle("center");
    center.classList.toggle("activeBg");
    left.classList.remove("activeBg");
    right.classList.remove("activeBg");
    justify.classList.remove("activeBg");
});

right.addEventListener("click", () => {
    textarea.classList.remove("left", "center", "justify");
    textarea.classList.toggle("right");
    right.classList.toggle("activeBg");
    left.classList.remove("activeBg");
    center.classList.remove("activeBg");
    justify.classList.remove("activeBg");
});

justify.addEventListener("click", () => {
    textarea.classList.remove("left", "center", "right");
    textarea.classList.toggle("justify");
    justify.classList.toggle("activeBg");
    left.classList.remove("activeBg");
    center.classList.remove("activeBg");
    right.classList.remove("activeBg");
});

undo.addEventListener("click", () => {
    textarea.classList.remove(
        "font-family",
        "font-size",
        "bold",
        "italic",
        "underline",
        "left",
        "center",
        "right",
        "justify"
    );
    btns.forEach((btn) => {
        btn.classList.remove("activeBg");
    });
});

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(textarea.value);
});

trash.addEventListener("click", () => {
    textarea.value = "";
    words.textContent = 0;
    characters.textContent = 0;
    sentences.textContent = 0;
    paragraphs.textContent = 0;
    avgWord.textContent = 0;
    avgSentence.textContent = 0;
    readingTime.textContent = 0;
    twitter.textContent = 280;
});
