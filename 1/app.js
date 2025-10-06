// 1. Напишите функцию, которая возвращает сумму всех чисел от 1 до N. (for, while, do while) 
// sumTo(5); // 15

// const sumTo = (n)=>{
//     let sum = 0;
//     for(let i =0;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sumTo(5));

//  2. Функция получает массив чисел и возвращает сумму всех чётных элементов. (for, while, do while)
//  sumEven([1,2,3,4]); // 6

// const sumEven =(arr)=>{
//     let rez=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0)rez+=arr[i];
//     }
//     return rez;
// }
// console.log(sumEven([1,2,3,4]));

//  3. Напишите функцию, которая принимает строку и возвращает количество уникальных символов.
//  uniqueChars("hello"); // 4 (h,e,l,o)

// const uniqueChars=(str)=>{
//     const arr = str.split('');
//     const rez=[];
//     for(let i=0;i<arr.length;i++){
//         if(!rez.includes(arr[i])) rez.push(arr[i]);
//     }
//     return rez.length;
// }
// console.log(uniqueChars("hello"));

//  4. Функция должна проверить, является ли строка палиндромом (игнорировать регистр).
//  isPalindrome("Level"); // true

// const isPalindrome =(str)=>(str.toLowerCase()===str.toLowerCase().split('').reverse().join(''));
// console.log(isPalindrome("Level"));

//  5. Напишите функцию для вычисления факториала числа N с использованием цикла.
//  factorial(5); // 120

// const factorial = (n) =>{
//     let rez =1;
//     for(let i =1;i<=n;i++){
//         rez*=i;
//     }
//     return rez;
// }
// console.log( factorial(5));

//  6. Функция получает массив и число N, возвращает сумму элементов, которые не делятся на N.
//  sumNotDivisible([1,2,3,4,5,6], 2); // 9

// const sumNotDivisible =(arr,n)=>{
//     let rezz= arr.reduce((sum,el)=>{
//         let rez=(el%n!=0)?sum+=el:sum+=0;
//         return rez;
//     },0)
//     return rezz;
// }
// console.log(sumNotDivisible([1,2,3,4,5,6], 2));

// 7.Выведитечислаот 1 доN,но:
//  • есличислоделитсяна3 Результат→"Fizz"
//  • еслиделитсяна5Результат→"Buzz"
//  • еслиделитсяна7Результат→"Bazz"
//  • еслинесколькоусловийодновременно→объединяемслова
//  fizzBuzzBazz(21); // "FizzBazz"
//  fizzBuzzBazz(10); // "Buzz"

// const fizzBuzzBazz=(n)=>{
//     let str='';
//     if(n%3==0) str+='Fizz';
//     if(n%5==0) str+='Buzz';
//     if(n%7==0) str+='Bazz';
//     return str;
// }
// console.log(fizzBuzzBazz(21));
// console.log(fizzBuzzBazz(10));

//  8. Найти все числа от 10 до 1000, у которых цифра десятков равна цифре единиц.
//  sameDigitNumbers(); // [11, 22, 33, 44, 55, 66, 77, 88, 99, 111, 122, 133, 144, 155, 166, 177, 188, 199, 211, 222, 233, 244, 255,
//  266, 277, 288, 299, 311, 322, 333, 344, 355, 366, 377, 388, 399, 411, 422, 433, 444, 455, 466, 477, 488, 499, 511, 522, 533,
//  544, 555, 566, 577, 588, 599, 611, 622, 633, 644, 655, 666, 677, 688, 699, 711, 722, 733, 744, 755, 766, 777, 788, 799, 811, 822,
//  833, 844, 855, 866, 877, 888, 899, 911, 922, 933, 944, 955, 966, 977, 988, 999]

// const sameDigitNumbers = () => {
//   const rez = [];
//   for (let i = 10; i <= 1000; i++) {
//     const des = Math.floor((i % 100) / 10); 
//     const ed = i % 10;                     
//     if (des === ed) rez.push(i);
//   }
//   return rez;
// };

// console.log(sameDigitNumbers());

//  9. Дана строка и подстрока. Нужно посчитать, сколько раз подстрока встречается в строке.
//  countSubstr("hello hello", "lo"); // 2

// const countSubstr = (str, sub) => {
//   let count = 0;
//   let pos = 0;

//   while ((pos = str.indexOf(sub, pos)) !== -1) {
//     count++;
//     pos += sub.length; 
//   }

//   return count;
// };

// console.log(countSubstr("hello hello", "lo")); 


// 10. Дана строка. Сделать первую букву каждого слова заглавной.
//  capitalizeWords("hello world"); // "Hello World«

// const capitalizeWords =(str)=>{
//     let arr = str.split(' ');
//     let rez = arr.map(el=>{
//         let first = el[0].toUpperCase();
//         let last = el.slice(1,);
//         return first+last;
//     })
//     return rez;
// }
// console.log(capitalizeWords("hello world"));

//  11. На входе число N. Реализуйте функцию, находящую все делители числа N.
//  divisors(12); // [1,2,3,4,6,12]

// const divisors = (n)=>{
//     let arr =[];
//     for(let i = 1;i<=n;i++){
//         if(n%i==0) arr.push(i);
//     }
//     return arr;
// }
// console.log(divisors(12));

//  12. Функция в качестве параметра принимает строку и считает количество слов в строке.
//  wordCount("Hello world from JS"); // 4

// const wordCount = (str)=>str.split(' ').length;
// console.log(wordCount("Hello world from JS"));

//  13. Функция в качестве параметра принимает массив чисел и удаляет дубликаты из массива. (new Set)
//  removeDuplicates([1,2,2,3,4,4,5]); // [1,2,3,4,5]

// const removeDuplicates = (arr) => {
//   return [...new Set(arr)];
// };

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 

//  14. Функция, которая находит все пары чисел в массиве, сумма которых равна N.
//  twoSum([2,7,11, 1, 15, 8], 9); // [2,7,1,8]

const twoSum = (arr, n) => {
  const rez = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        rez.push(arr[i], arr[j]);
      }
    }
  }
  return rez;
};

console.log(twoSum([2, 7, 11, 1, 15, 8], 9)); 
