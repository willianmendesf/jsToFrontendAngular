// Usando colchetes(array) vazios
let array = [];
const array1 = [];
console.log(array1)


// Usando o construtor Array()
const array2 = new Array();
console.log(array2)


// Inicializando o array com valores
const array3 = [ 1, 2, 3 ];
console.log(array3)


// Usando o operador spread para copiar outro array
const array3b = [ 1, 2, 3 ];
const array4 = [...array3b];
const array4b = [5,6,7, ...array3b];
const array4c = [...array4b, 41, 50, 20]
console.log(array4c)


// let app = (...name) => {
//   console.log(name[3])
// }
// app('Raquel','Paula','William', 'José')


// Usando o método Array.from()
const array5 = Array.from('Olá');
console.log(array5)


// Usando a função Array.of()
const array6 = Array.of("Olá", "Olá2", "Olá3");
console.log(array6)


// Usando o método fill()
const array7 = new Array(10).fill(null);
console.log(array7)