//1
let i = 0;
while (i<2) {
    console.log('Привет');
     i++;
}
//2
let n = 1;
do {
  console.log(n);
	n++;
} while (n < 6);
//3
let a = 7;
do {
  console.log(a);
	a++;
} while (a < 23);
//4
let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
};
for (let name in obj){
    alert(`${name} - зарплата ${obj[name]} долларов`);
}
//5
let b = 1000;
for( let num = 50; num<b; num++) b%2;
console.log();




//6
for ( let dayNumber = 1; dayNumber <=31; dayNumber++){
    if (dayNumber % 6 !== 0);
    console.log (`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет`);
    continue;
}
