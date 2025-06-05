const textArea = document.getElementById("app-text");

function updateTextAreaRows() {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
}

textArea.addEventListener("input", () => {
  updateTextAreaRows();
});

// LET THE FOCUS STAY ON THE INPUT ALL THE TIME
// textArea.addEventListener("blur", () => {
//   setTimeout(() => textArea.focus(), 1000);
// });


textArea.addEventListener("input", () => {
    textArea.value = textArea.value.replace("SAY SOMETHING", "");
    // WRITE THE PLACEHOLDER AUTOMATICALLY IF THE INPUT IS EMPTY
    // if (textArea.value.trim() === "") {
    //     textArea.value = "SAY SOMETHING";
    // }
    updateTextAreaRows();
});

window.addEventListener("load", () => {
    textArea.value = "SAY SOMETHING";
    updateTextAreaRows();
    textArea.focus();
});