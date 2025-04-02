let timeLeft = 25 * 60; // 25 minutes in seconds
let timerId = null;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const toggleButton = document.getElementById('toggle');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

function toggleTimer() {
    if (!isRunning) {
        // Start the timer
        isRunning = true;
        toggleButton.textContent = 'Stop';
        toggleButton.classList.add('running');
        timerId = setInterval(() => {
            timeLeft--;
            updateDisplay();
            
            if (timeLeft === 0) {
                clearInterval(timerId);
                isRunning = false;
                toggleButton.textContent = 'Start';
                toggleButton.classList.remove('running');
                alert('Time is up!');
            }
        }, 1000);
    } else {
        // Stop the timer
        clearInterval(timerId);
        isRunning = false;
        toggleButton.textContent = 'Start';
        toggleButton.classList.remove('running');
    }
}

function resetTimer() {
    clearInterval(timerId);
    isRunning = false;
    timeLeft = 25 * 60;
    toggleButton.textContent = 'Start';
    toggleButton.classList.remove('running');
    updateDisplay();
}

toggleButton.addEventListener('click', toggleTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize display
updateDisplay(); 