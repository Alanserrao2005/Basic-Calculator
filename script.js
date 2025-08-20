const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// ✅ Keyboard & Direct Typing Support
document.addEventListener("keydown", (event) => {
    if ((event.key >= '0' && event.key <= '9') || "+-*/.".includes(event.key)) {
        // let users type directly
        display.value += event.key;
    } else if (event.key === "Enter") {
        event.preventDefault(); // avoid form submit
        calculateResult();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key.toLowerCase() === "c") {
        clearDisplay();
    }
});
