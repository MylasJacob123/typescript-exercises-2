interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number | string;
}


class Calculatorz implements ICalculator {

    private validateInput(a: any, b: any): void {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Inputs must be numbers.');
        }
    }

    public add(a: number, b: number): number {
        this.validateInput(a, b);
        return a + b;
    }

    public subtract(a: number, b: number): number {
        this.validateInput(a, b);
        return a - b;
    }
    public multiply(a: number, b: number): number {
        this.validateInput(a, b);
        return a * b;
    }

    public divide(a: number, b: number): number | string {
        this.validateInput(a, b);
        if (b === 0) {
            return 'Error: Division by zero.';
        }
        return a / b;
    }
}

const calculatorz = new Calculator();
console.log(calculator.add(5, 3));        
console.log(calculator.subtract(5, 3));   
console.log(calculator.multiply(5, 3));   
console.log(calculator.divide(5, 3));     
console.log(calculator.divide(5, 0));     
