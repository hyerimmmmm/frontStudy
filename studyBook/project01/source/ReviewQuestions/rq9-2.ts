class Calculator {
    add(x: number, y:number):number;
    add(x: number, y:number, z:number):number;
    add(x: number, y:number, z?:number):number {
        if (z !== undefined) {
            return x + y + z;
        }
        return x + y;
    }
}

const calc = new Calculator();
console.log(calc.add(2,3));
console.log(calc.add(2,3,4));