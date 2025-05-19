// Calculator Elements
const keypad = document.getElementsByClassName("pad");
const display = document.querySelector(".display");
const backspace = document.querySelector("#backspace");
const box = document.querySelector(".box");
const mode = document.querySelector(".mode");
const k = document.querySelectorAll(".k");

// State
let operator = "";
let isDarkMode = false;

// Utility Functions
function change(ele) {
    ele.style.transform = "scale(0.9)";
    ele.style.transition = "all 0.2s ease-in-out";
    setTimeout(() => {
        ele.style.transform = "scale(1)";
    }, 50);
}

// Mode Functions
function setLightMode() {
    box.style.transition = "all 1s";
    box.style.backgroundColor = "white";
    display.style.backgroundColor = "rgb(208, 197, 197)";
    display.style.color = "black";
    for (let i = 0; i < k.length; i++) {
        k[i].style.backgroundColor = "rgb(208, 197, 197)";
        k[i].style.color = "red";
    }
    document.body.style.backgroundColor = "#f2f2f2";
    isDarkMode = false;
}

function setDarkMode() {
    box.style.transition = "all 1s";
    box.style.backgroundColor = "#222";
    display.style.backgroundColor = "#333";
    display.style.color = "white";
    for (let i = 0; i < k.length; i++) {
        k[i].style.backgroundColor = "#444";
        k[i].style.color = "#00ffd0";
    }
    document.body.style.backgroundColor = "#181818";
    isDarkMode = true;
}

mode.addEventListener("click", function () {
    if (isDarkMode) setLightMode();
    else setDarkMode();
});

// Set initial mode
setLightMode();

// Calculator Logic
function clearDisplay() {
    display.innerHTML = "";
    operator = "";
}

function appendToDisplay(val) {
    // Prevent multiple operators in a row
    if ("+-x/".includes(val) && display.innerHTML === "") return;
    // Prevent two operators in a row
    if ("+-x/".includes(val) && "+-x/".includes(display.innerHTML.slice(-1))) {
        display.innerHTML = display.innerHTML.slice(0, -1) + val;
        operator = val;
        return;
    }
    display.innerHTML += val;
    if ("+-x/".includes(val)) operator = val;
}

function handleBackspace() {
    let current = display.innerHTML;
    if (current.length > 0) {
        // Remove last character
        display.innerHTML = current.slice(0, -1);
        // If last char was operator, clear operator state
        if ("+-x/".includes(current.slice(-1))) operator = "";
    }
}

function calculateResult() {
    let expr = display.innerHTML.replace(/x/g, "*");
    try {
        // Only evaluate if expression is valid
        // Prevent eval on incomplete expressions
        if (expr.match(/^[\d\(\)\+\-\*\/\. ]+$/) && !"+-*/.".includes(expr.slice(-1))) {
            let result = eval(expr);
            if (typeof result === "number" && !isNaN(result) && isFinite(result)) {
                display.innerHTML = result;
            } else {
                display.innerHTML = "Error";
            }
        }
    } catch {
        display.innerHTML = "Error";
    }
}

// Keypad Clicks
for (let i = 0; i < keypad.length; i++) {
    keypad[i].addEventListener("click", () => {
        change(keypad[i]);
        let val = keypad[i].innerText.trim();
        if (val === "C") clearDisplay();
        else if (keypad[i] === backspace) handleBackspace();
        else if (val === "=") calculateResult();
        else appendToDisplay(val);
    });
}

// Keyboard Support
document.addEventListener("keydown", function (e) {
    if (e.key >= "0" && e.key <= "9") appendToDisplay(e.key);
    else if ("+-*/".includes(e.key)) appendToDisplay(e.key === "*" ? "x" : e.key);
    else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        calculateResult();
    }
    else if (e.key === "Backspace") handleBackspace();
    else if (e.key === "Delete") clearDisplay();
    else if (e.key === "(" || e.key === ")") appendToDisplay(e.key);
});

// Optional: Prevent selecting text on double-click
display.onselectstart = () => false;
