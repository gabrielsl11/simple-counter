const value = document.getElementById('value');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');

let updateValue = 0;

plus.addEventListener('click', () => {
    updateValue ++;
    value.innerHTML = updateValue;
})

minus.addEventListener('click', () => {
    updateValue --;
    value.innerHTML = updateValue;
})

reset.addEventListener('click', () => {
    updateValue = 0;
    value.innerHTML = updateValue;
})