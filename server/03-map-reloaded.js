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
];
console.log('original', orders);
const resp = orders.map((item) => item.total);
console.log('resp', resp);

//Esto me generata una mutacion en el arrary original, Estamos modificando el objeto en memoria
// Estamos retornando la referencia en memoria
/* const resp2 = orders.map((item) => {
   item.tax = 0.19;
   return item;
});

console.log('original', orders);
console.log('resp2', resp2); */

const resp3 = orders.map((item) => {
   return {
      ...item,
      tax: 0.19,
   };
});
console.log('original', orders);
console.log('resp3', resp3);
