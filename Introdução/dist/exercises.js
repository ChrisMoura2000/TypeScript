"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printEnum = exports.circleArea = exports.trapezeio = exports.losangle = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function losangle(bigD, smallD) {
    return (bigD * smallD) / 2;
}
exports.losangle = losangle;
function trapezeio(bigB, smallB, height) {
    return ((bigB + smallB) * height) / 2;
}
exports.trapezeio = trapezeio;
function circleArea(radio) {
    return 3.14 * (radio ** 2);
}
exports.circleArea = circleArea;
function printEnum() {
    let weekDays;
    (function (weekDays) {
        weekDays[weekDays["segunda"] = 1] = "segunda";
        weekDays[weekDays["terca"] = 2] = "terca";
        weekDays[weekDays["quarta"] = 3] = "quarta";
        weekDays[weekDays["quinta"] = 4] = "quinta";
        weekDays[weekDays["sexta"] = 5] = "sexta";
    })(weekDays || (weekDays = {}));
    return `Dia 1 é ${weekDays[1]} e sexta é dia numero ${weekDays.sexta}`;
}
exports.printEnum = printEnum;
