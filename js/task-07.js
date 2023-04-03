const inputId = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputId.addEventListener("input", onInput);

function onInput() {
    text.style.fontSize = `${inputId.value}px`;
    console.log(inputId.value);
}
