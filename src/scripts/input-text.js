const el = document.querySelector("#app h1");
const userInput = document.getElementById("app-text");
let strArray;

function syncInputToH1() {
    const h1Rect = el.getBoundingClientRect();
    const appRect = el.parentElement.getBoundingClientRect();

    userInput.style.width = h1Rect.width + "px";
    userInput.style.height = h1Rect.height + "px";
    userInput.style.left = (h1Rect.left - appRect.left) + "px";
    userInput.style.top = (h1Rect.top - appRect.top) + "px";
    userInput.style.fontSize = window.getComputedStyle(el).fontSize;
    userInput.style.fontFamily = window.getComputedStyle(el).fontFamily;
    userInput.style.letterSpacing = window.getComputedStyle(el).letterSpacing;
    userInput.style.textAlign = window.getComputedStyle(el).textAlign;
    userInput.style.position = "absolute";
    userInput.style.background = "transparent";
    userInput.style.color = "transparent";
    userInput.style.caretColor = "white";
    userInput.style.border = "none";
    userInput.style.outline = "none";
    userInput.style.padding = "0";
    userInput.style.margin = "0";
    userInput.style.zIndex = 2;
}

function initElements() {
    el.innerHTML = "";
    for (let i = 0; i < strArray.length; i++) {
        const letter = strArray[i];
        const phraseAtom = document.createElement("span");
        phraseAtom.innerText = letter;
        el.appendChild(phraseAtom);
    }
}

function updateText(text) {
    if (!text || text.trim() === "") {
        text = "SAY SOMETHING";
    }
    strArray = text.split("");
    initElements();
    syncInputToH1();
}


el.addEventListener("click", () => {
    userInput.focus();
});

userInput.addEventListener("input", () => {
    const text = userInput.value;
    updateText(text);
});

window.addEventListener("load", () => {
    userInput.value = "";
    updateText(userInput.value);
    userInput.focus();
    userInput.setSelectionRange(userInput.value.length, userInput.value.length);
});
