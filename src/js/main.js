const $timer = document.querySelector("#timer-display");
const $buttons = document.querySelector("#btns-container");

/* timer display number */
const $hour = $timer.querySelector(".hour-display .timer-counter");
const $minute = $timer.querySelector(".minute-display .timer-counter");
const $second = $timer.querySelector(".second-display .timer-counter");

/* timer display elements */
const $hourDisplay = $timer.querySelector(".hour-display");
const $minuteDisplay = $timer.querySelector(".minute-display");
const $secondDisplay = $timer.querySelector(".second-display");

const $displays = [$hourDisplay, $minuteDisplay, $secondDisplay];

/* timer input elements */
const $hourInput = $timer.querySelector("#hour-input");
const $minuteInput = $timer.querySelector("#minute-input");
const $secondInput = $timer.querySelector("#second-input");

const $inputs = $timer.querySelectorAll(".timer-input");

/* button NodeList */
const $controllerBtns = $buttons.querySelectorAll("button");

/* DOM element event functions */
/* button event control */
$controllerBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const target = e.currentTarget;
    if (target.classList.contains("play-btn")) {
      timerStart();
    } else if (target.classList.contains("pause-btn")) {
      timerStandBy();
    }
  });
});

/* functions */
/* 타이머 시작시 동작하는 함수 */
function timerStart() {
  activeDisplay();

  const hour = $hourDisplay.textContent;
  const min = $minuteDisplay.textContent;
  const sec = $secondDisplay.textContent;

  const time = hour * 3600000 + min * 60000 + sec * 1000;
  countDown(time, true);
}

/* 타이머 일시 정지시 동작하는 함수 */
function timerStandBy() {
  activeInput();

  let hour = $hourDisplay.textContent;
  let min = $minuteDisplay.textContent;
  let sec = $secondDisplay.textContent;

  const remainTime = hour * 3600000 + min * 60000 + sec * 1000;

  countDown(remainTime, false);
}

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

/* 유효성 검사 */
function hourValidationTest(value) {
  const strValue = value.toString();

  if (strValue.length === 0) {
    return true;
  } else if (strValue.length === 1) {
    const regEx = /[0-9]/g;
    return regEx.test(strValue);
  } else if (strValue.length === 2) {
    const regEx = /([1][0-9])|([2][0-4])/g;
    return regEx.test(strValue);
  } else {
    return false;
  }
}

function minuteValidationTest(value) {
  const strValue = value.toString();

  if (strValue.length === 0) {
    return true;
  } else if (strValue.length === 1) {
    const regEx = /^[0-9]/g;
    return regEx.test(strValue);
  } else if (strValue.length === 2) {
    const regEx = /[0-5][0-9]/g;
    return regEx.test(strValue);
  } else {
    return false;
  }
}

function secondValidationTest(value) {
  const strValue = value.toString();

  if (strValue.length === 0) {
    return false;
  } else if (strValue.length === 1) {
    const regEx = /^[0-9]/g;
    return regEx.test(strValue);
  } else if (strValue.length === 2) {
    const regEx = /[0-5][0-9]/g;
    return regEx.test(strValue);
  } else {
    return false;
  }
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
