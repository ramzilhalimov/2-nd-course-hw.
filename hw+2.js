//1
let password = 'please';
let pass = prompt('Введите пароль');
if (pass === 'please') {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}
//2
let c=3;
if (c > 0 && c< 10) {
   console.log('Верно'); 
} else {
   console.log('Неверно'); 
}
//3
let d=268;
let e=53;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно'); 
}
//4
let a = 2;
let b = 3;
console.log(a + b);
//5
let monthNumber = +prompt("Введите номер месяца: 1 - январь, 12 - декабрь");
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("осень");
        break;   
    default:
        console.log('Такого месяца не существует!');
        break;
}