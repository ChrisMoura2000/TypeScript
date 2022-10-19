export function greeter(name: string):string {
    return `Olá ${name}`;
}

export function personAge(name: string, age: number): string {
    return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0)
}

export function triangle(base: number, height: number): number {
    return (base * height) / 2;
}

export function square(side: number): number {
    return side ** 2;
}

export function rectangle(base: number, height: number): number {
    return base * height;
}

export function losangle(bigD: number, smallD: number): number {
    return (bigD * smallD) / 2;
}

export function trapezeio(bigB: number, smallB: number, height: number): number {
    return ((bigB + smallB) * height) / 2;
}

export function circleArea(radio:number) :number {
    return 3.14 * (radio ** 2)
}

export function printEnum(): string {
    enum weekDays {
        segunda = 1,
        terca = 2,
        quarta = 3,
        quinta = 4,
        sexta = 5,
    }

    return `Dia 1 é ${weekDays[1]} e sexta é dia numero ${weekDays.sexta}`
}