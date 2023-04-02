const userName = document.querySelector("#name-input");
const dispName = document.querySelector('#name-output');
userName.addEventListener("input", onInput);

function onInput(evt) {
    const evtValue = evt.currentTarget.value;
    dispName.textContent = evtValue;
    console.log(evtValue);
}