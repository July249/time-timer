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
/* 타이머 카운트다운 기능 */
let timeValue;

/* 타이머 동작 함수 */
function countDown(time, run) {
  if (time > 1000 && run) {
    /* 타이머 동작 */
    timeDistributer(milliSecondsUnitTransfer(time - 1000));
    timeValue = setTimeout(() => {
      console.log(time - 1000);
      countDown(time - 1000, true);
    }, 1000);
  } else if (time < 60 * 1000 && run) {
    alertDisplay();
  } else if (!run) {
    /* 타이머 일시 정지 */
    clearTimeout(timeValue);
    /* timeValue 초기화 */
    timeValue = 0;
    return timeValue;
  } else if (time === 0) {
    alert("Time Over");
  }
}

/* 밀리세컨드 단위를 시:분:초로 변환 */
function milliSecondsUnitTransfer(time) {
  const hour = parseInt(time / 3600000);
  const min = parseInt((time - hour * 3600000) / 60000);
  const sec = parseInt((time - hour * 3600000 - min * 60000) / 1000);

  return { hour, min, sec };
}

/* 시간을 각 요소에 전달해주는 함수 */
function timeDistributer({ hour, min, sec }) {
  $hourDisplay.textContent = hour;
  $minuteDisplay.textContent = min;
  $secondDisplay.textContent = sec;

  $hourInput.value = hour;
  $minuteInput.value = min;
  $secondInput.value = sec;
}

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
