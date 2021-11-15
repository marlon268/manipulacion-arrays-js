const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [2, 3]]],
  [7, 8, 9],
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}
console.log('for', newArray);

const resp = matriz.flat(3);
console.log('flat', resp);

/* const matriz = [
  [1,2,3],
  [4,5,6, [1,2, [1,2]]],
  [7,8,9]
];

function profundidad(list) {
  let newList = [];
  if (typeof list != "object") return [list];
  list.forEach(element => {
      newList = newList.concat(profundidad(element));
  });
  return newList;
}

const newArray = profundidad(matriz);

console.log(newArray); */
