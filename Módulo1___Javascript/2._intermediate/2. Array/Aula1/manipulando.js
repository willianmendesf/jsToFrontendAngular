

// 1. concat()
// Concateno os valores que eu desejo ao array.
var arr = [1, 2, 3]
var ArrAdded = [4,5]
const concatenatedArr = arr.concat(ArrAdded);
console.log(concatenatedArr);
// [1, 2, 3, 4, 5]




// 2. copyWithin()
// copia elementos de uma posição do array para outra posição no mesmo array.
const copyWithinArr = [1, 2, 3, 10, 5];
copyWithinArr.copyWithin(1, 3);
console.log(copyWithinArr); // [1, 10, 3, 10, 5]




// 3. entries()
// retorna um objeto de iterador com pares de chave/valor para cada elemento no array.
var arr = [15, 20, 35];
const entriesArr = arr.entries();
for (const [index, value] of entriesArr) {
  console.log(index, value);
}
// 0 15
// 1 20
// 2 35




// 4. every()
// verifica se {todos} os elementos do array passam em um teste especificado por uma função.
var arrTrue = [100, 200, 300];
var arrFalse = [100, 200, 300, -1];
const notZero = arrFalse.every(n => n >= 0);
console.log(notZero);


// 5. fill()
// preenche todos os elementos do array com um valor estático.
// Ideal para iniciar array com valorer cravado
const filledArr = new Array(3).fill(0);
console.log(filledArr); // [0, 0, 0]




// 6. filter()
// cria um novo array com todos os elementos que passam em um teste especificado por uma função.
var arrCadastros = [
  { name: "mike",  idade: 18 },
  { name: "José",  idade: 19 },
  { name: "Ana",   idade: 21 }, 
  { name: "Pedro", idade: 33 }
];
const filtro = arrCadastros.filter(item => item.idade >= 15);
console.log(`${filtro.length} dado(s) encontrado(s).`);
console.log(filtro); //




// 7. find()
//  retorna o valor do {primeiro} elemento no array que passa em um teste especificado por uma função.
var arr = [20, 50, 2, 3];
const foundNum = arr.find(num => num <= 4);
console.log(foundNum); // 20


// 8. findIndex()
// retorna o índice do primeiro elemento no array que passa em um teste especificado por uma função.
var arrCadastros = [
  {name: "mike1", idade: 18 },
  {name: "mike2", idade: 19 },
  {name: "Ana",   idade: 21 },
  {name: "Pedro", idade: 33 }
];
const foundIndex = arrCadastros.findIndex(item => item.idade > 30);
console.log(foundIndex); // 1




// 9. flat()
// cria um novo array com todos os subarrays concatenados em um nível de profundidade especificado.
// ideal para tratamento de dados, em subníveis
const nestedArr = [1, [2, [3, ['Pedro', ['Jose', ['Ana']]]]]];
const flattenedArr = nestedArr.flat(5);
console.log(flattenedArr); // [1, 2, 3]




// 10. flatMap()
// cria um novo array com os resultados de uma função que é aplicada a cada elemento, e em seguida achatado em um nível de profundidade especificado.
// ele calcula cada elemento * 2 * e incrementa no array.
// da pra montar tabuada com ele. 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const flatMappedArr1 = arr.flatMap( num => [num, num * 2]);
const flatMappedArr2 = arr.flatMap( num => [num * 3]);
console.log(flatMappedArr2); // [1, 2, 2, 4, 3, 6, ...]
// console.log(flatMappedArr1); // [1, 2, 2, 4, 3, 6, ...]




// 11. forEach()
// executa uma função para cada elemento no array.
var arr = ["Pedro", "João", "Paula"];
arr.forEach(num => {
  console.log(`Você é o ${num}`)
})
// 1
// 2
// 3




// 12. includes()
//  verifica se um elemento está presente no array.
var arr = [1, 2, 3];
const includesTwo = arr.includes(0);
console.log(includesTwo); // 




// 13. indexOf()
// retorna o índice(index) da primeira ocorrência de um elemento no array ou -1 se não for encontrado.
var arr = [1, 2, 3]
const indexOfTwo2 = arr.indexOf(1)
console.log(indexOfTwo2)

var arr = ['Pedro', 'Carlos', 'André']
const indexOfTwo1 = arr.indexOf('João')
console.log(indexOfTwo1)




// 14. join()
// junta todos os elementos do array em uma string, usando um separador especificado.
// O famoso linguição, ou seja, tudo junto agarrado, misturado.
var arr = [1, 2, 3];
const joinedStr = arr.join("+");
console.log(joinedStr); // "1/2/3"




