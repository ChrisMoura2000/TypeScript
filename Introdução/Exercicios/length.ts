import * as readlineSync from 'readline-sync'

const unitsLen = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convertLen(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unitsLen.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = unitsLen.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index

    return value * Math.pow(10, exponent);
}

// Solução acima retirada do gabarito
// Solução abaixo criada do zero

const exec = (): void => {
    let value = readlineSync.question('Digite um valor para ser convertido: ')

    while (isNaN(Number(value))) {
        console.log("O valor digitado precisa ser um número");
        value = readlineSync.question('Digite outro valor para ser convertido: ')
    }

    let fromUnitIndex = readlineSync.keyInSelect(unitsLen, 'Qual unidade de medida base? ')
          
    while (!unitsLen[fromUnitIndex]) {
        if(readlineSync.keyInYN('Voce digitou CANCEL, deseja encerrar o programa? (y/n)')) {
            console.log("Bye");
            return
        } else {
            fromUnitIndex = readlineSync.keyInSelect(unitsLen, 'Qual unidade de medida base?')
        }
    }

    let toUnitIndex = readlineSync.keyInSelect(unitsLen, 'Qual unidade de medida final? ')
    while (!unitsLen[toUnitIndex]) {
        if(readlineSync.keyInYN('Voce digitou CANCEL, deseja encerrar o programa? (y/n)')) {
            console.log("Bye");
            return
        } else {
            toUnitIndex = readlineSync.keyInSelect(unitsLen, 'Qual unidade de medida final? ')
        }
    }
    const valueConverted = convertLen(Number(value), unitsLen[fromUnitIndex], unitsLen[toUnitIndex])

    console.log(`${value + unitsLen[fromUnitIndex]} é igual a ${valueConverted + unitsLen[toUnitIndex]}`)
}
