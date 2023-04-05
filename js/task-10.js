function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("#controls").firstElementChild;
const mainDiv = document.querySelector("#boxes");
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", deleteBoxes);
input.addEventListener("input", onInput);

function onInput() {
  const amount = parseInt(input.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  let size = 30;
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.textContent = "box";
    div.style.outline = "1px solid black";
    size += 10;
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.push(div);
  }
  mainDiv.append(...boxes);
}

function deleteBoxes() {
  mainDiv.innerHTML = "";
}
