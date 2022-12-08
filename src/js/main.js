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

/* functions */

/* 요소 활성화 기능 */
function activeInput() {
  $displays.forEach(($display) => {
    $display.classList.remove("active");
  });
  $inputs.forEach(($input) => {
    $input.classList.add("active");
  });
}

function activeDisplay() {
  $inputs.forEach(($input) => {
    $input.classList.remove("active");
  });
  $displays.forEach(($display) => {
    $display.classList.add("active");
  });
}

function alertDisplay() {
  $displays.forEach(($display) => {
    $display.classList.add("alert");
  });
}
