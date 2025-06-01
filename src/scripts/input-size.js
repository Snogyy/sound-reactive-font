const sizeInput = document.getElementById("size");
const app = document.getElementById("app");

sizeInput.addEventListener("input", (e) => {
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
    app.style.fontSize = "3.5rem";
    sizeInput.dispatchEvent(new Event('input'));
});
