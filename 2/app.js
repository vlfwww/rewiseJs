// 1.
//  Напишите функцию, которая возвращает новый массив, где каждый элемент умножен на 2. Метод: map
//  double([1,2,3]); // [2,4,6]

// const double = (arr)=> arr.map(el=>el*2);
// console.log(double([1,2,3]));

//  2. Вернуть массив только с положительными числами. Метод: filter
//  positive([1,-2,3,0,5]); // [1,3,5]

// const positive =(arr)=>arr.filter(el=>el>0);
// console.log(positive([1,-2,3,0,5]));

//  3. Определите, есть ли в массиве пользователей хотя бы один младше 18 лет. Метод: some
//  hasMinor([{age:20},{age:15},{age:30}]); // true

// const hasMinor = (arr) => arr.some(el=>el.age<18);
// console.log(hasMinor([{age:20},{age:15},{age:30}]));

//  4. Проверить, что все элементы массива — непустые строки. Метод: every
//  allNotEmpty(["a","b","c"]);   // true

// const allNotEmpty =(arr)=>arr.every(el=>el!='');
// console.log(allNotEmpty(["a","b","c"]));

//  5. Найти сумму чисел массива. Метод: reduce
//  sum([1,2,3,4]); // 10

// const sum = (arr)=>arr.reduce(((el,summa)=>el+summa),0);
// console.log(sum([1,2,3,4]));

//  6. Найти первый отрицательный элемент массива. Метод: find
//  firstNegative([1,2,-3,4]); // -3

// const firstNegative = (arr) => {
//   const rez= arr.find((el) => el < 0);
//   if(rez==undefined) return null;
//   return rez;
// };
// console.log(firstNegative([1, 2, -3, 4]));

// 7. Найти индекс первого чётного элемента. Метод: findIndex
// firstEvenIndex([1,3,5,6,7]); // 3

// const firstEvenIndex = (arr)=>arr.findIndex(el=>el%2==0);
// console.log(firstEvenIndex([1,3,5,6,7]));

//  8. Вернуть объект, где ключ — символ строки, а значение — сколько раз он встречается. Метод: forEach
//  charCount("hello"); // {h:1, e:1, l:2, o:1}

// function charCount(str){
//     const obj = {};
//     const arr = str.split('');
//     arr.forEach(el => {
//         obj[el] = (obj[el] || 0) + 1;
//     });
//     return obj;
// } 

// console.log(charCount("hello")); 


//  9. У вас есть массив объектов {id, name}, вернуть массив только с именами. Метод: map
// names([{id:1, name:"Ann"}, {id:2, name:"Bob"}]); // ["Ann","Bob"]

// const names =(arr)=>arr.map(el=>el.name);
// console.log(names([{id:1, name:"Ann"}, {id:2, name:"Bob"}]));

//  10. Найти самое длинное слово в массиве строк. Метод: reduce
//  longest(["a","abc","ab"]); // "abc"

const longest = (arr) => 
  arr.reduce((longestWord, current) => 
    current.length > longestWord.length ? current : longestWord
  , "");

console.log(longest(["a","abc","ab"])); 