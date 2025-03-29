let workTime = 25 * 60; // 25 minutes in seconds
let breakTime = 5 * 60; // 5 minutes in seconds
let isBreak = false;
let timer;
let isRunning = false;

// DOM elements
const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const status = document.getElementById('status');

// Format time as mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Start or pause the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startBtn.textContent = "Pause";
        timer = setInterval(updateTime, 1000);
    } else {
        isRunning = false;
        startBtn.textContent = "Resume";
        clearInterval(timer);
    }
}

// Update the timer each second
function updateTime() {
    if (isBreak) {
        if (breakTime > 0) {
            breakTime--;
            timeDisplay.textContent = formatTime(breakTime);
        } else {
            clearInterval(timer);
            status.textContent = "Take a Break!";
            isBreak = false;
            startBtn.textContent = "Start";
            isRunning = false;
            breakTime = 5 * 60;
        }
    } else {
        if (workTime > 0) {
            workTime--;
            timeDisplay.textContent = formatTime(workTime);
        } else {
            clearInterval(timer);
            status.textContent = "Back to Work!";
            isBreak = true;
            startBtn.textContent = "Start";
            isRunning = false;
            workTime = 25 * 60;
        }
    }
}

// Reset the timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = "Start";
    status.textContent = "Focus";
    timeDisplay.textContent = formatTime(workTime);
    workTime = 25 * 60;
    breakTime = 5 * 60;
}

// Event listeners
startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
