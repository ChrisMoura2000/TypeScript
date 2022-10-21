"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const unitsLen = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convertLen(value, fromUnit, toUnit) {
    const fromIndex = unitsLen.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = unitsLen.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
// Solução acima retirada do gabarito
// Solução abaixo criada do zero
const exec = () => {
    let value = readlineSync.question('Digite um valor para ser convertido: ');
    while (isNaN(Number(value))) {
        console.log("O valor digitado precisa ser um número");
        value = readlineSync.question('Digite outro valor para ser convertido: ');
    }
    let fromUnitIndex = readlineSync.keyInSelect(unitsLen, 'Qual unidade de medida base? ');
    while (!unitsLen[fromUnitIndex]) {
        if (readlineSync.keyInYN('Voce digitou CANCEL, deseja encerrar o programa? (y/n)')) {
            console.log("Bye");
            return;
        }
        else {
            fromUnitIndex = readlineSync.keyInSelect(unitsLen, 'Qual unidade de medida base?');
        }
    }
    let toUnitIndex = readlineSync.keyInSelect(unitsLen, 'Qual unidade de medida final? ');
    while (!unitsLen[toUnitIndex]) {
        if (readlineSync.keyInYN('Voce digitou CANCEL, deseja encerrar o programa? (y/n)')) {
            console.log("Bye");
            return;
        }
        else {
            toUnitIndex = readlineSync.keyInSelect(unitsLen, 'Qual unidade de medida final? ');
        }
    }
    const valueConverted = convertLen(Number(value), unitsLen[fromUnitIndex], unitsLen[toUnitIndex]);
    console.log(`${value + unitsLen[fromUnitIndex]} é igual a ${valueConverted + unitsLen[toUnitIndex]}`);
};
