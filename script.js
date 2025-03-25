function appendNumber(num) {
    document.getElementById("display").value += num;
}
function appendOperator(op) {
    let display = document.getElementById("display");
    if (display.value !== "") {
        display.value += op;
    }
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculateResult() {
    let display = document.getElementById("display");
    try {
        let result = eval(display.value);
        document.getElementById("history").innerHTML += `<br>${display.value} = ${result}`;
        display.value = result;
    } catch {
        display.value = "Error";
    }
}
function clearHistory() {
    document.getElementById("history").innerHTML = "Riwayat Perhitungan";
}
