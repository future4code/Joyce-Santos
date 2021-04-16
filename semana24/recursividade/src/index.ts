// // Exercício 1.a.

// const printNumbers = (n: number) =>{
//     if(n >= 0) {
//         printNumbers(n - 1)
//         console.log(n)
//     }
// }
// printNumbers(3)

// // Exercício 1.b.

// const printNumbersDesc = (n: number) => {
//     if(n >= 0){
//         console.log(n)
//         printNumbersDesc(n - 1)
//     }
// }

// printNumbersDesc(5)

// Exercício 2.

// const calculateSum = (n: number, acc: number = 0): number => {
//     if(n === 0) {
//         return acc
//     }

//     return calculateSum(n - 1, acc + n)
// }

// console.log(calculateSum(5))


// Exercício 3.

// const calculate = (n: number): number => {
//     let sum = 0
//     for (let i = 0; i <= n; i++){
//         sum += i;
//     }

//     return sum

// }

// console.log(calculate(5))

// Exercício 4.

const printArray = (array: number[], i: number = array.length - 1) => {
    if(i >= 0){
        printArray(array, i - 1)
        console.log(`Elemento ${i} do array é `, array[i])
    }
}

const array = [1, 2, 3, 4, 5]
printArray(array)