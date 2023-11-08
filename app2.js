const bells = new Audio('./sounds/bell.wav'); // assign path of the bell sound as a parameter
const startBtn = document.querySelector('.btn-start'); // class selectors to update elements on the web page
const session = document.querySelector('.minutes'); 
let myInterval; // instantiate myInterval
let state = true; // defines when the application is running
let workSeconds = "120", breakSeconds = "60";

// start function
function start() {
myInterval = setInterval(workCountDown, 1000);
}
// stop function
function stop() {
clearInterval(myInterval);
}
// reset function; calls stop, save which re-stores the values of user inputs and then starts again.
function reset() {
stop();
save();
start();
}
// save function that saves the values of user inputs
function save() {
workSeconds =
  parseInt(document.getElementById("TaskTime").value || 120, 10) * 60;
breakSeconds =
  parseInt(document.getElementById("BreakTime").value || 60, 10) * 60;
}

// working count down function
function workCountDown() {
// counting down work seconds
workSeconds--;
// showing work seconds in "0:0" format:
document.getElementById("timer").innerText =
  Math.floor(workSeconds / 60).toString() +
  ":" +
  (workSeconds % 60).toString();

// if workSeconds reaches to zero, stops the workInterval and starts the breakInterval:
if (workSeconds === 0) {
  console.log("relaxing...");
  clearInterval(xInterval);
  xInterval = setInterval(breakCountDown, 1000);
}
}

// breaking count down function
function breakCountDown() {
// counting down break seconds
breakSeconds--;
// showing break seconds in "0:0" format:
document.getElementById("timer").innerText =
  Math.floor(breakSeconds / 60).toString() +
  ":" +
  (breakSeconds % 60).toString();

// if breakSeconds reaches to zero, stops the breakInterval, resets the variables to initial values by calling save function and starts the workInterval again:
if (breakSeconds === 0) {
  console.log("ready to work...");
  reset();
}
}

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", (e) => {
isStarted = !isStarted;
if (isStarted) {
  save();
  start();
  startButton.textContent = "Stop";
} else {
  stop();
  startButton.textContent = "Start";
  document.getElementById("timer").innerText = 0;
}
});