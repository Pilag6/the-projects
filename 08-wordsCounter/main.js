const textarea = document.querySelector("textarea");
const words = document.querySelector("#words span");
const characters = document.querySelector("#chars span");
const sentences = document.querySelector("#sentences span");
const paragraphs = document.querySelector("#paragraphs span");
const readingTime = document.querySelector("#reading-time span");

const resultP = document.querySelectorAll(".results p span");

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
const social = document.querySelectorAll(".social p span");

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
        .split("\n")
        .filter((paragraph) => paragraph !== "").length;

    paragraphs.textContent = paragraphsCount;

    // Reading Time

    const readingTimeCount = Math.ceil(wordsCount / 200);

    readingTime.textContent = readingTimeCount + " min";

    // SOCIAL MEDIA COUNTER

    twitter.textContent = 280 - text.length;
    facebook.textContent = 5000 - text.length;
    instagram.textContent = 2200 - text.length;
    linkedIn.textContent = 3000 - text.length;

    if (text.length > 280) {
        twitter.style.color = "#F4212E";
    } else if (text.length > 260) {
        twitter.style.color = "#FFD400";
    } else {
        twitter.style.color = "#e3e3e3";
    }

    if (text.length > 5000) {
        facebook.style.color = "#F4212E";
    } else if (text.length > 4980) {
        facebook.style.color = "#FFD400";
    } else {
        facebook.style.color = "#e3e3e3";
    }

    if (text.length > 2200) {
        instagram.style.color = "#F4212E";
    } else if (text.length > 2180) {
        instagram.style.color = "#FFD400";
    } else {
        instagram.style.color = "#e3e3e3";
    }

    if (text.length > 3000) {
        linkedIn.style.color = "#F4212E";
    } else if (text.length > 2980) {
        linkedIn.style.color = "#FFD400";
    } else {
        linkedIn.style.color = "#e3e3e3";
    }
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

function alignText(textAlignment) {
    const alignments = ["left", "center", "right", "justify"];
    const buttons = [left, center, right, justify];

    alignments.forEach((alignment, index) => {
        const button = buttons[index];
        if (textAlignment === alignment) {
            textarea.classList.add(alignment);
            button.classList.add("activeBg");
        } else {
            textarea.classList.remove(alignment);
            button.classList.remove("activeBg");
        }
    });
}

center.addEventListener("click", () => {
    alignText("center");
});

left.addEventListener("click", () => {
    alignText("left");
});

right.addEventListener("click", () => {
    alignText("right");
});

justify.addEventListener("click", () => {
    alignText("justify");
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
    textarea.classList.remove("center", "right", "justify");

    resultP.forEach((item) => {
        item.textContent = 0;
    });

    twitter.textContent = 280;
    facebook.textContent = 5000;
    instagram.textContent = 2200;
    linkedIn.textContent = 3000;

    social.forEach((item) => {
        item.style.color = "#e3e3e3";
    });

    btns.forEach((btn) => {
        btn.classList.remove("activeBg");
    });

    // location.reload();
});
