// 1.Створити змінні.Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// 2.Вивести кожну змінну за допомогою: console.log , alert, document.write
// 3.Переприсвоїти кожній змінній з завдання значення на довільне.
// 4.Вивести кожну змінну за допомогою: console.log , alert, document.write

let a = 'hello';
console.log(a);
alert(a);
document.write(a);
a = 'goodbye';
console.log(a);
alert(a);
document.write(a);

let b = 'owu';
console.log(b);
alert(b);
document.write(b);
b = 'abc'
console.log(b);
alert(b);
document.write(b);


let c = 'com';
console.log(c);
alert(c);
document.write(c);
c='gmail';
console.log(c);
alert(c);
document.write(c);

let d = 'ua';
console.log(d);
alert(d);
document.write(d);
d='com';
console.log(d);
alert(d);
document.write(d);


let e = 1;
console.log(e);
alert(e);
document.write(e);
e='one';
console.log(e);
alert(e);
document.write(e);

let f = 10;
console.log(f);
alert(f);
document.write(f);
f='ten';
console.log(f);
alert(f);
document.write(f);


let g = -999;
console.log(g);
alert(g);
document.write(g);
g = '-100';
console.log(g);
alert(g);
document.write(g);

let h = 123;
console.log(h);
alert(h);
document.write(h);
h = '777';
console.log(h);
alert(h);
document.write(h);


let i = 3.14;
console.log(i);
alert(i);
document.write(i);
i = 'pi';
console.log(i);
alert(i);
document.write(i);

let j = 2.7;
console.log(j);
alert(j);
document.write(j);
j = '7.2';
console.log(j);
alert(j);
document.write(j);

let k = 16;
console.log(k);
alert(k);
document.write(k);
k = 'passport';
console.log(k);
alert(k);
document.write(k);


let l = true;
console.log(l);
alert(l);
document.write(l);
l = 'false';
console.log(l);
alert(l);
document.write(l);

let m = false;
console.log(m);
alert(m);
document.write(m);
m = 'true';
console.log(m);
alert(m);
document.write(m);

// // 5. Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// // З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Marta';
let middleName = 'Yuriivna';
let lastName = 'Velychko';
let person = (`${firstName} ${middleName} ${lastName}`);
console.log(person);
document.write(person);

//--------------------------------------------------------
// // 6.За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// // 7.Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//
let firstName = prompt('What is your name?',  'example - Marta' );
let middleName = prompt('What is your Middle Name?', 'example - Velychko' );
let age =prompt('What is your Age?', 'example 25-30' ) ;
console.log(` Hi ${firstName} ${middleName} You are ${age} years old`)

// // 8.За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// // 9.let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

// // 10.Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// // 11.В однакових виразах не використовувати однакові оператори!!!

console.log(5<6)
console.log(5>6)
console.log(5==6)
console.log(5===6)
console.log(10==10)
console.log(10===10)
console.log(10>10)
console.log(10<10)
console.log(10!==10)
console.log(123!==123)
console.log(123===123)