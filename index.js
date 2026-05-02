let increaseBtn = document.getElementById("increase-btn");
let decreaseBtn = document.getElementById("decrease-btn");
let resetBtn = document.getElementById("reset-btn");
let countEl = document.getElementById("count-el")

let count = 0;

function increaseBtnElement() {
    count ++;
    countEl.textContent = count;
}

function resetBtnElement() {
    count = 0;
    countEl.textContent = count;
}

function decreaseBtnElement() {
    if(count > 0) {
        count --;
    }
    countEl.textContent = count;
}
