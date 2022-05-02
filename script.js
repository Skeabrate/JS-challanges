/* 1. Find the frequency of elements in array */
function method1() {
  let arr = ['hello', 'yo', 'hello', 'nice', 'yo'];

  let result = arr.reduce((allItems, item) => {
    if (item in allItems) {
      allItems[item]++;
    } else {
      allItems[item] = 1;
    }

    return allItems;
  }, {});
  console.log(result);
}

/* 2. Group items on the basis of age of given array of object */
function method2() {
  let people = [
    { name: 'Alice', work: 'UX Designer', age: 21 },
    { name: 'Max', work: 'Frontend Dev', age: 20 },
    { name: 'Bob', work: 'Backend Dev', age: 20 },
    { name: 'Seba', work: 'Kox', age: 20 },
  ];

  const newPeople = {};

  people.forEach((item) => {
    if (!newPeople[item.age]) {
      newPeople[item.age] = [item];
    } else {
      newPeople[item.age].push(item);
    }
  });

  console.log(newPeople);
}

/* 3. Find the pairs of array element for which sum is equal to given target value (Two Sum Problem) */
/* output 
	result(arr, 9)
	[[6, 3], [7, 2], [8, 1]] */
function output(value) {
  let arr = [3, 2, 6, 1, 8, 1, 2, 7];
  let newArr = [];

  for (const key in arr) {
    let check = arr.filter((item) => item !== arr[key]);
    for (const items in check) {
      if (arr[key] + check[items] === value) {
        newArr.push([arr[key], check[items]]);
      }
    }
  }

  return newArr;
}

/* 4. Silnia przez rekursję */
function silnia(n) {
  if (n <= 1) return 1;
  else return n * silnia(n - 1);
}

/* 5.Print all duplicate elements of an array */
function removeDuplicates() {
  let arr = [1, 1, 5, 6, 7, 7, 8, 9, 3, 4, 4];

  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

/* 6. Find the pairs of array element for which sum is equal to given 
target value (Two Sum Problem) */
function twoSum(target) {
  let arr = [1, 2, 3, 4, 6, 7, 8, 9];

  let hash = {};
  let sum = [];
  arr.forEach((item) => {
    let diff = target - item;

    if (hash[diff.toString()] !== undefined) {
      sum.push([item, diff]);
      console.log(item, diff);
    }
    hash[item.toString()] = item;
  });
  return sum;
}

/* 7. Fibonacci nth element */
function fibonacci(n) {
  if (n < 2) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
/* console.log(fibonacci(4)); */

function fibonacci2(n) {
  let result = [0, 1, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i]);
  }

  return result;
}
/* console.log(fibonacci2(10)); */

/* 8. Double elements using reduce */
const arrayOfNumbers = [1, 2, 3, 4];
arrayOfNumbers.reduce((prev, curr, index, array) => {
  array[index] = array[index] * 2;
});
/* console.log(arrayOfNumbers); */

/* const a = [1, 2, 5, 7, 9];
const b = [2, 5, 7, 12, 100];

const c = [...a, ...b].sort((a, b) => b - a);
console.log(c); */

/* const obj = {
  x: 1,
  getX() {
    const inner = function () {
      console.log(this.x);
    };
    inner.bind(this)();
  },
};
obj.getX(); */

/* let str = 'i love javaScript';

console.log(str.split('').reverse().join('')); */

/* const arr = [1, 2, 3, 4];

Array.prototype.max = function () {
  console.log(Math.max(...this));
};
Array.prototype.min = function () {
  console.log(Math.min(...this));
};

arr.max();
arr.min(); */

/* let x = 123445; // find length without converting to string

function findLength(num) {
  let count = 0;

  while (num > 1) {
    num /= 10;
    count++;
  }
  return count;
}

console.log(findLength(x)); */
/* 
let x = [1, 2, 2, 4, 2, 4];
let count = 0;

x.forEach((item) => Math.max(...x) === item && count++);

console.log(
  x.reduce((acc, curr, index, arr) => {
    if (curr === Math.max(...arr)) acc += 1;
    return acc;
  }, 0)
);

console.log(count); */

/* let time = '03:10PM';

const convertTime = (val) => {
  const check = val.split('PM');
  if (check[1] === undefined) return val;

  return `${+check[0].slice(0, 2) + 12}${check[0].slice(2)}PM`;
};

console.log(convertTime(time));
 */

/* for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
} */

/* const main = document.getElementById('main');

for (let i = 0; i < 2; i++) {
  const square = document.createElement('div');

  square.style.width = '50px';
  square.style.height = '50px';
  square.style.backgroundColor = 'red';
  square.style.display = 'inline-block';
  square.style.position = 'relative';
  if (!i) square.style.marginRight = '10px';

  const circle = document.createElement('div');
  circle.style.width = '10px';
  circle.style.height = '10px';
  circle.style.backgroundColor = 'yellow';
  circle.style.borderRadius = '100px';
  circle.style.position = 'absolute';
  circle.style.top = '50%';
  circle.style.left = '50%';
  circle.style.transform = 'translate(-50%, -50%)';

  square.appendChild(circle);
  main.appendChild(square);
} */

/* 1. Find the frequency of elements in array */
let data = ['hello', 'java', 'hello', 'world', 'java', 'java'];

function findFrequency(arr) {
  return arr.reduce((acc, prev) => {
    if (acc[prev]) acc[prev]++;
    else acc[prev] = 1;
    return acc;
  }, {});
}

/* 2. Group items on the basis of age of given array of object */
let people = [
  { name: 'Seba', age: 21 },
  { name: 'Alice', age: 20 },
  { name: 'Jane', age: 20 },
  { name: 'Jane', age: 19 },
  { name: 'Jane', age: 20 },
];

function groupPeople(arr) {
  let hash = {};

  arr.forEach((item) => {
    if (hash[item.age]) hash[item.age].push(item);
    else {
      hash[item.age] = [item];
    }
  });

  return hash;
}

function reverseArr() {
  let arr = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < arr.length; i++) {
    /* [arr[i], ] */
    [arr[i], arr[arr.length - (i + 1)]] = [arr[arr.length - (i + 1)], arr[i]];
  }
  return arr;
}

const arr = [
  [3, 21, 37],
  [61, 79, 101, 120],
  [133, 149],
];

const isNumberInArrayOfArrays = (value, array) => {
  let check = false;

  array.forEach((innerArr) => {
    if (value <= innerArr[innerArr.length - 1])
      innerArr.find((item) => {
        if (item === value) check = true;
      });
  });
  return console.log(check);
};

/* const isNumberInArrayOfArrays = (value, array) => {
  const flatArr = array.flat(2);
  const result = flatArr.filter((item) => item === value);
  return console.log(result.length ? true : false);
}; */

isNumberInArrayOfArrays(0, arr);
isNumberInArrayOfArrays(21, arr);
isNumberInArrayOfArrays(221, arr);
