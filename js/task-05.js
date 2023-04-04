const userName = document.querySelector("#name-input");
const dispName = document.querySelector('#name-output');
userName.addEventListener("input", onInput);

function onInput(evt) {
    const evtValue = evt.currentTarget.value;
    if (evtValue === "") {
        dispName.textContent = "Anonymous!"
    } else {
        dispName.textContent = evtValue;
    }
}