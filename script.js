let firstNumber = null;
let secondNumber = null;
let singleNumber = null;
let result = null;
let lastEnteredOperator = null;


const btn0 = document.querySelector(".btn-0");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");

const btnDiv = document.querySelector(".btn-div");
const btnMul = document.querySelector(".btn-mul");
const btnSub = document.querySelector(".btn-sub");
const btnAdd = document.querySelector(".btn-add");
const btnEquals = document.querySelector(".btn-equals");

const btnclr = document.querySelector(".btn-clr");
const screen = document.querySelector(".screen");

btn0.addEventListener("click", function (e) {
  if (screen.innerText != "+" && screen.innerText != "-" && screen.innerText != "/" && screen.innerText != "*") {
    screen.innerText = screen.innerText + e.target.innerText;
  } else {
    screen.innerText = e.target.innerText
  }
});

btn1.addEventListener("click", function (e) {
  if (screen.innerText != "+" && screen.innerText != "-" && screen.innerText != "/" && screen.innerText != "*") {
    screen.innerText = screen.innerText + e.target.innerText;
  } else {
    screen.innerText = e.target.innerText
  }
});

btn2.addEventListener("click", function (e) {
  if (screen.innerText != "+" && screen.innerText != "-" && screen.innerText != "/" && screen.innerText != "*") {
    screen.innerText = screen.innerText + e.target.innerText;
  } else {
    screen.innerText = e.target.innerText
  }
});

btn3.addEventListener("click", function (e) {
  if (screen.innerText != "+" && screen.innerText != "-" && screen.innerText != "/" && screen.innerText != "*") {
    screen.innerText = screen.innerText + e.target.innerText;
  } else {
    screen.innerText = e.target.innerText
  }
});

btn4.addEventListener("click", function (e) {
  if (screen.innerText != "+" && screen.innerText != "-" && screen.innerText != "/" && screen.innerText != "*") {
    screen.innerText = screen.innerText + e.target.innerText;
  } else {
    screen.innerText = e.target.innerText
  }
});

btn5.addEventListener("click", function (e) {
  if (screen.innerText != "+" && screen.innerText != "-" && screen.innerText != "/" && screen.innerText != "*") {
    screen.innerText = screen.innerText + e.target.innerText;
  } else {
    screen.innerText = e.target.innerText
  }
});

btn6.addEventListener("click", function (e) {
  if (screen.innerText != "+" && screen.innerText != "-" && screen.innerText != "/" && screen.innerText != "*") {
    screen.innerText = screen.innerText + e.target.innerText;
  } else {
    screen.innerText = e.target.innerText
  }
});

btn7.addEventListener("click", function (e) {
  if (screen.innerText != "+" && screen.innerText != "-" && screen.innerText != "/" && screen.innerText != "*") {
    screen.innerText = screen.innerText + e.target.innerText;
  } else {
    screen.innerText = e.target.innerText
  }
});

btn8.addEventListener("click", function (e) {
  if (screen.innerText != "+" && screen.innerText != "-" && screen.innerText != "/" && screen.innerText != "*") {
    screen.innerText = screen.innerText + e.target.innerText;
  } else {
    screen.innerText = e.target.innerText
  }
});

btn9.addEventListener("click", function (e) {
  if (screen.innerText != "+" && screen.innerText != "-" && screen.innerText != "/" && screen.innerText != "*") {
    screen.innerText = screen.innerText + e.target.innerText;
  } else {
    screen.innerText = e.target.innerText
  }
});

btnAdd.addEventListener("click", function (e) {
  if (screen.innerText != "") {
    if (firstNumber == null) {
      firstNumber = screen.innerText
    } else if (secondNumber == null) {
      secondNumber = screen.innerText
      calculate(firstNumber, secondNumber, lastEnteredOperator)
    } else if (firstNumber != null && secondNumber != null && result != null) {
      singleNumber = screen.innerText
      calculate(result, singleNumber, lastEnteredOperator)
    }
    console.log(lastEnteredOperator)
    lastEnteredOperator = e.target.innerText;
    screen.innerText = e.target.innerText;
  }
});
btnMul.addEventListener("click", function (e) {
  if (screen.innerText != "") {
    if (firstNumber == null) {
      firstNumber = screen.innerText
    } else if (secondNumber == null) {
      secondNumber = screen.innerText
      calculate(firstNumber, secondNumber, lastEnteredOperator)
    } else if (firstNumber != null && secondNumber != null && result != null) {
      singleNumber = screen.innerText
      calculate(result, singleNumber, lastEnteredOperator)
    }
    console.log(lastEnteredOperator)
    lastEnteredOperator = e.target.innerText;
    screen.innerText = e.target.innerText;
  }
});
btnDiv.addEventListener("click", function (e) {
  if (screen.innerText != "") {
    if (firstNumber == null) {
      firstNumber = screen.innerText
    } else if (secondNumber == null) {
      secondNumber = screen.innerText
      calculate(firstNumber, secondNumber, lastEnteredOperator)
    } else if (firstNumber != null && secondNumber != null && result != null) {
      singleNumber = screen.innerText
      calculate(result, singleNumber, lastEnteredOperator)
    }
    console.log(lastEnteredOperator)
    lastEnteredOperator = e.target.innerText;
    screen.innerText = e.target.innerText;
  }
});
btnSub.addEventListener("click", function (e) {
  if (screen.innerText != "") {
    if (firstNumber == null) {
      firstNumber = screen.innerText
    } else if (secondNumber == null) {
      secondNumber = screen.innerText
      calculate(firstNumber, secondNumber, lastEnteredOperator)
    } else if (firstNumber != null && secondNumber != null && result != null) {
      singleNumber = screen.innerText
      calculate(result, singleNumber, lastEnteredOperator)
    }
    console.log(lastEnteredOperator)
    lastEnteredOperator = e.target.innerText;
    screen.innerText = e.target.innerText;
  }
});

btnEquals.addEventListener("click", function (e) {
  if (result == null) {
    secondNumber = screen.innerText
    calculate(firstNumber, secondNumber, lastEnteredOperator);
    screen.innerText = result;
  } else {
    singleNumber = screen.innerText
    calculate(result, singleNumber, lastEnteredOperator);
    screen.innerText = result;
  }
})

btnclr.addEventListener("click", function (e) {
  firstNumber = null;
  secondNumber = null;
  singleNumber = null;
  result = null;
  lastEnteredOperator = null;

  screen.innerText = ""
})

function calculate(num1, num2, operator) {
  console.log("inside fun" + lastEnteredOperator)
  switch (operator) {
    case '+':
      result = Number(num1) + Number(num2);
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Cannot divide by zero";
      }
      break;
    default:
      result = "Invalid operator";
  }
  console.log(`${num1} ${operator} ${num2} = ${result}`)
}


