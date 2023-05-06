//1
const peoples = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 peoples.sort(function(a, b){
return a.age - b.age;
 })
 console.log(peoples);
 
//2
function isPositive(item) {
   return item >= 0;
    }
    function isMale(item) {
  return item.gender === 'male';
    }
    function filter(arr, ruleFunction) {
        return arr.filter(ruleFunction);
    }
    console.log(filter([3, -4, 1, 9], isPositive));
    const people = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
     ];
     console.log(filter(people, isMale));
    //3
        let date = new Date(2023, 5, 01, 18, 57, 12, 13); 
        let interval = setInterval(() => {
            console.log(new Date);
        }, 3000);
    
        setTimeout(() => {
            clearInterval(interval);
            console.log('30 секунд прошло')
        }, 30000);
    
    //4
    function delayForSecond(callback) {
    setTimeout(() => {
    console.log('Привет, Глеб!'); 
    }, 1000)
    callback();
   }
   delayForSecond(function () {
    console.log('Привет, Глеб!'); 
 });

   //5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { cb();  }

    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
 delayForSecond(() => sayHi('Глеб'));
