const numbers = [1, 30, 49, 29, 10, 13];

let resp = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 3123) {
    resp = element;
    break;
  }
}

console.log('for', resp);

const resp2 = numbers.find((element) => element === 30123);
console.log('find', resp2);

const products = [
  {
    name: 'Pizza',
    price: 12,
    id: '🍕',
  },
  {
    name: 'Burger',
    price: 23,
    id: '🍔',
  },
  {
    name: 'Hot dog',
    price: 34,
    id: '🌭',
  },
  {
    name: 'Hot cakes',
    price: 355,
    id: '🥞',
  },
];

const resp3 = products.find((element) => element.id === '🍔');
console.log('find', resp3);

const resp4 = products.findIndex((element) => element.id === '🍔');
console.log('findIndex', resp4);
