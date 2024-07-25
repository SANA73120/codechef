function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('result');
}
