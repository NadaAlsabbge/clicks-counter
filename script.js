var counterVal = 0;

function decrementClick() {
    updateDisplay(++counterVal);
}

function incrementClick() {
    updateDisplay(--counterVal);
}

function updateDisplay(values) {
    document.getElementById("counter-label").innerHTML = values;
}