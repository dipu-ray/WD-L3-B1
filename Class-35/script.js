// Using DOM
let startTime, elapsedTime = 0, timerInterval; // For track the loop of timer
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const lapsContainer = document.getElementById('laps');

// Time duration = MM:SS:MS (Minutes:Seconds:Milliseconds)
function timeToString(time) {
    let mm = Math.floor(time / 60000);
    let ss = Math.floor((time % 60000) / 1000);
    let ms = Math.floor((time % 1000) / 10);
    return `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
}

// Starts the Stopwatch
function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.innerText = timeToString(elapsedTime);
    }, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

// Stop the Stopwatch
function stop() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// Reset the Stopwatch
function reset() {
    clearInterval(timerInterval);
    display.innerText = "00:00:00";
    elapsedTime = 0;
    lapsContainer.innerHTML = '';
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// Records the current time
function lap() {
    if (elapsedTime > 0) {
        const lapDiv = document.createElement('div');
        lapDiv.className = 'lap-item';
        lapDiv.innerHTML = `<span>Lap ${lapsContainer.children.length + 1}</span> <span>${timeToString(elapsedTime)}</span>`;
        lapsContainer.prepend(lapDiv);
    }
}

// Event when click those buttons
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
document.getElementById('resetBtn').addEventListener("click", reset);
document.getElementById('lapBtn').addEventListener("click", lap);