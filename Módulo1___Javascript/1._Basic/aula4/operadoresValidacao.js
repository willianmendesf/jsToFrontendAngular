// Verifique se uma variável é verdadeira e não é um número.
let booleano = true;
console.log(booleano && isNaN(booleano))

isNaN(booleano)




//  Verifique se uma variável é maior que 10 e menor que 20.
let numero = 15;
console.log(numero > 10 && numero < 20)



// Valida se uma string tem pelo menos 5 caracteres e não é vazia.
var texto1 = "Hello";
console.log(texto !== '')
console.log(texto.length >= 5)
console.log(texto.length >= 5 && texto !== '')




// Teste se um número é negativo ou está entre 50 e 100.
var num = 75;
console.log(num < 0 || (num >= 50 && num <= 100))

var num = -15;
console.log(num < 0 && (num >= 50 && num <= 100))



// Valide se um usuário é maior de idade e tem um nome definido.
let idade = 21;
let nomeUsuario = "John";

console.log(idade >= 18 && nomeUsuario !== "")



// Verifique se um número é par e está entre 20 e 40.

//var numPar = 37;
var numPar = 30;
console.log(numPar % 2 === 0)

// 37 / 2 = 15 + 3.5 = 18.5

var numPar = 30;
console.log(numPar >= 20)

var numPar = 30;
console.log(numPar <= 40)

var numPar = 30;
console.log(numPar % 2 === 0 && numPar >= 20 && numPar <= 40)



// Teste se uma variável é nula ou indefinida.
let variavel = null;
console.log(variavel === null || variavel === undefined)



// Valide se um número é diferente de zero e positivo.
let positivo = -5;
console.log(positivo !== 0 && positivo > 0)



// Teste se duas variáveis são iguais e diferentes de zero.
let a = 10;
let b = 10;

console.log(a === b && a !== 0)




// Confira se uma string tem menos de 15 caracteres ou começa com a letra "A".
var textoCurto1 = "Hello";
console.log(textoCurto.length < 15 || textoCurto.charAt(0) === "A")




// Teste se um número não é divisível por 3.
let numeroDivisivel = 14;
console.log(numeroDivisivel % 3 !== 0)



// Valide se uma variável é uma string ou um número.
let variavelTipo = "Texto";
console.log(typeof variavelTipo === "string" || typeof variavelTipo === "number")



// Verifique se uma variável é um número par ou ímpar.
let parOuImpar = 27;
console.log(parOuImpar % 2 === 0 ? "Par" : "Ímpar")



// Confira se uma variável é booleana e é verdadeira.
let booleanoVerdadeiro = true;
console.log(typeof booleanoVerdadeiro === "boolean" && booleanoVerdadeiro)





// Valide se um número está fora do intervalo de 30 a 50.
let foraIntervalo = 25;
console.log(foraIntervalo < 30 || foraIntervalo > 50)



// Confira se uma variável é indefinida ou nula.
let indefinidaNula = undefined;
console.log(indefinidaNula === undefined || indefinidaNula === null)





// Valide se um número é múltiplo de 5 ou de 7.
let multiplo = 14;
console.log(multiplo % 5 === 0 || multiplo % 7 === 0)



// Teste se uma variável é uma função e retorna verdadeiro.
let variavelTeste = () => true;
console.log(typeof variavelTeste === "function" && variavelTeste())



// Verifique se uma variável é um objeto e tem a propriedade "nome".
let objetoTeste = { nome: "John" };
console.log(typeof objetoTeste === "object" && objetoTeste.hasOwnProperty("nome"))



// Valide se um número é diferente de 10 e não é negativo.
let numeroDiferente = 7;
console.log(numeroDiferente !== 10 && numeroDiferente >= 0)



// Teste se uma variável é verdadeira ou uma string não vazia.
let testeVariavel = true;
let testeString = "Hello";

console.log(testeVariavel || testeString !== "")


// Verifique se uma variável é um número e está entre 0 e 100, excluindo 0 e 100.
let numeroIntervalo = 50;
console.log(typeof numeroIntervalo === "number" && numeroIntervalo > 0 && numeroIntervalo < 100)




// Valide se um número é múltiplo de 3 e 5.
let multiplo35 = 15;
console.log(multiplo35 % 3 === 0 && multiplo35 % 5 === 0)



// Teste se uma variável é falsa ou uma string vazia.
let falsaVariavel = false;
let stringVaziaTeste = "";

console.log(!falsaVariavel || stringVaziaTeste === "")


// Verifique se uma variável é um array e tem pelo menos um elemento.
let arrayTeste2 = [1];
console.log(Array.isArray(arrayTeste2) && arrayTeste2.length >= 1)



// Confira se uma variável é indefinida, nula ou uma string vazia.
let indefinidaNulaVazia = undefined;
console.log(indefinidaNulaVazia === undefined || indefinidaNulaVazia === null || indefinidaNulaVazia === "")



// Teste se uma string contém apenas números.
let numerosString = "12345";
console.log(/^\d+$/.test(numerosString))



//Valide se um número é menor que 50 ou maior que 100.
let numeroMenorMaior = 75;
console.log(numeroMenorMaior < 50 || numeroMenorMaior > 100)



// Verifique se uma variável é um objeto e tem pelo menos duas propriedades.
let objetoDuasPropriedades = { nome: "John", idade: 25 };
console.log(typeof objetoDuasPropriedades === "object" && Object.keys(objetoDuasPropriedades).length >= 2)



// Confira se uma string começa com a letra "H" e termina com a letra "o".
let comecaComH = "Hello";
console.log(comecaComH.charAt(0) === "H" && comecaComH.endsWith("o"))



// Teste se uma variável é verdadeira ou uma string não contém a palavra "false".
let verdadeiroTeste = true;
let stringSemFalse = "Hello World";

console.log(verdadeiroTeste || !stringSemFalse.includes("false"))


// Valide se um número é divisível por 2 e não é zero.
let divisivelPor2 = 8;
console.log(divisivelPor2 % 2 === 0 && divisivelPor2 !== 0)



// Teste se uma variável é nula ou uma string não vazia.
let nulaTeste = null;
let stringNaoVazia = "Hello";

console.log(nulaTeste === null || stringNaoVazia !== "")



// Verifique se uma variável é um array e o primeiro elemento é uma string
let arrayString = ["Hello", 2, 3];

console.log(Array.isArray(arrayString) && typeof arrayString[0] === "string")




