const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const students = [
  { name: 'alex', age: 20 },
  { name: 'mike', age: 24 },
  { name: 'masha', age: 20 },
  { name: 'stas', age: 18 },
];

// console.log(fruits.find(el => el === 'kiwi'));

function counItem(array) {
  const count = {};

  array.forEach(el => (!count[el] ? (count[el] = 1) : count[el]++));
  return console.log(count);
}

// counItem(fruits);

function uniqArray(array) {
  const res = Array.from(new Set(array));
  return console.log(res);
}
// uniqArray(fruits);

function groupStudents(arr) {
  const group = {};

  arr.forEach(st => {
    group[st.age] ? group[st.age].push(st) : (group[st.age] = [st]);
  });

  return console.log(group);
}
// groupStudents(students);

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;
// [-1, 11] или [11, -1] - так как -1 + 11 = 10;

const findPairs = (numsArr, target) => {
  for (let i = 0; i < numsArr.length; i++) {
    const firstNum = numsArr[i];
    for (let j = i + 1; j < numsArr.length; j++) {
      const secondNum = numsArr[j];
      if (firstNum + secondNum === target) {
        return console.log([firstNum, secondNum]);
      }
    }
  }
  return console.log([]);
};

// findPairs(myNumbers, sum);

const friends = [
  { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
  { name: 'mike', pizzas: ['salami', 'margarita'] },
  { name: 'stas', pizzas: ['meat'] },
  { name: 'anna', pizzas: ['fish'] },
];

function likedPizzas(arr) {
  const res = arr.reduce((acc, el) => {
    return Array.from(new Set([...acc, ...el.pizzas]));
  }, []);
  return console.log(res);
}
// likedPizzas(friends);

const myStr = 'pizza';

function revers(str) {
  const res = str.split('').reverse().join('');

  return console.log(res);
}

// revers(myStr);
function revers2(str) {
  const res = [];
  for (let i = str.length - 1; i >= 0; i--) {
    res.push(str[i]);
  }

  return console.log(res.join(''));
}
// revers2(myStr);

function logPerson() {
  console.log(`Person:${this.name},${this.age},${this.job}`);
}

const person1 = { name: 'Misha', age: 22, job: 'Developer' };
const person2 = { name: 'Liza', age: 21, job: 'SMM' };

bind(person1, logPerson)();
bind(person2, logPerson)();

function bind(pers, log) {
  return function res(...args) {
    log.apply(pers, args);
  };
}
