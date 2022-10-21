"use strict";
const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponente = toIndex - fromIndex;
    return value * Math.pow(10, exponente);
}
