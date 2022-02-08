// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function name(a,b,c) {
// if (a < b && a < c) {
//     console.log(a);
// } else if (b < c && b < a) {
//     console.log(b);
// } else if (c < b && c < a) {
//     console.log(c);
// }
// }
// name(5, 11, 7);

// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function name(a,b,c) {
//
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > c && b > a) {
//         console.log(b);
//     } else if (c > b && c > a) {
//         console.log(c);
//     }
// }
// name(44, 78, 3);

// створити функцію яка повертає найбільше число з масиву
//
// let maxArray = [100,5,12,44,78,67,567,3,68]
// function arrayMax(array) {
//     let max = array[0];
//     for (const element of array) {
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// document.write(`<h2>Найбільше число масиву: ${arrayMax(maxArray)}</h2>`)

// створити функцію яка повертає найменьше число з масиву

// let minArray = [100,5,12,44,78,-5,4567,3,68]
// function arrayMin(array) {
//     let min = array[0];
//     for (const element of array) {
//         if(element < min){
//             min = element;
//         }
//     }
//     return min;
// }
// document.write(`<h2>Найменше число масиву: ${arrayMin(minArray)}</h2>`)

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

// let massiveSum = [4,32,78,19,1876,587,11,2,999];
// function f6 (a) {
//   let sum = 0;
//   for (let newA of a) {
//     sum = newA +sum;
//   }
//   return sum;
// }
// console.log(f6(massiveSum))

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.