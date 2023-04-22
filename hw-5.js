//1
let num = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < num.length; i++) {
	if (num[i] == 0) break;
	console.log(num[i])
}
//2
let nums = [1, 5, 4, 10, 0, 3];
console.log(nums[2]);
//3
let numbs = [1, 3, 5, 10, 20];
numbs = numbs.join();
console.log(numbs);
//4
let arrs = [
    [1, 1, 1], 
    [1, 1, 1], 
    [1, 1, 1],
];

//5
let arr = [1, 1, 1];
arr.push(2, 2, 2.);
console.log(arr);

//6
let mo = [9, 8, 7, 'a', 6, 5];
mo = mo.sort();
mo.pop();
console.log(mo);

//7
const userAnswer = [9, 8, 7, 6, 5];
let answer = prompt('Введите число от 1 до 10');
const even = userAnswer.filter( el => (0 <= el && el <= 10));
console.log(even);

//8
let string = 'abcdef';
string = string.split('');
console.log(string);
string = string.reverse();
console.log(string);
string = string.join(' ');
console.log(string);

//9
 let arrays = [
 [1, 2, 3,],
 [4, 5, 6] 
];
let result = [].concat(...arrays);
console.log(result);

//10
let numbers1 = [ 4, 5, 9, 3, 8, 2];
    for( let i = 0; i < numbers1.length; i++) {
         if (numbers[i] + 1) {
            console.log(numbers[i]);
        }
    }   
//11
const numbers = [2, 5, 4];
const doubles = numbers.map((num)=> num ** 2);
console.log(doubles);
//12
const words = ["слово", '', "слог", "длинное предложение", "буква"].map(item => item.length);
console.log(words);
//13
const number = [-4, 3, -3];
const double = number.map((num)=> num <= 0);
console.log(double);

//14
const even1 = [6, 7, 8, 3, 3, 7, 9, 2, 5, 4];
console.log(even1);
console.log(Math.floor(Math.random() * 10));
const isEven = (num) => num % 2 == 0;
const evens = even1.filter(isEven);
console.log(evens);
//15

const mult = [4, 2, 5, 6, 8, 7];
Math.floor(Math.random() * 10);
const multSum = (nums) => {
    let sum = 0;
    for(let i = 0; i < mult.length; i+= 1){
        sum += nums[i];
    }
    return sum / nums.length;
};
console.log(multSum(mult));