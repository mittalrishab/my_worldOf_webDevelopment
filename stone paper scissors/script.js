let myscore = document.getElementById("myscore");
let computerscore = document.getElementById("cscore");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let mychoice = "";
let compchoice = "";
let reset = document.getElementById("reset");
let result = document.getElementById("res");
let mode = document.getElementById("mode");
let body = document.getElementById("body");
let symb = document.getElementsByClassName("symbols");
let h1 = document.getElementById("h1");

// rock.addEventListener("click",function(){
//     mychoice="rock";
// });
// paper.addEventListener("click",function(){
//     mychoice="paper";
// });
// scissors.addEventListener("click",function(){
//     mychoice="scissors";
// });
// console.log(mychoice);

function choice_my(ele) {
    if (ele == rock) {
        mychoice = "rock";
    }
    else if (ele == scissors) {
        mychoice = "scissors";
    }
    else {
        mychoice = "paper";
    }
    console.log("mychoice", mychoice);
}

function choice_comp() {
    let n = Math.ceil(Math.random() * 3);
    if (n == 1) {
        compchoice = "rock";
    }
    else if (n == 2) {
        compchoice = "paper";
    }
    else {
        compchoice = "scissors";
    }
    console.log("compchoice", compchoice);
}

function results(mychoice, compchoice) {
    if (mychoice == compchoice) {
        result.innerHTML = `Oh! its a tie`;
        result.style.backgroundColor = "rgb(61, 111, 238)";
    }
    else if (mychoice == "rock") {
        if (compchoice == "paper") {
            computerscore.innerHTML++;
            result.innerHTML = `oops you lost:- ${compchoice} beats ${mychoice}`;
            result.style.backgroundColor = "crimson";
        }
        else if (compchoice == "scissors") {
            myscore.innerHTML++;
            result.innerHTML = `congrats you won:- ${mychoice} beats ${compchoice}`;
            result.style.backgroundColor = "greenyellow";
        }
    }
    else if (mychoice == "paper") {
        if (compchoice == "scissors") {
            computerscore.innerHTML++;
            result.innerHTML = `oops you lost:- ${compchoice} beats ${mychoice}`;
            result.style.backgroundColor = "crimson";
        }
        else if (compchoice == "rock") {
            myscore.innerHTML++;
            result.innerHTML = `congrats you won:- ${mychoice} beats ${compchoice}`;
            result.style.backgroundColor = "greenyellow";
        }
    }
    else {
        if (compchoice == "rock") {
            computerscore.innerHTML++;
            result.innerHTML = `oops you lost:- ${compchoice} beats ${mychoice}`;
            result.style.backgroundColor = "crimson";

        }
        else if (compchoice == "paper") {
            myscore.innerHTML++;
            result.innerHTML = `congrats you won:- ${mychoice} beats ${compchoice}`;
            result.style.backgroundColor = "greenyellow";
        }
    }
}
function changemode() {
    if (mode.innerHTML === "dark") {
        for (let i = 0; i < 3; i++) {
            symb[i].style.backgroundColor = "rgb(121, 119, 117)";
            symb[i].style.transition = "all 1s ease-in-out"; // Add this line
        }
        body.style.backgroundColor = "rgb(188, 188, 188)";
        body.style.transition = "all 1s ease-in-out";
        mode.innerHTML = "light";
        mode.style.transition = "all 1s ease-in-out";
        mode.style.backgroundColor="grey";
        h1.style.color = "black";
        h1.style.transition = "all 1s ease-in-out";
        result.style.backgroundColor = "grey";
        result.style.transition = "all 1s ease-in-out";
        reset.style.backgroundColor="rgb(188, 188, 188)"
        reset.style.transition = "all 1s ease-in-out";
    } else if (mode.innerHTML === "light") {
        for (let i = 0; i < 3; i++) {
            symb[i].style.backgroundColor = "bisque";
            symb[i].style.transition = "all 1s ease-in-out"; // Add this line
        }
        body.style.backgroundColor = "rgb(255, 196, 189)";
        body.style.transition = "all 1s ease-in-out";
        mode.innerHTML = "dark";
        h1.style.color = "blue";
        mode.style.transition = "all 1s ease-in-out";
        mode.style.backgroundColor="rgb(242, 155, 25)";
        h1.style.transition = "all 1s ease-in-out";
        result.style.backgroundColor = "rgb(61, 111, 238)";
        result.style.transition = "all 1s ease-in-out";
        reset.style.backgroundColor="rgb(255, 249, 127)"
        reset.style.transition = "all 1s ease-in-out";
    }
}



rock.addEventListener("click", function () { choice_my(rock); choice_comp(); results(mychoice, compchoice); });
paper.addEventListener("click", function () { choice_my(paper); choice_comp(); results(mychoice, compchoice); });
scissors.addEventListener("click", function () { choice_my(scissors); choice_comp(); results(mychoice, compchoice); });
reset.addEventListener("click", () => {
    myscore.innerHTML = 0;
    computerscore.innerHTML = 0;
    result.innerHTML = "Let's Start The Game";
    result.style.backgroundColor = "rgb(61, 111, 238)";
});

mode.addEventListener("click", function () {
    changemode();
});
