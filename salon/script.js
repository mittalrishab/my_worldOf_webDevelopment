//transition for change for dark or light mode;
let butt = document.getElementById("cir");
let bgbut = document.getElementById("mode");
let foo = document.querySelector(".footer");
let contain=document.querySelector(".navcontainer");
let main=document.querySelector("main");
let boxes=document.getElementsByClassName("box");
let current = "light";
function trans() {
    if (current === "dark") {
        butt.style.animationName = "trans";
        butt.style.animationDuration = "1s";
        butt.style.animationTimingFunction = "ease-in-out";
        butt.style.animationDirection = "normal";
        butt.style.animationFillMode = "forwards";
        butt.style.transition = "all 1s ease-in-out";
        butt.style.backgroundColor = "rgb(105, 107, 107)"
        foo.style.backgroundColor = "grey";
        foo.style.transition = "all 1s ease-in-out";
        contain.style.backgroundColor = "#4b4c50";
        contain.style.transition = "all 1s ease-in-out";
        main.style.backgroundColor = "#4b4c50";
        main.style.transition = "all 1s ease-in-out";
        boxes[0].style.backgroundColor = "rgb(185, 186, 189)";
        boxes[0].style.transition = "all 1s ease-in-out";
        boxes[1].style.backgroundColor = "rgb(185, 186, 189)";
        boxes[1].style.transition = "all 1s ease-in-out";
        current = "light";
    }
    else if (current === "light") {
        butt.style.animationName = "transrev";
        butt.style.animationDuration = "1s";
        butt.style.animationTimingFunction = "ease-in-out";
        butt.style.animationDirection = "normal";
        butt.style.animationFillMode = "forwards";
        butt.style.transition = "all 1s ease-in-out";
        butt.style.backgroundColor = "rgba(7, 57, 222, 0.743)"
        foo.style.transition = "all 1s ease-in-out";
        foo.style.backgroundColor = "rgb(240, 32, 150)";
        contain.style.backgroundColor = "rgb(162, 95, 226)";
        contain.style.transition = "all 1s ease-in-out";
        main.style.backgroundColor = "rgb(162, 95, 226)";
        main.style.transition = "all 1s ease-in-out";
        boxes[0].style.backgroundColor = "rgb(115, 156, 245)";
        boxes[0].style.transition = "all 1s ease-in-out";
        boxes[1].style.backgroundColor = "rgb(115, 156, 245)";
        boxes[1].style.transition = "all 1s ease-in-out";
        current = "dark";
        
    }
}

butt.addEventListener("click", trans);