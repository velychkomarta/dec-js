// 1.- Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('', 'Enter your number 0-59');
//
// if ( time >= 0 && time <=14) {
//     console.log('1 чверть.');
// }
// if ( time >= 15 && time <=30) {
//     console.log('2 чверть.');
// }
// if ( time >= 31 && time <=45) {
//     console.log('3 чверть.');
// }
// if ( time >= 46 && time <=59) {
//     console.log('4 чверть.');
// }

// 2.- У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt('', 'Enter your number 1-31');
//
// if (day < null || day === ''){
//     console.log("Let's tyr another time")
// }
//
// if ( day >= 0 && day <=10) {
//     console.log('Перша декада місяця.');
//
// }
// if ( day >= 11 && day <=20) {
//     console.log('Друга декада місяця.');
//
// }
// if ( day >= 21 && day <=31) {
//     console.log(' Третя декада місяця.');
//
// }
// if ( day >= 31) {
//     console.log("Let's tyr another time");
// }

// 3.- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = confirm('Do you like travel?');
// if ( test === false){
//     console.log('Wrong');
// }
// if ( test === true){
//     console.log('True');
// }


// 4.- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = prompt('Enter your number');
// if( a != 0){
//     console.log('True');
// }
// else {
//     console.log('Wrong');
// }

// 5.- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let planoNweek = prompt('Введіть день тижня від 1 до 7')
// switch (planoNweek) {
//     case '1':
//         console.log('monday:помити машину');
//        break;
//     case '2':
//         console.log('tuesday:уроки англійської');
//         brak;
//     case '3':
//         console.log('wednesday:записатись в зал');
//         break;
//     case '4':
//         console.log('thursday:дн подруги');
//         break;
//     case '5':
//         console.log('friday: кіно з  друзями');
//         break;
//     case '6':
//         console.log('saturday:шопінг.');
//         break;
//     case '7':
//         console.log('sunday:пікнік');
//         break;
//     default:
//         console.log('ти щось не то ввів')
// }

// 6.- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = +prompt('Введіть кількість днів в цьому році');

if(year % 4 === 0){
    console.log('Рік ВИСОКОСНИЙ');
}else {
    console.log('УРА! Наш рік нормальний');
}

// 7.- Використовуючи конструкцію if..else, напишіть код, який запитуватиме:
// „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати:
// «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let js = prompt('Яка «офіційна» назва JavaScript?');
if( js == 'ECMAScript'){
    console.log('Правильно!');
    }
else {
    console.log('Не знаєте? ECMAScript!');
}