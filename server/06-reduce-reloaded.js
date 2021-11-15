const item = [1, 3, 2, 3, 3, 1, 10];

const resp = item.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }

  return obj;
}, {});

console.log('resp', resp);

const data = [
  {
    name: 'Nicolas',
    level: 'low',
  },
  {
    name: 'Andrea',
    level: 'medium',
  },
  {
    name: 'Zulema',
    level: 'hight',
  },
  {
    name: 'Santiago',
    level: 'low',
  },
  {
    name: 'Valentina',
    level: 'medium',
  },
  {
    name: 'Lucia',
    level: 'hight',
  },
];

const resp2 = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }

    return obj;
  }, {});

console.log('resp2', resp2);

const array = [];
for (let index = 0; index < 40; index++) {
  array.push(Math.floor(Math.random() * 11));
}
console.log(array);

const resp3 = array.reduce(
  (obj, item) => {
    if (item < 5) obj['1-4'] += 1;
    else if (item < 9) obj['5-8'] += 1;
    else obj['9-10'] += 1;

    return obj;
  },
  {
    '1-4': 0,
    '5-8': 0,
    '9-10': 0,
  }
);

console.log(resp3);
console.log(item);
