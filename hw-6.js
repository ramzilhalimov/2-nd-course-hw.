/*//1
let str = 'js';
str = str.toUpperCase();
console.log(str);
//2
const searchWord = ['наушник', 'банан', 'стакан', 'Напалм', 'настройки', 'телефон' ];
const search = 'на';
searchWord.forEach((word) => {
if(word.toLowerCase().startsWith(search.toLowerCase())){
    console.log(word);
}
});
//3
 console.log(Math.floor(32.58884));
 console.log(Math.ceil(32.58884));
 console.log(Math.round(32.58884));   
 //4
 console.log(Math.max(52, 53, 49, 77, 21, 32));
 console.log(Math.min(52, 53, 49, 77, 21, 32));
//5
function getRandom(minValue, maxValue) { 
return Math.round(Math.random() * (maxValue- minValue)) + minValue;
}
console.log(getRandom(1, 10));
//6
const length = 6;
const numbers = [...Array(length / 2)];
for (let i = 0; i < numbers.length; i += 1) { 
    numbers[i] = Math.round(Math.random() * 6 );
}
console.log(numbers);
//7
function getRandomNumber(x, y) { 
    return Math.round(Math.random() * (y - x)) + x;
}
console.log(getRandomNumber(3, 9));
//8 
let myDate = new Date("25 April 2023");
console.log(myDate); 
//9
let currentDate = new Date(2023, 4, 25, 20, 29, 12, 13);
currentDate.setDate(currentDate.getDate() + 73)
console.log(currentDate);
//10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let date = new Date(2023, 4, 25, 20, 29, 12, 13);
let realDate = " Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear( ) + " - это " + days[date.getDay()] + "                " + 
  " Время: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
console.log(realDate);
*/
function fructShow () {
const fruct = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
alert(fruct.sort(() => Math.random() - 0.5));
let answerOne = prompt('Чему равнялся первый элемент массива?');
let answerTwo = prompt('Чему равнялся последний элемент массива?') ;
if (answerOne == fruct[0] && answerTwo == fruct[fruct.length - 1]){
    return alert('Поздравляю, Вы угадали!');
} else if (answerOne === fruct[0] || answerTwo === fruct[fruct.length - 1]){
    return alert ('Вы были близки к победе!');
} else {
    return alert('Неправильно');
}
}