// 15. keys()
// retorna um objeto de iterador com as chaves do array, ou seja a posição dele no index.
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']
// verificar se usa com MAP.
var arr = [1, 2, 3];
const iterator = arr.keys(arr);
for (const index of iterator) { console.log(index); }
// 0
// 1
// 2




// 16. lastIndexOf()
// retorna o índice da última ocorrência de um elemento no array ou -1 se não for encontrado.
var arr = [1, 2, 2, 2, 2, 2, 3];
const lastIndexOfTwo = arr.lastIndexOf(3);
console.log(lastIndexOfTwo);


var arr = ['José', 'Pedro', 'Pedro', 'Pedro', 'José', 'Pedro', 'Pedro', 'João'];
const lastIndexOfName = arr.lastIndexOf('José');
console.log(lastIndexOfName);




// 17. map()
//  cria um novo array com os resultados de uma função que é aplicada a cada elemento.
var arr = [1, 2, 3];
const squaredArr = arr.map(num => num * 10);
console.log(squaredArr); // [ 10, 20, 30 ]




// 18. pop()
// Remove o último elemento do array e retorna esse elemento.
var arr = [1, 2, 3];
const lastNum = arr.pop();
console.log(lastNum); // 3
console.log(arr); // [1, 2]




// 19. push()
// adiciona um ou mais elementos no final do array e retorna o novo comprimento do array.
var arr = [1, 2, 3];
const newLength = arr.push(4,5,6,7,8);
console.log(newLength);
console.log(arr);




// 20. reduce()
// aplica uma função acumuladora a cada elemento do array, resultando em um único valor de retorno.
var arr = [10, 20, 30];
const reducedArr = arr.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(reducedArr); // 750





// 21. reduceRight()
//  aplica uma função acumuladora a cada elemento do array, começando pelo último elemento e trabalhando em direção ao primeiro elemento, resultando em um único valor de retorno.
var arr = [1, 2, 3];
const reducedRightArr = arr.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(reducedRightArr); // 6


///////



// 22. reverse()
// inverte a ordem dos elementos do array.
var arr = [1, 2, 3];
const reversedArr = arr.reverse();
console.log(reversedArr); // [4, 3, 2, 1]




// 23. shift()
//  remove o primeiro elemento do array e retorna esse elemento.
var arr = [1, 2, 3];
const firstNum = arr.shift();
console.log(firstNum); 
console.log(arr); 



// 24. slice()
//  retorna uma parte do array, especificado pelos índices inicial e final.
var arr = ['Jo', 'Pe', 'Pa', 'Ra', 'Van', 'Fe', 'Ce'];
const slicedArr = arr.slice(0, 10);
console.log(slicedArr); // [2]




// 25. some()
//  verifica se pelo menos um elemento no array passa em um teste especificado por uma função.
var arr = [1, 2, 3];
const hasSomeEvenNumber = arr.some(num => num === 3);
console.log(hasSomeEvenNumber); // true




// 26. sort()
//  ordena os elementos do array.
var arr = [18, 25, 15, 1, 33, 2, 59, 663, 65, 14, 6, 21, 3];
var arr2 = ['Jo', 'Pe', 'Pa', 'Ra', 'Van', 'Fe', 'Ce'];
const sortedArr = arr2.sort();
console.log(sortedArr); // [1, 2, 3, ...]




// 27. splice()
// adiciona, remove ou substitui elementos do array.
var arr = [1, 2, 3];
const splicedArr = arr.splice(0, 1);
console.log(splicedArr); // [2]
console.log(arr); // [ 1, 5, 3 ]

// const splicedArr2 = arr.splice(0, 1);
var arr = ['ana.gm.c', 'pedro.gm.c', 'jose.gm.c', 'carol.gm.c', 'july.gm.c']
handleDeleteUserEmail = (index) => arr.splice(index, 1);
handleDeleteUserEmail(2)
console.log(arr);




// 28. toLocaleString()
// converte os elementos do array em uma string com base na localização do usuário.
var arr = 3500;
const localizedStr = arr.toLocaleString("pt-BR");
console.log(localizedStr);
const localizedStr2 = arr.toLocaleString("en-US");
console.log(localizedStr2);




// 29. toString()
// converte o array em uma string.
var arr = [13];
const str = arr.toString();
let myAge = "Eu tenho: " + arr + "Anos";
console.log(myAge);




// 30. unshift()
//  adiciona um ou mais elementos no início do array e retorna o novo tamando do array
var arr = [1, 2, 3];
const newLength2 = arr.unshift(4, 2);
console.log(newLength2);
console.log(arr);




// 31. values()
// retorna um objeto de iterador com os valores do array.
var arr = [1, 2, 3];
const valueIterator = arr.values();
for (const value of valueIterator) {
  console.log(value);
}