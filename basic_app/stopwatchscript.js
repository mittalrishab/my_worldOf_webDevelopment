const resetBtn = document.getElementById("stopwatch-reset-btn");
const playBtn = document.getElementById("stopwatch-play-btn");
const stopBtn = document.getElementById("stopwatch-stop-btn");
const timeDisplay = document.getElementById("stopwatch-time-display");

let [swSeconds, swMinutes, swHours] = [0, 0, 0];
let stopwatchTimer = null;

function updateStopwatch() {
    swSeconds++;
    if (swSeconds === 60) {
        swSeconds = 0;
        swMinutes++;
        if (swMinutes === 60) {
            swMinutes = 0;
            swHours++;
            if (swHours === 24) {
                swHours = 0;
            }
        }
    }
    const h = swHours < 10 ? "0" + swHours : swHours;
    const m = swMinutes < 10 ? "0" + swMinutes : swMinutes;
    const s = swSeconds < 10 ? "0" + swSeconds : swSeconds;
    timeDisplay.innerHTML = `${h}:${m}:${s}`;
}

playBtn.addEventListener("click", () => {
    playBtn.style.transform = "scale(0.85)";
    playBtn.style.transition = "all ease-in-out 0.5s";
    playBtn.style.backgroundColor = "rgb(197, 0, 0)";
    setTimeout(() => {
        playBtn.style.transform = "scale(1)";
        playBtn.style.backgroundColor = "red";
    }, 500);
    if (stopwatchTimer !== null) {
        clearInterval(stopwatchTimer);
    }
    stopwatchTimer = setInterval(updateStopwatch, 1000);
});

resetBtn.addEventListener("click", () => {
    resetBtn.style.transform = "scale(0.85)";
    resetBtn.style.transition = "all ease-in-out 0.5s";
    setTimeout(() => {
        resetBtn.style.transform = "scale(1)";
    }, 500);
    clearInterval(stopwatchTimer);
    [swSeconds, swMinutes, swHours] = [0, 0, 0];
    timeDisplay.innerHTML = "00:00:00";
});

stopBtn.addEventListener("click", () => {
    stopBtn.style.transform = "scale(0.85)";
    stopBtn.style.transition = "all ease-in-out 0.5s";
    setTimeout(() => {
        stopBtn.style.transform = "scale(1)";
    }, 500);
    clearInterval(stopwatchTimer);
});
