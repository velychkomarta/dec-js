// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  котрий :

// -- отримує текст з параграфа з id "content"
let task1 = document.getElementById('content');
console.log(task1)

// -- отримує текст з блоку з id "rules"
let task2 = document.getElementById('rules')
console.log(task2)

// -- замініть текст параграфа з id 'content' на будь-який інший
let task3 = document.getElementById('content').innerText='НОВЫЙ ТЕКСT!';

// -- замініть текст параграфа з id 'rules' на будь-який інший
task2.innerText='NEW TEXT!'

// -- змініть кожному елементу колір фону на червоний
let task4 = document.body.children;
for (const allElementsFon of task4) {
    allElementsFon.style.backgroundColor = 'Tomato'
}

// -- змініть кожному елементу колір тексту на синій
let task5 = document.body.children;
for (const allElementsText of task5) {
    allElementsText.style.color = 'CornflowerBlue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let task6 = document.getElementById('rules')
console.log(task6.classList)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let task7 = document.getElementsByClassName('fc_rules')
for (const task7Element of task7) {
    task7Element.style.color='Tomato'
}