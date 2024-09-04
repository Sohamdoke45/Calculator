function clearScreen() {
    document.getElementById('screen').value = "";
}

function deleteLast() {
    let screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('screen').value += number;
}

function appendOperator(operator) {
    document.getElementById('screen').value += operator;
}

function calculate() {
    let screen = document.getElementById('screen').value;
    try {
        document.getElementById('screen').value = eval(screen);
    } catch (e) {
        document.getElementById('screen').value = "Error";
    }
}
