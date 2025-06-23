let display = document.getElementById("display");

function append(value) {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function del() {
  display.textContent = display.textContent.slice(0, -1) || "0";
}

function calculate() {
  try {
    display.textContent = eval(display.textContent.replace(/%/g, "/100"));
  } catch {
    display.textContent = "Error";
  }
}

function toggleMode() {
  document.body.classList.toggle("dark");
}

document.addEventListener("keydown", (e) => {
  const allowed = "0123456789+-*/.%";
  if (allowed.includes(e.key)) append(e.key);
  else if (e.key === "Enter") calculate();
  else if (e.key === "Backspace") del();
  else if (e.key === "Escape") clearDisplay();
});
