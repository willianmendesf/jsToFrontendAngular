// 1. Faça um loop que exiba os números de 1 a 10 usando for
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Faça um loop que exiba os números de 1 a 10 usando while
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// 3. Faça um loop que exiba os números de 1 a 10 usando do-while
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 10);

// 4. Escreva um programa que exiba a tabuada de multiplicação de 1 a 10 usando for aninhado
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 5. Escreva um programa que exiba a soma dos números de 1 a 100 usando while
let soma = 0;
let l = 1;
while (l <= 100) {
  soma += l;
  l++;
}
console.log(soma);

// 6. Escreva um programa que exiba a média de uma lista de números usando for
const lista = [1, 2, 3, 4, 5];
let media = 0;
for (let i = 0; i < lista.length; i++) {
  media += lista[i];
}
media /= lista.length;
console.log(media);

// 7. Escreva um programa que exiba o maior número de uma lista de números usando for of
const numeros = [10, 5, 3, 8, 2];
let maior = numeros[0];
for (let numero of numeros) {
  if (numero > maior) {
    maior = numero;
  }
}
console.log(maior);

// 8. Escreva um programa que exiba a soma dos números pares de uma lista de números usando for in
const numeros2 = [1, 2, 3, 4, 5, 6];
let somaPares = 0;
for (let indice in numeros2) {
  if (numeros2[indice] % 2 === 0) {
    somaPares += numeros2[indice];
  }
}
console.log(somaPares);

// 9. Escreva um programa que exiba a média dos números pares de uma lista de números usando forEach
const numeros3 = [1, 2, 3, 4, 5, 6];
let mediaPares = 0;
let count = 0;
numeros3.forEach(numero => {
  if (numero % 2 === 0) {
    mediaPares += numero;
    count++;
  }
});
mediaPares /= count;
console.log(mediaPares);

// 10. Escreva um programa que exiba se um número é primo ou não usando while
const numero = 17;
let primo = true;
let m = 3;
while (m < 17) {
  // if (numero % m === 0) {
  //   primo = false;
  //   console.log(`O ${numero} não é um número primo`)
  //   break;
  // } else console.log(`O ${numero} é um número primo`)
  // m++;
  console.log(m)
}
