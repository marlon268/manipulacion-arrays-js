const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
   const element = othersElements[index];
   newArray.push(element);
}

console.log('for', newArray);

const resp = elements.concat(othersElements);
const resp2 = [...elements, ...othersElements];
const resp3 = [...elements, ...'random'];
console.log('resp', resp);
console.log('resp2', resp2);
console.log('resp3', resp3);
elements.push(...othersElements);
console.log(elements);
