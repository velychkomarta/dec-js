// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.


let mass = [5,87, 45, 12, 7, 11, 90, 123, 77, 80];
let result = mass[0] + mass[1] + mass[2] + mass[3]+ mass[4] + mass[5]+ mass[6]+ mass[7]+ mass[8]+ mass[9];
console.log(Math.floor(result));

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
 name: 'Game of Thrones',
   numberPages: '555',
   genre: 'fantasy'
};

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book1 = {
   name: 'Game of Thrones',
   numberOfPages: '555',
   genre: 'fantasy',
   author: 'Джордж Мартін'
};

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт

let bookMass = [book, book1];
console.log(bookMass[0]);
console.log(bookMass[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см.
// (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = (height*width);
console.log(s);

