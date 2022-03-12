function Calculator(previousVal, currentVal) {
    //previous and current values to calculate
    this.previous = previousVal;
    this.current = currentVal;
    this.previousOperator;
    this.currentOperator;
    this.operator;
    this.done = 0

    //calling functions as soon as the class is created
    this.clear();

    //inner functions
    this.displayNumNicely = function(num) {
        let stringNum = num.toString();
        let intNum = parseFloat(stringNum.split('.')[0]);
        let floatNum = stringNum.split('.')[1];
        let intToDisplay;

        if(isNaN(intNum)){
            intToDisplay = '';
        }else{
            intToDisplay = intNum.toLocaleString('en', {maximumFractionDigits: 0});
        }

        if(floatNum != null){
            return `${intToDisplay}.${floatNum}`;
        }else{
            return intToDisplay;
        }
    }
}

//cleans the calculator to use as new, nothing has gotten clicked
Calculator.prototype.clear = function() {
    this.previousOperator = '';
    this.currentOperator = '';
    this.operator = undefined;
}

Calculator.prototype.delete = function() {
    this.currentOperator = this.currentOperator.toString().slice(0, -1); 
}

//adding a clicked number to the screen, adding as two strings and not as two numbers
Calculator.prototype.appendToScreen = function(number) {
    if(this.done){
        this.currentOperator = '';
        this.done = 0;
    }

    //if the user has clicked '.' once, he wouldnt be able to click it again
    if(number === '.' && this.currentOperator.includes('.')) return;

    //adding to the screen the previous number clicked plus the current number typed('5' + '7' = '57)
    this.currentOperator = this.currentOperator.toString() + number.toString();
}

//checks for mathematical operations and calculates the result
Calculator.prototype.operators = function(operation) {
    //if the there is no number to operate on
    if(this.currentOperator === '') return;

    //if there is a mathematical operation to calculate, call calc
    if(this.currentOperator !== '')
        this.calc();


    this.operator = operation;
    this.previousOperator = this.currentOperator;
    this.currentOperator = '';
}

Calculator.prototype.calc = function() {
    let calc;
    let prevOpe = parseFloat(this.previousOperator);
    let currentOpe = parseFloat(this.currentOperator);

    //if there is no numbers to calculate but the user clicked '='
    if(isNaN(prevOpe) || isNaN(currentOpe)) return;

    //giving calculations to each mathematical operator
    switch(this.operator){
        case '+':
            calc = prevOpe + currentOpe;
            break;
        case '-':
            calc = prevOpe - currentOpe;
            break;
        case 'x':
            calc = prevOpe * currentOpe;
            break;
        case '/':
            calc = prevOpe / currentOpe; 
            break;
        default:
            return;
    }

    this.currentOperator = calc;
    this.operator = undefined;
    this.previousOperator = '';
    this.done = 1;
}

Calculator.prototype.updateResult = function() {
    this.current.value = this.displayNumNicely(this.currentOperator); 
    this.previous.value = this.displayNumNicely(this.previousOperator);

    if(this.previous.value == null)
        this.previous.value = '';
}


//Creating calculator class
// const calculator = new Calculator(previous, result);

// numberBtn.forEach(function(button) {
//     button.addEventListener('click', function() {
//         calculator.appendToScreen(button.getAttribute('value'));
//         calculator.updateResult();
//     });
// });

// operationsBtn.forEach(function(button) {
//     button.addEventListener('click', function() {
//         calculator.operators(button.getAttribute('value'));
//         calculator.updateResult();
//     });
// });

// sumBtn.addEventListener('click', function() {
//     calculator.calc();
//     calculator.updateResult();
// });

// resetBtn.addEventListener('click', function() {
//     calculator.clear();
//     calculator.updateResult();
// });

// deleteBtn.addEventListener('click', function() {
//     calculator.delete();
//     calculator.updateResult();
// });