let counterValue = 0;

const buttonIncr = document.querySelector('button[data-action="increment"]');
const buttonDecr = document.querySelector('button[data-action="decrement"]');

const values = document.querySelector('#value');

buttonIncr.addEventListener("click", () => {
    counterValue += 1;
    values.textContent = counterValue;
})

buttonDecr.addEventListener("click", () => {
    counterValue -= 1;
    values.textContent = counterValue;
})

