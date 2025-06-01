const el = document.querySelector("#app h1");
const userInput = document.getElementById("app-text");
let strArray;
function initElements() {
    el.innerHTML = "";
    for(let i = 0; i < strArray.length; i++){
        const letter = strArray[i];
        const phraseAtom = document.createElement("span");
        phraseAtom.innerText = letter;
        el.appendChild(phraseAtom);
    }
}
function updateText(text) {
    if (!text || text.trim() === "") text = "Clap your hands!";
    strArray = text.split("");
    initElements();
}
userInput.addEventListener("input", ()=>{
    const text = userInput.value;
    updateText(text);
});
window.addEventListener("load", ()=>{
    updateText(userInput.value);
});

//# sourceMappingURL=memoire-victor.76c62a3a.js.map
