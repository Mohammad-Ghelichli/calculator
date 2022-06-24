const main = document.getElementById("main");
const view = document.getElementById("view");
const button = document.getElementById("button");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const clear = document.getElementById("clear");
const sqr = document.getElementById("sqr");
const root = document.getElementById("root");
const delet = document.getElementById("delet");
const equal = document.getElementById("equal");
const dash = document.getElementById("dash");
const number1 = document.querySelector(".number");
let lastOpreation = "";
let memory = 0;
let answer = 0;
button.addEventListener("click", start);
function start(event) {
  if (view.textContent.length > 15) {
    return;
  }
  let data = event.target.dataset.input;
  if (data) {
    if (data === ".") {
      if (!view.textContent.includes(".")) {
        view.textContent += data;
      }
    } else {
      view.textContent += data;
      if (!view.textContent.includes(".")) {
        view.textContent = Number(view.textContent);
      }
    }
  }
}
clear.addEventListener("click", () => {
  view.textContent = "0";
  memory = 0;
  lastOpreation = "";
});
minus.addEventListener("click", () => {
  memory = Number(view.textContent);
  lastOpreation = "minus";
  view.textContent = 0;
});
plus.addEventListener("click", () => {
  memory = Number(view.textContent);
  lastOpreation = "plus";
  view.textContent = 0;
});
divide.addEventListener("click", () => {
  memory = Number(view.textContent);
  lastOpreation = "divide";
  view.textContent = 0;
});
multiply.addEventListener("click", () => {
  memory = Number(view.textContent);
  lastOpreation = "multiply";
  view.textContent = 0;
});
equal.addEventListener("click", equal1);
function equal1(event) {
  if (lastOpreation != "") {
    if (lastOpreation === "minus") {
      answer = memory - Number(view.textContent);
      view.textContent = answer;
    } else if (lastOpreation === "plus") {
      answer = memory + Number(view.textContent);
      view.textContent = answer;
    } else if (lastOpreation === "divide") {
      answer = memory / Number(view.textContent);
      view.textContent = answer;
    } else if (lastOpreation === "multiply") {
      answer = memory * Number(view.textContent);
      view.textContent = answer;
    }
  }
  lastOpreation = "";
  number1.addEventListener("click", () => {
    view.textContent = 0;
  });
}

delet.addEventListener("click", () => {
  if (view.textContent.length == 1) {
    view.textContent = 0;
  } else {
    view.textContent = view.textContent.substring(
      0,
      view.textContent.length - 1
    );
  }
});
sqr.addEventListener("click", () => {
  view.textContent *= view.textContent;
  lastOpreation = "";
});
root.addEventListener("click", () => {
  view.textContent = Math.sqrt(view.textContent);
  lastOpreation = "";
});
main.addEventListener("keypress", start2);
function start2(event) {
  if (view.textContent.length > 15) {
    return;
  }
  let data2 = Number(event.key);
  if (data2) {
    if (data2 === ".") {
      if (!view.textContent.includes(".")) {
        view.textContent += data2;
      }
    } else {
      view.textContent += data2;
      if (!view.textContent.includes(".")) {
        view.textContent = Number(view.textContent);
      }
    }
  }
}
main.addEventListener("keydown", clear2);
function clear2(event) {
  if (event.keyCode == 8) {
    if (view.textContent.length == 1) {
      view.textContent = 0;
    } else {
      view.textContent = view.textContent.substring(
        0,
        view.textContent.length - 1
      );
    }
  }
  if (event.keyCode == 107) {
    memory = Number(view.textContent);
    lastOpreation = "plus";
    view.textContent = 0;
  }
  if (event.keyCode == 109) {
    memory = Number(view.textContent);
    lastOpreation = "minus";
    view.textContent = 0;
  }

  if (event.keyCode == 106) {
    memory = Number(view.textContent);
    lastOpreation = "multiply";
    view.textContent = 0;
  }
  if (event.keyCode == 111) {
    memory = Number(view.textContent);
    lastOpreation = "divide";
    view.textContent = 0;
  }
  if (event.keyCode == 13) {
    if (lastOpreation != "") {
      if (lastOpreation === "minus") {
        answer = memory - Number(view.textContent);
        view.textContent = answer;
      } else if (lastOpreation === "plus") {
        answer = memory + Number(view.textContent);
        view.textContent = answer;
      } else if (lastOpreation === "divide") {
        answer = memory / Number(view.textContent);
        view.textContent = answer;
      } else if (lastOpreation === "multiply") {
        answer = memory * Number(view.textContent);
        view.textContent = answer;
      }
    }
    lastOpreation = "";
  }
}
