// Laço "for"
// Exibir os números de 1 a 10 na tela
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Multiplicar cada elemento de um array por 2 e exibi-lo na tela
const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i] * 2);
}

// Exibir apenas os números pares de 1 a 10 na tela
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Exibir apenas os números impares de 1 a 10 na tela
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


// Laço "while"
// Exibir os números de 1 a 10 na tela
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Multiplicar cada elemento de um array por 2 e exibi-lo na tela
const numbers2 = [1, 2, 3, 4, 5];
let i = 0;
while (i < numbers.length) {
  console.log(numbers2[i] * 2);
  i++;
}

// Exibir apenas os números pares de 1 a 10 na tela
let index4 = 1;
while (index4 <= 10) {
  if (index4 % 2 === 0) {
    console.log(index4);
  }
  index4++;
}



// Laço "do-while"

// Exibir os números de 1 a 10 na tela
let index = 1;
do {
  console.log(index);
  index++;
} while (index <= 10);


// Multiplicar cada elemento de um array por 2 e exibi-lo na tela
const numbers3 = [1, 2, 3, 4, 5];
let index2 = 0;
do {
  console.log(numbers3[index2] * 2);
  index2++;
} while (i < numbers3.length);


// Exibir apenas os números pares de 1 a 10 na tela
let index3 = 1;
do {
  if (index3 % 2 === 0) {
    console.log(i);
  }
  index3++;
} while (i <= 10);
