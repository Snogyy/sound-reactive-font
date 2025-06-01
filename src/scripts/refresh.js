const refreshInput = document.querySelector(".refresh-button");

refreshInput.addEventListener("click", () => {
    document.dispatchEvent(new Event("app:refresh"));
});
