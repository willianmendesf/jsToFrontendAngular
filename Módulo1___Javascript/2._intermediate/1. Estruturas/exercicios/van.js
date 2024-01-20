// 1. Faça um loop que exiba os números de 1 a 10 usando FOR parametrizado.
var numero;
for (numero = 1; numero <= 10; numero++) {
  console.log(numero);
}

// 2. Faça um loop que exiba os números de 1 a 10 usando while
let num = 0;
while (num < 10) {
  num++;
  console.log(num);
}

// 3. Faça um loop que exiba os números de 1 a 10 usando do-while
let number = 0;
do {
  number += 1;
  console.log(number);
} while (number < 10);

// 4. Escreva um programa que exiba a soma dos números de 1 a 100 usando while
let soma = 0;
let num1 = 1;
while (num1 <= 100) {
  soma += num1;
  console.log(soma);
  num1++; 
} // errado


// 5. Escreva um programa que exiba a média de uma lista de números usando for parametrizado
const lista = [1, 2, 3, 4, 5];
let media = 0;
for (let i = 0; i < lista.length; i++) {
}
media /= lista.length;
console.log(media);
//errado


// 6. Escreva um programa que exiba o maior número de uma lista de números usando for of
let array = [10, 5, 3, 8, 2, 100, 200, 500];
let valid = 0;
let maior = 0;
for (arr of array) {
  if (arr > valid) valid = arr;
}
console.log("O maior número é: " + valid)


let cemItens = [10, 5, 3, 8, 2, 100, 200, 500]; // percorrer linear
for (umItem of cemItens) {
  console.log("o todo : " + umItem)
}


let arr = [10, 5, 3, 0, 1, 8, 2, 200];
let valid2 = 0;
for (item of arr) {
  if (item > valid2) valid2 = item;
}
console.log("O maior numero é: " + valid2)







// 7. Escreva um programa que exiba a soma dos números pares de uma lista de números usando for in
const numeros2 = [1, 2, 3, 4, 5, 6];
let arrPar = []
for (indice in numeros2) {
  if (numeros2[indice] % 2 === 0) {
    arrPar.push(indice)
  }
}
console.log(arrPar);


// 8. Escreva um programa que exiba se um número é primo ou não usando while
const numero = 7;
let primo = true;
let m = 2;

console.log(primo);