const display = document.getElementById('display');
const buttonsContainer = document.querySelector('.buttons');


document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!isNaN(parseInt(key))) {
    handleNumberClick(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    handleOperatorClick(key);
  } else if (key === 'Enter') {
    handleEqualClick();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === 'Backspace') {
    cancelEntry();
  } else {
    alert('Only numbers and operators (+, -, *, /) are allowed.');
  }
});


function handleNumberClick(number) {
  display.textContent += number;
}


function handleOperatorClick(operator) {
  display.textContent += operator;
}


function handleEqualClick() {
    try {
      const result = eval(display.textContent);
      document.getElementById('result').value = result; 
    } catch (error) {
      alert('Invalid expression');
    }
  }
  


function cancelEntry() {
  display.textContent = display.textContent.slice(0, -1);
}


function clearDisplay() {
  display.textContent = '';
}

function createButtons() {
    const buttonValues = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=','+', 'C', 'Cancel'];
    buttonValues.forEach(value => {
      const button = document.createElement('button');
      
      
      if (value === '-') {
        button.setAttribute('id', 'subtract');
      } else if (value === '*') {
        button.setAttribute('id', 'multiply');
      } else if (value === '+') {
        button.setAttribute('id', 'add');
      } else if (value === '/') {
        button.setAttribute('id', 'divide');
      } else if (value === '.') {
        button.setAttribute('id', 'decimal');
      } else if (value === '=') {
        button.setAttribute('id', 'equal');
      } else if (value === 'C') {
        button.setAttribute('id', 'clear');
      } else if (value === 'Cancel') {
        button.setAttribute('id', 'cancel');
      } else {
        button.setAttribute('id', `${value}`);
      }
      
      button.textContent = value;
      
      button.addEventListener('click', () => {
        if (!isNaN(parseInt(value))) {
          handleNumberClick(value);
          console.log(value);
        } else if (value === '=') {
          handleEqualClick();
        } else if (value === 'Cancel') {
          cancelEntry();
        } else if (value === 'C') {
          clearDisplay();
        } else {
          handleOperatorClick(value);
        }
      });
      buttonsContainer.appendChild(button);
    });
  }
  
createButtons();
