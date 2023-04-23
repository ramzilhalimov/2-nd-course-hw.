 //1
function number(a, b) {
   return b; 
}
 console.log(number(8, 4));
 console.log(number(6, 6));
 //2
 function even(n) {
    return (n % 2 == 0) 
    }
 let n = prompt('Введите число?');
 if (even(n)) {
    alert ('Число четное');
 } else {
    alert('Число нечетное');
 }
 //3
 function calcSum (a) {
    return a**2;
 }
 let result = calcSum(4);
 console.log(result);
 //4
 function checkAge(age) {
  if (age <= 0) {
   console.log('Вы ввели неправильное значение') ;
  } else if (age <= 12) {
    return true;
  } else {
    age >= 13;
  }
 }
 let age = prompt('Сколько Вам лет?')
 if (checkAge(age)) {
    console.log('Привет, друг!');
 } else {
    console.log('Добро пожаловать!');
 } 
 //5
 function calc (a, b) {
   if (isNaN(a) || isNaN(b)){
   return console.log('Одно или оба значения не являются числом');;
 } else {
    return a*b;
 }
 }
 let a = prompt('Введите число');
 let b = prompt('Введите число');
 if (calc(a, b)) {
    console.log(a*b);
 }
 //6
 function calcMult(x) {
    if (isNaN(x)){
        return console.log('Переданный параметр не является числом');;
      } else {
         return true;
 }
}
 let x = prompt ('Введите число');
 if (calcMult(x)) {
    console.log(`${x} в кубе равняется ${x**3}`);
 }
 //7
 const circle1 = {
    radius: 10,

    getArea() {
   return 3.14*(10**2)
    },
    getPerimeter() {
    return 2 * 3.14 * 10;
    }
 };
 console.log(circle1.getArea());
 console.log(circle1.getPerimeter());
 const circle2 = {
    radius: 8,

    getArea() {
    return 3.14*(8**2)
    },
    getPerimeter() {
    return 2 * 3.14 * 8;
    }
 };
 console.log(circle2.getArea());
 console.log(circle2.getPerimeter());

 
function showButton() {
    let userAnswer = prompt('Какой месяц на дворе?');
    if (userAnswer >= 1 && userAnswer <=2 || userAnswer === 12) {
      return console.log('Зима');
    } else if (userAnswer >= 3 && userAnswer <= 5) {
       return console.log('Весна');
    } else if (userAnswer >= 6 && userAnswer <= 8) {
       return console.log('Лето');
    } else if (userAnswer >= 9 && userAnswer <= 11) {
      return  console.log('Осень');
    } else if (userAnswer>=13){
        return console.log('Что-то пошло не так');
    }

} 
 