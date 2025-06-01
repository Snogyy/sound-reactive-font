const sizeInput = document.getElementById("size");
sizeInput.addEventListener("input", (e)=>{
    const scale = parseFloat(e.target.value);
    document.getElementById("app").style.fontSize = `${scale}rem`;
});
window.addEventListener("load", ()=>{
    document.getElementById("size").value = 3.5;
    document.getElementById("sensibility").value = 50;
});

//# sourceMappingURL=memoire-victor.d2303419.js.map
