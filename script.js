let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let isRunning = false;
let toggleBtn = document.getElementById("toggleButton");
let lapsContainer = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function startTimer() {
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function toggleStartStop() {
  if (!isRunning) {
    startTimer();
    toggleBtn.innerText = "Stop";
    isRunning = true;
  } else {
    stopTimer();
    toggleBtn.innerText = "Continue";
    isRunning = false;
  }
}

function reset() {
  stopTimer();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  toggleBtn.innerText = "Start";
  isRunning = false;
  lapsContainer.innerHTML = "";
}

function lap() {
  if (!isRunning && (hours === 0 && minutes === 0 && seconds === 0)) return;
  let lapTime = display.innerText;
  const li = document.createElement("li");
  li.innerText = `Lap: ${lapTime}`;
  lapsContainer.appendChild(li);
}
