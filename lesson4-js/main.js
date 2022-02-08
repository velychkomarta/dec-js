// Cтворити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function triangula (a,b){
//    console.log(a*b)
//     }
//     triangula(4, 8);


// Створити функцію яка обчислює та повертає площу кола з радіусом r

// function round (radius){
//     console.log(Math.pow(radius,2)*Math.PI)
// }
// round(6);

// Cтворити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder (height, radius){
//     console.log(Math.PI * Math.pow(radius,2) * height )
// }
// cylinder(80,14);

// Cтворити функцію яка приймає масив та виводить кожен його елемент

// let mass = [5, 11, 25, 7, 20, 11];
// function f2 (){
//     for (let mass1 of mass) {
//         console.log(mass1)
//     }
// }
// f2();

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function p(a,b){
//     let result = a * b;
//     return result;
// }
// let resulFinish = p(25,25);
// document.write(`<p> Площа будинку: ${resulFinish} mm</p>`)

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function f3(a){
// document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
// document.write(`</ul>`)
// }
// f3('Скоро весна')

// створити функцію яка створює ul з трьома елементами li.
//     Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function f4(a,k){
// document.write(`<ul>`);
// for (let i=0; i<k; i++){
//     document.write(`<li>${a}</li>`);
// }
// document.write(`</ul>`)
// }
// f4('Нові курси тестувальника',4);

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let primitiveMass = [5, false, 'SOS', 3.14, true, 11];
// function list (){
//     document.write(`<div>`)
//     for(let i =0; i<primitiveMass.length; i++ )
//         document.write(`<div> Номер рядка: ${i+1} Значення: ${primitiveMass[i]}</div>`)
//     }
//     document.write(`</div>`)
//
// list();


// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.

let massObject = [
    {name:'Marta', id:1, age:30},
    {name:'Tanya', id:2, age:52},
    {name:'Nina', id:3, age:11},
    {name:'Oleg', id:4, age:20}
]
console.log(massObject);
function obj (){
    for (let i = 0; i<massObject.length; i++)
        document.write(`<div> Name: ${massObject[i].name}  id: ${massObject[i].id} Age: ${massObject[i].age} </div>`);
}
obj();