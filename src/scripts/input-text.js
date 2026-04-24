const textArea = document.getElementById("app-text");
const defaultMessage = "SAY SOMETHING";
const editHint = document.getElementById("text-edit-hint");

function updateTextAreaRows() {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
}

textArea.addEventListener("input", () => {
    textArea.value = textArea.value.replace(defaultMessage, "");
    // WRITE THE PLACEHOLDER AUTOMATICALLY IF THE INPUT IS EMPTY
    // if (textArea.value.trim() === "") {
    //     textArea.value = "SAY SOMETHING";
    // }
    updateTextAreaRows();
});

window.addEventListener("load", () => {
    textArea.value = defaultMessage;
    updateTextAreaRows();
    textArea.focus();
});