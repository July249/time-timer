const $timer = document.querySelector("#timer-display");
const $buttons = document.querySelector("#btns-container");

/* timer display elements */
const $hourDisplay = $timer.querySelector(".hour-display .timer-counter");
const $minuteDisplay = $timer.querySelector(".minute-display .timer-counter");
const $secondDisplay = $timer.querySelector(".second-display .timer-counter");

const $displays = [$hourDisplay, $minuteDisplay, $secondDisplay];

/* timer input elements */
const $hourInput = $timer.querySelector("#hour-input");
const $minuteInput = $timer.querySelector("#minute-input");
const $secondInput = $timer.querySelector("#second-input");

const $inputs = $timer.querySelectorAll(".timer-input");

/* button NodeList */
const $controllerBtns = $buttons.querySelectorAll("button");

function activeInput() {
  $;
}
