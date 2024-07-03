let Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.validateInput = function (a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Inputs must be numbers.');
        }
    };
    Calculator.prototype.add = function (a, b) {
        this.validateInput(a, b);
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        this.validateInput(a, b);
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        this.validateInput(a, b);
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        this.validateInput(a, b);
        if (b === 0) {
            return 'Error: Division by zero.';
        }
        return a / b;
    };
    return Calculator;
}());
let calculator = new Calculator();
console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3));
console.log(calculator.multiply(5, 3));
console.log(calculator.divide(5, 3));
console.log(calculator.divide(5, 0));
