const colorInput = document.getElementById("color");
const h1 = document.querySelector("#app h1");

colorInput.addEventListener("input", () => {
    const hue = colorInput.value * 3.6;
    h1.style.color = `hsl(${hue}, 100%, 60%)`;
    localStorage.setItem("colorValue", colorInput.value);
});

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("colorValue");
    if (saved !== null) {
        colorInput.value = saved;
        const hue = saved * 3.6;
        h1.style.color = `hsl(${hue}, 100%, 60%)`;
    }
});

document.addEventListener("app:refresh", () => {
    colorInput.value = 0;
    h1.style.color = "rgb(238, 238, 238)";
    localStorage.removeItem("colorValue");
});
