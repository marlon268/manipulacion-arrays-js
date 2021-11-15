const elements = ['Fire', 'Air', 'Water', 'earth'];

let resp = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
   const element = elements[index];
   resp = resp + element + separator;
}

console.log('For', resp);

const resp2 = elements.join('--');
console.log('join', resp2);

const title = 'Curso de manipulacion de arrays';
const urlFinal = title.split(' ').join('-').toLocaleLowerCase();
console.log(urlFinal);
