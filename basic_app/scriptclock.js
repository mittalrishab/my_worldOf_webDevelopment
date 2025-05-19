const hourValue = document.getElementById("digital-clock-hour-value");
const minuteValue = document.getElementById("digital-clock-minute-value");
const secondValue = document.getElementById("digital-clock-second-value");

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    // 12-hour format with leading zero
    hours = hours % 12 || 12; // 12 instead of 0 for midnight/noon
    hourValue.textContent = hours < 10 ? "0" + hours : hours;
    minuteValue.textContent = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    secondValue.textContent = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
}

// Initial call to display time instantly
updateClock();
const digitalClockInterval = setInterval(updateClock, 1000);

// Optional: Stop the clock after 70 seconds
setTimeout(() => {
    clearInterval(digitalClockInterval);
}, 70000);
