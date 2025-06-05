const sizeInput = document.getElementById("size");
const app = document.getElementById("app");

sizeInput.addEventListener("input", (e) => {
    updateTextAreaRows();
    const scale = parseFloat(e.target.value);
    app.style.fontSize = `${scale}rem`;
    localStorage.setItem("sizeValue", scale);
});

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("sizeValue");
    if (saved !== null) {
        sizeInput.value = saved;
        app.style.fontSize = `${saved}rem`;
    }
});

document.addEventListener("app:refresh", () => {
    sizeInput.value = 3.5;
    app.style.fontSize = "2em";
    sizeInput.dispatchEvent(new Event('input'));
});
