const numbers = [1, 30, 39, 29, 10, 13];

let resp = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    resp = false;
  }
}
console.log('for', resp);

const resp2 = numbers.every((element) => element <= 40);
console.log('every', resp2);

const team = [
  {
    name: 'Nicolas',
    age: 12,
  },
  {
    name: 'Andrea',
    age: 8,
  },
  {
    name: 'Zulema',
    age: 2,
  },
  {
    name: 'Santiago',
    age: 18,
  },
];

const resp3 = team.every((element) => element.age <= 15);
console.log(resp3);
