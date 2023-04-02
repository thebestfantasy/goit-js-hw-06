const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const value = document.querySelector('#value');

decrementBtn.addEventListener("click", ofClick)
incrementBtn.addEventListener("click", onClick);

let counterValue = 0;

function onClick() {
    counterValue += 1;
    value.textContent = counterValue;
}

function ofClick(event) {
    counterValue -= 1;
    value.textContent = counterValue;
    console.log(event.currentTarget);
}

