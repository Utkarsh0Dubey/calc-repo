function clearDisplay() {
    let display = document.getElementById('disp');
    display.value = "";
}

function deleteLast() {
    let display = document.getElementById('disp');
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    let display = document.getElementById('disp');
    display.value += number
}

function appendOperator(operator) {
    let display = document.getElementById("disp");
    display.value += operator;
}

function calculateResult() {
    let display = document.getElementById("disp");
    let result = eval(display.value);
    display.value = result;
}

function CalculateSin() {
    let display = document.getElementById('disp');
    let argument = parseFloat(display.value);
    let result = Math.sin(argument);
    display.value = String(result);
}


