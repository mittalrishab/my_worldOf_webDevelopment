//if braces at end then nan comes if backspace
//add keyboard support
//dark and light mode is remaining
let keypad = document.getElementsByClassName("pad");
let display = document.querySelector(".display");
let backspace = document.querySelector("#backspace");
let box = document.querySelector(".box");
let mode=document.querySelector(".mode");
let k=document.querySelectorAll(".k");
let string1 = "";

let result;

function change(ele) {
    ele.style.transform = "scale(0.9)";
    ele.style.transition = "all 0.2s ease-in-out";
    setTimeout(() => {
        ele.style.transform = "scale(1)";
    }, 200);

}
function bgchange(){
    box.style.transition="all 1s ease-in-out";
    box.style.backgroundColor="white";
    display.style.backgroundColor="rgb(250, 150, 150)";
    display.style.transition="all 1s ease-in-out";
    for(let i=0;i<19;i++){
        k[i].style.backgroundColor="rgb(250, 190, 190)";
        k[i].style.color="red";
        k[i].style.transition="all 0.2s ease-in-out";
    }
}

mode.addEventListener("click",bgchange);

for (let i = 0; i < 19; i++) {
    keypad[i].addEventListener("click", () => {
        change(keypad[i]);
        if (keypad[i].innerHTML == "C") {
            display.innerHTML = "";
        }
        else if (keypad[i] == backspace) {
            keypad[i].style.backgroundColor="rgb(173, 186, 186)";
            setTimeout(() => {
                keypad[i].style.backgroundColor = "azure";
            }, 200);
            display.innerHTML = Math.floor(display.innerHTML / 10);
            if (display.innerHTML == "0") {
                display.innerHTML = "";
            }
        }
        else if (keypad[i].innerHTML <= 9 && keypad[i].innerHTML >= 0 || keypad[i].innerHTML == "(" || keypad[i].innerHTML == ")") {
            display.innerHTML += string1 + keypad[i].innerHTML;
            keypad[i].style.backgroundColor = "rgb(65, 65, 65)";
            setTimeout(() => {
                keypad[i].style.backgroundColor = "rgb(111, 111, 111)";
            }, 200);
        }
        else if (keypad[i].innerHTML == "+" || keypad[i].innerHTML == "-" || keypad[i].innerHTML == "x" || keypad[i].innerHTML == "/") {
            keypad[i].style.backgroundColor = "green";
            display.innerHTML += string1 + keypad[i].innerHTML;
            setTimeout(() => {
                keypad[i].style.backgroundColor = "rgb(111, 111, 111)";
            }, 200);
            operator=keypad[i].innerHTML;
        }
        else if (keypad[i].innerHTML == "=") {
            keypad[i].style.backgroundColor="rgb(21, 227, 159)";
            setTimeout(() => {
                keypad[i].style.backgroundColor = "aquamarine";
            }, 200);
            if (operator == "+") {
                let array1=display.innerHTML.split("+");
                let value1=Number(array1[0]); //converting to number
                let value2=Number(array1[1]);
                result = value1 + value2;
                display.innerHTML = result;
            }
            else if (operator == "-") {
                let array1=display.innerHTML.split("-");
                let value1=Number(array1[0]);
                let value2=Number(array1[1]);
                result = value1 - value2;
                display.innerHTML = result;
            }
            else if (operator == "x") {
                let array1=display.innerHTML.split("x");
                let value1=Number(array1[0]);
                let value2=Number(array1[1]);
                result = value1 * value2;
                display.innerHTML = result;
            }
            else if (operator == "/") {
                let array1=display.innerHTML.split("/");
                let value1=Number(array1[0]);
                let value2=Number(array1[1]);
                result = value1 / value2;
                display.innerHTML = result;
            }
        }
    });

}
