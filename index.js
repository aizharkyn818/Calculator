let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');


let displayValue = [];

// To Clear

clearbtn.addEventListener("click", () => {

    displayValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
})

// Get value of any button clicked and display to the screen

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {
            // To display value on btn press
            displayValue.push(btn.value)
            currentInput.innerHTML = displayValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {

                answerScreen.innerHTML = eval(displayValue.join(''));

            }

        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            displayValue.pop();
            currentInput.innerHTML = displayValue.join('');
            answerScreen.innerHTML = eval(displayValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            
        }

        // To prevent undefined error in screen
        if (typeof eval(displayValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }

    })
})