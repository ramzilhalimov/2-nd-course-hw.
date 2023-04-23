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
for (let n = 1000, num = 5; n > 50; num++) {

  n /= 2;
      alert( n );
  } 
//6
for (let dayNumber = 6; dayNumber <=31; dayNumber++) { 
    dayNumber += 7; 
		console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`); 
	}
