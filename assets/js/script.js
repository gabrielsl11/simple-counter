const value = document.getElementById('value');
const plus_btn = document.getElementById('plus');
const minus_btn = document.getElementById('minus');
const reset_btn = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
}

let count = 0;
let intervalId = 0;

plus_btn.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count +=1
        updateValue()
    }, 100);
});

minus_btn.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1
        updateValue()
    }, 100);
});

reset_btn.addEventListener('click', () => {
    count = 0;
    updateValue()
})

document.addEventListener('mouseup', () => clearInterval(intervalId));