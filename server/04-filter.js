const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
   const element = words[index];
   if (element.length >= 6) {
      newArray.push(element);
   }
}
console.log('newArray', newArray);
console.log('words', words);

const resp = words.filter((element) => element.length >= 6);
console.log('resp', resp);
console.log('words', words);

const orders = [
   {
      customerName: 'Nicolas',
      total: 60,
      delivered: true,
   },
   {
      customerName: 'Zulema',
      total: 120,
      delivered: false,
   },
   {
      customerName: 'Santiago',
      total: 180,
      delivered: true,
   },
   {
      customerName: 'Valentina',
      total: 240,
      delivered: true,
   },
   {
      customerName: 'Nicolas',
      total: 240,
      delivered: false,
   },
];

const resp2 = orders.filter(
   (element) => element.delivered && element.total >= 100
);
console.log('res2', resp2);

const search = (query) => {
   return orders.filter((element) => {
      return element.customerName.includes(query);
   });
};

console.log(search('Nico'));
console.log(search('asdasd'));
