let optionn = document.getElementsByClassName("option");
let boxed = document.querySelector(".box");
let sels = document.querySelectorAll(".sel");
let cross=document.getElementById("cross");
let circle=document.getElementById("circle");

function srsel(bbr) {
    bbr.style.visibility = "visible";
    bbr.style.transition = "all 1s linear";
    bbr.style.opacity = "1";
}

function clickani(elebox) {
    elebox.style.backgroundColor = "red";
    elebox.style.transform = "scale(0.8)";
    elebox.style.transition = "all 0.6s ease-in-out";
    setTimeout(() => {
        elebox.style.transform = "scale(1)";
        elebox.style.backgroundColor = "crimson";
    }, 400);
}

for (let i = 0; i < 9; i++) {
    optionn[i].addEventListener("click", function () {
        clickani(optionn[i]);
        srsel(sels[i]);
    });
}
function addcross(ele) {
    ele.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#7fff00" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;
}
function addcircle(ele) {
    ele.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#7fff00" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`;
}
for (let i = 0; i < 9; i++) {
    let cross = sels[i].firstElementChild;
    let cirs = sels[i].lastElementChild;
    cross.addEventListener("click", function () { addcross(sels[i]) });
    cirs.addEventListener("click", function () { addcircle(sels[i]) });
}


