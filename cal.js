const display = document.getElementById("display");
const themeToggle = document.getElementById("theme-toggle");

function append(val) {
  display.value += val;
  evaluate();
}

function clearDisplay() {
  display.value = '';
  display.placeholder = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
  evaluate();
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch {
    display.value = '';
    display.placeholder = 'Invalid Input';
  }
}

function evaluate() {
  try {
    const result = eval(display.value);
    display.placeholder = result || '';
  } catch {
    display.placeholder = '';
  }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (/\d/.test(key) || ['+', '-', '*', '/', '%', '.'].includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

// Theme Toggle
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
