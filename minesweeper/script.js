let array = document.getElementsByClassName("box");
let box = document.querySelector(".gamebox");
let arr = new Array(8).fill(null).map(() => new Array(8).fill(null));
let m = 0;
let flag = '<svg class="flag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#00a303" d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 64 0 368 0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z"/></svg>';
let bomb = '<svg class="bomb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ff0000" d="M459.1 52.4L442.6 6.5C440.7 2.6 436.5 0 432.1 0s-8.5 2.6-10.4 6.5L405.2 52.4l-46 16.8c-4.3 1.6-7.3 5.9-7.2 10.4c0 4.5 3 8.7 7.2 10.2l45.7 16.8 16.8 45.8c1.5 4.4 5.8 7.5 10.4 7.5s8.9-3.1 10.4-7.5l16.5-45.8 45.7-16.8c4.2-1.5 7.2-5.7 7.2-10.2c0-4.6-3-8.9-7.2-10.4L459.1 52.4zm-132.4 53c-12.5-12.5-32.8-12.5-45.3 0l-2.9 2.9C256.5 100.3 232.7 96 208 96C93.1 96 0 189.1 0 304S93.1 512 208 512s208-93.1 208-208c0-24.7-4.3-48.5-12.2-70.5l2.9-2.9c12.5-12.5 12.5-32.8 0-45.3l-80-80zM200 192c-57.4 0-104 46.6-104 104l0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8c0-75.1 60.9-136 136-136l8 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-8 0z"/></svg>';
let f = document.getElementById("f");
let gameOver = false;
let revealedCells = 0;
const totalSafeCells = 54; // 8x8 grid - 10 bombs

// Initialize grid
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        arr[i][j] = array[m++];
        arr[i][j].value = "S"; // S for safe, B for bomb
    }
}

// Place bombs
let bombsPlaced = 0;
while (bombsPlaced < 10) {
    let l = Math.floor(Math.random() * 8);
    let m = Math.floor(Math.random() * 8);
    if (arr[l][m].value !== "B") {
        arr[l][m].value = "B";
        bombsPlaced++;
    }
}

// Flag toggle
f.innerHTML = flag;
f.addEventListener("click", () => {
    f.classList.toggle("flag-active");
    f.value = f.value === "off" ? "on" : "off";
});

// Game functions
function revealAllBombs() {
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            if (arr[x][y].value === "B") {
                arr[x][y].innerHTML = bomb;
                arr[x][y].style.backgroundColor = "#ff9999";
            }
        }
    }
}

function checkWin() {
    if (revealedCells === totalSafeCells) {
        gameOver = true;
        box.innerHTML = '<div class="divs">YOU WIN!</div>';
        box.style.display = "flex";
    }
}

function countAdjacentBombs(i, j) {
    let count = 0;
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            if (x === 0 && y === 0) continue;
            let ni = i + x;
            let nj = j + y;
            if (ni >= 0 && ni < 8 && nj >= 0 && nj < 8 && arr[ni][nj].value === "B") {
                count++;
            }
        }
    }
    return count;
}

function recurcheck(i, j) {
    if (i < 0 || j < 0 || i >= 8 || j >= 8 || 
        arr[i][j].style.backgroundColor === "rgb(23, 243, 173)") return;

    arr[i][j].style.boxShadow = "none";
    arr[i][j].style.backgroundColor = "rgb(23, 243, 173)";
    revealedCells++;
    
    const bombCount = countAdjacentBombs(i, j);
    if (bombCount > 0) {
        arr[i][j].innerHTML = bombCount;
        return;
    }

    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            if (x === 0 && y === 0) continue;
            recurcheck(i + x, j + y);
        }
    }
}

// Add event listeners
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        arr[i][j].addEventListener("click", () => {
            if (gameOver || arr[i][j].innerHTML === flag) return;

            if (f.value === "on") {
                arr[i][j].innerHTML = arr[i][j].innerHTML === flag ? "" : flag;
                return;
            }

            if (arr[i][j].value === "B") {
                gameOver = true;
                revealAllBombs();
                setTimeout(() => {
                    box.innerHTML = '<div class="divs">YOU LOSE</div>';
                    box.style.display = "flex";
                }, 1000);
                return;
            }

            if (arr[i][j].style.backgroundColor !== "rgb(23, 243, 173)") {
                recurcheck(i, j);
                checkWin();
            }
        });
    }
}