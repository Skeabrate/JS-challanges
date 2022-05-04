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
function doubleElements() {
  const arrayOfNumbers = [1, 2, 3, 4];

  arrayOfNumbers.reduce((prev, curr, index, array) => {
    array[index] = array[index] * 2;
  });

  arrayOfNumbers.forEach((item) => (item = item * 2));

  console.log(arrayOfNumbers);
}
doubleElements();

const obj = {
  x: 1,
  getX() {
    /* const inner = function () {
      console.log(this.x);
    };
    inner.bind(this)(); */
    const inner = () => {
      console.log(this.x);
    };
    inner();
  },
};
obj.getX();

function reverseWord() {
  let str = 'i love javaScript';
  console.log(str.split('').reverse().join(''));
}

function addMaxMinMethods() {
  const arr = [1, 2, 3, 4];
  Array.prototype.max = function () {
    console.log(Math.max(...this));
  };
  Array.prototype.min = function () {
    console.log(Math.min(...this));
  };

  arr.max();
  arr.min();
}

/* find length without converting to string */
function findLength() {
  let num = 123445;
  let count = 0;

  while (num > 1) {
    num /= 10;
    count++;
  }
  return count;
}

function findCountOfHighestNumber() {
  let y = [1, 2, 2, 4, 2, 4];
  let count = 0;

  y.forEach((item) => Math.max(...y) === item && count++);

  /* y.reduce((acc, curr, index, arr) => {
    if (curr === Math.max(...arr)) acc += 1;
    return acc;
  }, 0) */
}

const convertTime = () => {
  let time = '03:10PM';
  const check = time.split('PM');
  if (check[1] === undefined) return time;

  return `${+check[0].slice(0, 2) + 12}${check[0].slice(2)}PM`;
};

/* FizzBuzz */
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

/* 1. Find the frequency of elements in array */
function findFrequency() {
  let arr = ['hello', 'java', 'hello', 'world', 'java', 'java'];

  return arr.reduce((acc, prev) => {
    if (acc[prev]) acc[prev]++;
    else acc[prev] = 1;
    return acc;
  }, {});
}

/* 2. Group items on the basis of age of given array of object */
function groupPeople() {
  let arr = [
    { name: 'Seba', age: 21 },
    { name: 'Alice', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'Jane', age: 19 },
    { name: 'Jane', age: 20 },
  ];

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

const isNumberInArrayOfArrays = (value) => {
  const array = [
    [3, 21, 37],
    [61, 79, 101, 120],
    [133, 149],
  ];
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
isNumberInArrayOfArrays(0);
isNumberInArrayOfArrays(21);
isNumberInArrayOfArrays(221);

function findMusicObj() {
  const arr = [
    { name: 'first song', release: 1977, duration: 295 },
    { name: 'second song', release: 1983, duration: 230 },
    { name: 'third song', release: 1962, duration: 245 },
    { name: 'fourth song', release: 1991, duration: 291 },
  ];

  // Imperative
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (result.duration > arr[i].duration) result = arr[i];
  }
  console.log(result);

  // Declarative <3
  const shortestReducer = (prev, next) => (prev.duration < next.duration ? prev : next);
  const shortest = arr.reduce(shortestReducer, []);
  console.log(shortest);
}

findMusicObj();

(function convertToMin() {
  const player = {
    name: 'seba',
    games: [
      { name: 'Dofus', playTime: 20280 },
      { name: 'GTA', playTime: 12660 },
      { name: 'Leage of Legends', playTime: 8580 },
    ],
  };

  const longestGame = (arr) =>
    arr.reduce((prev, next) => (prev.playTime > next.playTime ? prev : next), []);
  console.log(longestGame(player.games));
})();

/* Function Composition */
const groceryStore = [
  { title: 'orange', quantity: 1, price: 5 },
  { title: 'banana', quantity: 3, price: 7 },
  { title: 'melon', quantity: 2, price: 10 },
  { title: 'apple', quantity: 4, price: 2 },
  { title: 'kiwi', quantity: 2, price: 12 },
  { title: 'watermelon', quantity: 3, price: 3 },
  { title: 'lemon', quantity: 2, price: 7 },
];

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const getQuantity = (list) => list.filter((item) => item.quantity === 2);
const getPrice = (list) => list.map((item) => item.price);
const countPrice = (val) => val.reduce((prev, curr) => prev + curr, 0);

console.log(compose(countPrice, getPrice, getQuantity)(groceryStore));

(function reduceObj() {
  const formData = {
    name: 'Sebastian',
    billing_address_city: 'Warsaw',
    billing_address_street: 'ul. Pomorska',
    shipping_address_city: 'Krakow',
    shipping_address_street: 'ul. kotlarska',
  };

  /* let result = {
    name: 'Sebastian',
    billing_address: { city: 'Warsaw', street: 'ul. Pomorska' },
    shipping_address: { city: 'Krakow', street: 'ul. Kotlarska' },
  }; */

  const newForm = Object.keys(formData).reduce((result, key) => {
    if (!key.match('_')) {
      result[key] = formData[key];
    } else {
      const newKey = key.split(/_([^_]*)$/);
      if (!result[newKey[0]]) result[newKey[0]] = {};
      result[newKey[0]][newKey[1]] = formData[key];
    }

    return result;
  }, {});

  console.log(newForm);
})();

(function reverseMethod() {
  const add = (value) => value + 1;
  const subtract = (value) => value - 2;
  const double = (value) => value * 2;

  const pipe = [add, subtract, double];
  let result = pipe.reduce((total, fn) => {
    return fn(total);
  }, 5);
  let resultReverse = pipe.reduceRight((total, fn) => {
    return fn(total);
  }, 5);

  console.log(result);
  console.log(resultReverse);
})();

let firstPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('first failed'));
    }, 1000);
  });

let secondPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('second');
    }, 1000);
  });

async function fetchItems() {
  // Promise.allSettled([firstPromise(), secondPromise()]).then((res) => console.log(res));
  /*  try {
     const res = await firstPromise();
    const res1 = await secondPromise();
    console.log(res1, res);
    const res = await Promise.all([
      firstPromise().catch((err) => console.log(err)),
      secondPromise().catch((err) => console.log(err)),
    ]);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  } */
  const res = await Promise.all([
    firstPromise().catch((err) => console.log(err)),
    secondPromise().catch((err) => console.log(err)),
  ]);
  console.log(res);
}

fetchItems();
