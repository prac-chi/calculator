// Calculator logic
function appendToDisplay(val) {
    const display = document.getElementById('display');
    display.value += val;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-'));
    } catch {
        display.value = 'Error';
    }
}

// Theme switching
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark', themeToggle.checked);
});

// Color picker
const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input', function() {
    document.documentElement.style.setProperty('--accent', colorPicker.value);
});

// Basic keyboard support (optional)
document.addEventListener('keydown', function(e) {
    if (e.key >= '0' && e.key <= '9') appendToDisplay(e.key);
    else if (['+', '-', '*', '/', '.'].includes(e.key)) appendToDisplay(e.key);
    else if (e.key === 'Enter') calculateResult();
    else if (e.key === 'Escape') clearDisplay();
});
