// THEME SWITCHER

const themSwitcher = document.querySelectorAll(".radio");
const defaultThem = localStorage.getItem("radio") || "them-1";
setThem(defaultThem);

themSwitcher.forEach((button) => {
  button.addEventListener("click", (e) => {
    setThem(e.target.value);
  });
});
function setThem(radio) {
  radio = radio || "them-1";
  document.documentElement.className = radio;
  localStorage.setItem("radio", radio);
  themSwitcher.value = radio;
}

// CALCULATOR

const btns = document.querySelectorAll(".button");
const display = document.querySelector(".display-input");

const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");

const equals = document.querySelector("#equals");
const resetButton = document.querySelector("#resetButton");
const deleteButton = document.querySelector("#deleteButton");

let clearDisplay = true;
let oldNum;
let newNum;
let result;
let operator;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (clearDisplay) {
      display.value = "";
      clearDisplay = false;
    }

    let valor = btn.innerHTML;
    if (!isNaN(+valor)) {
      display.value += valor;
    } else if (valor === ".") {
      display.value += ".";
    }
  });
});

resetButton.addEventListener("click", () => {
  newNum = 0;
  oldNum = 0;
  result = 0;
  display.value = 0;
  clearDisplay = true;
});

deleteButton.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

addition.addEventListener("click", () => {
  operator = "plus";
  oldNum = +display.value;
  blink();
  clearDisplay = true;
});

subtraction.addEventListener("click", () => {
  operator = "minus";
  oldNum = +display.value;
  blink();
  clearDisplay = true;
});

multiplication.addEventListener("click", () => {
  operator = "times";
  oldNum = +display.value;
  blink();
  clearDisplay = true;
});

division.addEventListener("click", () => {
  operator = "divided";
  oldNum = +display.value;
  blink();
  clearDisplay = true;
});

equals.addEventListener("click", () => {
  newNum = +display.value;
  result = +oldNum + +newNum;

  switch (operator) {
    case "plus":
      result = +oldNum + +newNum;
      break;

    case "minus":
      result = oldNum - newNum;
      break;

    case "times":
      result = oldNum * newNum;
      break;

    case "divided":
      result = oldNum / newNum;
      break;

    default:
      result = newNum;
  }
  blink();
  display.value = result;
  oldNum = 0;
  newNum = result;
});

function blink() {
  display.style.visibility = "hidden";
  setTimeout(() => {
    display.style.visibility = "initial";
  }, 100);
}
