const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
    if (textInput.value.length !== Number.parseInt(textInput.dataset.length)) {
        textInput.classList.add("invalid");  
        textInput.classList.remove("valid"); 
    } else {
        textInput.classList.add("valid")
        textInput.classList.remove("invalid"); 
    }
})
