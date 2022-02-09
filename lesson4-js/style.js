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
//
// let massiveMidle = [5, 44, 3, 57, 897, 1290, 11,1, 555];
//
// function f7(array) {
//     let sum = 0;
//     for (let newArray of array) {
//         sum = newArray + sum;
//
//     }
//     return sum / array.length;
// }
//
// let result = f7(massiveMidle);
// console.log(result);

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//     а виводить найбільше (Math використовувати заборонено);
// function f8(){
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const newArray of arguments) {
//        if (newArray>max){
//            max=newArray;
//        }  if(newArray<min){
//
//            min = newArray;
//        }
//     }
//     console.log(max);
//     return min;
// }
// let minResult = f8(11,5,12,67,12);
// // console.log(minResult);

// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 -
// Math.round(Math.random()*100)) та виводить його.

// function f9(){
// return Math.floor(Math.random() * 100)+1;
// }
// let result = f9();
// console.log(result);

// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.

// function f10(limit){
//     return Math.floor(Math.random() * limit);
// }
// let result = f10(20);
// console.log(result);

// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function  f11(array){
    let go = array;
    console.log(array);
    let goBack = array.reverse();
    console.log(goBack);
    return goBack;
}
let result = f11([3,11,568,32,11]);