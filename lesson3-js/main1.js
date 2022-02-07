// 1.-створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let mass1 = [5, 25, 7, 11, 20];
// console.log(mass1);
//
// let mass2 = ['opel', 'mazda', 'citroen', 'bmw', 'nissan'];
// console.log(mass2);
//
// let mass3 = ['nissan', 1, true, 'mazda', 2];
// console.log(mass3)

// 2.Створити пустий масив.
//     Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
//     Вивести в консоль

// let empty = [];
// empty [0] = 'mazda';
// empty [1] = 2011;
// empty [2] = 'Японія, Хіросіма';
// empty [4] = 2021;
// empty [5] = 'Japan, Trustee';
// console.log(empty);
// document.write(empty)

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i <10; i++) {
//     let i = 'За вікном майже весна.'
// document.write(`<div>${i}</div>`)
// }

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let blok = ['xT1', 'xT2', 'xT3', 'xT4', 'xT5', 'xT6', 'xT7', 'xT8', 'xT9', 'xT10'];
//
// for (let i = 0; i <blok.length; i++) {
//     document.write(`<div>${i} summer text </div>`)
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Some Random text </h1>`);
//     i++;
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (let i < 20) {
//     document.write(`<h1> ${i} Some Random text </h1>`);
//     i++;
// }

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let massNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;
// while ( let i < massNumber.length) {
//    console.log(massNumber[i]);
//     i++;
// }

// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let massString = ['mather', 'father', 'brother', 'sister', 'grandmother', 'grandfather', 'aunt', 'tuncle', 'godfather', 'godmother'];
// let i = 0;
// while ( let i<massString.length){
//     console.log(massString[i]);
//     i++;
// }

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let massAll = ['mather', 1, true, 'sister', 26, 'grandfather', false, 44, 'godfather', 'godmother'];
// for (let i=0; i<massAll.length; i++){
//     console.log(massAll[i]);
// }

 // Створити масив з 10 елементів числового, стірчкового і булевого типу.
 //    За допомогою if та typeof вивести тільки булеві елементи

// let massAll2 = ['mather', 1, true, 'sister', 26, 'grandfather', false, 44, 'godfather', 'godmother'];
// for (let i=0; i < massAll2.length; i++) {
//     if (typeof massAll2[i] === 'boolean') {
//         console.log(massAll2[i]);
//     }


// Створити масив з 10 елементів числового, стірчкового і булевого типу.
//     За допомогою if та typeof вивести тільки числові елементи

// let massAll3 = ['mather', 1, true, 'sister', 26, 'grandfather', false, 44, 'godfather', 'godmother'];
// for (let i=0; i < massAll2.length; i++) {
//     if (typeof massAll3[i] === 'number') {
//         console.log(massAll3[i]);
//     }
// }



// Створити масив з 10 елементів числового, стрічкового і булевого типу.
//     За допомогою if та typeof вивести тільки рядкові елементи

// let massAll4 = ['mather', 1, true, 'sister', 26, 'grandfather', false, 44, 'godfather', 'godmother'];
// for (let i=0; i<massAll4.length; i++){
//     if (typeof massAll4[i] === 'string'){
//         console.log(massAll4[i]);
//     }
// }

// Створити порожній масив.
//     Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. \
// Вивести в консоль всі його елементи в циклі.

// let horoscop = [];
//
// horoscop[0] = 'скорпіон';
// horoscop[2] = 'овен';
// horoscop[3] = 'телець';
// horoscop[4] = 'рак';
// horoscop[5] = 'лев';
// horoscop[6] = 'терези';
// horoscop[7] = 'козеріг';
// horoscop[9] = 'діва';
//
// for (let i=0; i<horoscop.length; i++){
//     console.log(horoscop[i])
// };

// Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

// for (let i=0; i<10; i++){
//     console.log(i);
//     document.write(` Крок № ${i} <br> <br>`);
// };

// Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

// for (let i=0; i<100; i++){
//     console.log(i);
//     document.write(` Крок № ${i} <br> <br>`);
// };

// Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write

// for (let i=0; i<100; i=i+2){
//     console.log(i);
//     document.write(` Крок № ${i} <br> <br>`);
// };

// Створити цикл for на 100 ітерацій.
//     Вивести тільки парні кроки. через console.log + document.write

// for (let i=2; i<100; i++){
//     console.log(i % 2 === 0);
//     document.write(` Крок № ${i} <br> <br>`);
// };

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i=1; i<100; i=i+2){
    console.log(i/2);
    document.write(` Крок № ${i} <br> <br>`);
};