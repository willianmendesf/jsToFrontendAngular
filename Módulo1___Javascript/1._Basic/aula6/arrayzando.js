// Método .pop
// O método .pop remove o último elemento de um array e retorna esse elemento.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);
// Saída: Mango
// Saída: [ 'Banana', 'Orange', 'Apple' ]



// Também podemos usar o método .pop para remover o último elemento de um array e retorná-lo.
var colors = ["Red", "Green", "Blue"];
var removedColor = colors.pop();
console.log(removedColor);
console.log(colors);
// Saída: Blue
// Saída: [ 'Red', 'Green' ]



// O método .pop funciona corretamente mesmo para arrays de números.
var numbers = [1, 2, 3, 4, 5];
var removedNumber = numbers.pop();
console.log(removedNumber);
console.log(numbers);
// Saída: 5
// Saída: [ 1, 2, 3, 4 ]



// Se o array estiver vazio, o método .pop retornará undefined.
var emptyArray = [];
var removedItem = emptyArray.pop();
console.log(removedItem);
console.log(emptyArray);
// Saída: undefined
// Saída: []






// Método .shift
// O método .shift remove o primeiro elemento de um array e retorna esse elemento.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var lastFruit = fruits.shift();
console.log(lastFruit);
console.log(fruits);
// Saída: Banana
// Saída: [ 'Orange', 'Apple', 'Mango' ]



// Também podemos usar o método .shift para remover o primeiro elemento de um array e retorná-lo.
var colors = ["Red", "Green", "Blue"];
var removedColor = colors.shift();
console.log(removedColor);
console.log(colors);
// Saída: Red
// Saída: [ 'Green', 'Blue' ]



// O método .shift funciona corretamente mesmo para arrays de números.
var numbers = [1, 2, 3, 4, 5];
var removedNumber = numbers.shift();
console.log(removedNumber);
console.log(numbers);
// Saída: 1
// Saída: [ 2, 3, 4, 5 ]



// Se o array estiver vazio, o método .shift retornará undefined.
var emptyArray = [];
var removedItem = emptyArray.shift();
console.log(removedItem);
console.log(emptyArray);
// Saída: undefined
// Saída: []








// Método .push
// O método .push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var newLength = fruits.push("Kiwi");
console.log(newLength);
console.log(fruits);
// Saída: 5
// Saída: [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]



// Também podemos adicionar múltiplos elementos ao array de uma vez com o método .push.
var colors = ["Red", "Green", "Blue"];
colors.push("Yellow", "Purple");
console.log(colors);
// Saída: [ 'Red', 'Green', 'Blue', 'Yellow', 'Purple' ]



// O método .push funciona corretamente mesmo para arrays de números.
var numbers = [1, 2, 3, 4];
var newLength = numbers.push(5, 6, 7);
console.log(newLength);
console.log(numbers);
// Saída: 7
// Saída: [ 1, 2, 3, 4, 5, 6, 7 ]



// Se o array estiver vazio, o método .push adicionará o elemento e retornará 1.
var emptyArray = [];
var newLength = emptyArray.push("Hello");
console.log(newLength);
console.log(emptyArray);
// Saída: 1
// Saída: [ 'Hello' ]








// Método .reduce
// O método .reduce executa uma função de redução em cada elemento do array, resultando em um único valor de saída.
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
// Saída: 15



// Podemos usar o método .reduce para encontrar o valor máximo em um array.
var numbers = [1, 2, 3, 4, 5];
var max = numbers.reduce((a, b) => Math.max(a, b));
console.log(max);
// Saída: 5



// Podemos acessar o índice atual no callback da função .reduce.
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((accumulator, currentValue, currentIndex) => accumulator + currentValue + currentIndex, 0);
console.log(sum);
// Saída: 20



// Se o array estiver vazio, o método .reduce retornará o valor inicial sem chamar o callback.
var emptyArray = [];
var sum = emptyArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
// Saída: 0



// Também podemos usar o método .reduce para concatenar strings.
var names = ["Alice", "Bob", "Charlie"];
var concat = names.reduce((accumulator, currentValue) => accumulator + ", " + currentValue);
console.log(concat);
// Saída: Alice, Bob, Charlie











// Método .map
// O método .map cria um novo array com os resultados de chamar uma função para cada elemento do array original.
var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map((num) => num * 2);
console.log(doubled);
// Saída: [ 2, 4, 6, 8, 10 ]



// Podemos usar o método .map para transformar um array de strings em um array de comprimentos de strings.
var names = ["Alice", "Bob", "Charlie"];
var lengths = names.map((name) => name.length);
console.log(lengths);
// Saída: [ 5, 3, 7 ]



// Também podemos usar o método .map para converter todas as strings para maiúsculas.
var words = ["Hello", "World"];
var uppercase = words.map((word) => word.toUpperCase());
console.log(uppercase);
// Saída: [ 'HELLO', 'WORLD' ]



// Podemos usar o método .map para calcular o quadrado de cada número em um array.
var numbers = [1, 2, 3, 4, 5];
var squares = numbers.map((num) => num ** 2);
console.log(squares);
// Saída: [ 1, 4, 9, 16, 25 ]



// Se o array estiver vazio, o método .map retornará um array vazio.
var emptyArray = [];
var result = emptyArray.map((item) => item + 1);
console.log(result);
// Saída: []










// Método .filter
// O método .filter cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
var numbers = [1, 2, 3, 4, 5];
var evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);
// Saída: [ 2, 4 ]



// Podemos usar o método .filter para encontrar elementos que atendam a determinados critérios.
var names = ["Alice", "Bob", "Charlie"];
var shortNames = names.filter((name) => name.length < 5);
console.log(shortNames);
// Saída: [ 'Bob' ]



// Também podemos usar o método .filter para filtrar elementos com base em cálculos.
var numbers = [1, 2, 3, 4, 5];
var squares = numbers.filter((num) => num ** 2 > 10);
console.log(squares);
// Saída: [ 4, 5 ]



// Se nenhum elemento passar no teste, o método .filter retornará um array vazio.
var words = ["Hello", "World"];
var longWords = words.filter((word) => word.length > 5);
console.log(longWords);
// Saída: []



// Se o array estiver vazio, o método .filter retornará um array vazio.
var emptyArray = [];
var result = emptyArray.filter((item) => item > 0);
console.log(result);
// Saída: []












// Método .find
// O método .find retorna o primeiro elemento do array que satisfaz a função de teste fornecida.
var numbers = [1, 2, 3, 4, 5];
var found = numbers.find((num) => num > 3);
console.log(found);
// Saída: 4



// Podemos usar o método .find para encontrar o primeiro elemento que atenda a determinados critérios.
var names = ["Alice", "Bob", "Charlie"];
var found = names.find((name) => name.length > 5);
console.log(found);
// Saída: "Charlie"



// Se nenhum elemento satisfizer a função de teste, o método .find retornará undefined.
var numbers = [1, 2, 3, 4, 5];
var found = numbers.find((num) => num === 6);
console.log(found);
// Saída: undefined



// Se o array estiver vazio, o método .find retornará undefined.
var emptyArray = [];
var found = emptyArray.find((item) => item > 0);
console.log(found);
// Saída: undefined



// Também podemos usar o método .find em arrays de objetos.
var students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 25 }
];
var found = students.find((student) => student.age > 21);
console.log(found);
// Saída: { name: 'Bob', age: 22 }















// Estrutura de Repetição - for
// A estrutura de repetição for percorre cada elemento do array e executa uma ação para cada um.
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Saída:
// 1
// 2
// 3
// 4
// 5



// Podemos usar a estrutura de repetição for para iterar sobre um array e realizar operações com os elementos.
var colors = ["Red", "Green", "Blue"];
for (var i = 0; i < colors.length; i++) {
  console.log("Color:", colors[i]);
}
// Saída:
// Color: Red
// Color: Green
// Color: Blue



// Também podemos usar a estrutura de repetição for para acessar e exibir os elementos do array.
var fruits = ["Apple", "Banana", "Orange"];
for (var i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}
// Saída:
// Fruit: Apple
// Fruit: Banana
// Fruit: Orange



// Não há saída, pois o array está vazio.
// Se o array estiver vazio, o loop for não será executado.
var emptyArray = [];
for (var i = 0; i < emptyArray.length; i++) {
  console.log(emptyArray[i]);
}










// Estrutura de Repetição - forOf
// A estrutura de repetição forOf percorre cada elemento do array e executa uma ação para cada um.
var numbers = [1, 2, 3, 4, 5];
for (var number of numbers) {
  console.log(number);
}
// Saída:
// 1
// 2
// 3
// 4
// 5


// Podemos usar a estrutura de repetição forOf para iterar sobre um array e realizar operações com os elementos.
var colors = ["Red", "Green", "Blue"];
for (var color of colors) {
  console.log("Color:", color);
}
// Saída:
// Color: Red
// Color: Green
// Color: Blue



// Também podemos usar a estrutura de repetição forOf para acessar e exibir os elementos do array.
var fruits = ["Apple", "Banana", "Orange"];
for (var fruit of fruits) {
  console.log("Fruit:", fruit);
}
// Saída:
// Fruit: Apple
// Fruit: Banana
// Fruit: Orange



// Se o array estiver vazio, o loop forOf não será executado.
var emptyArray = [];
for (var item of emptyArray) {
  console.log(item);
}
// Não há saída, pois o array está vazio.








// Método .forEach
// O método .forEach executa uma função callback uma vez para cada elemento do array.
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number));
// Saída:
// 1
// 2
// 3
// 4
// 5



// Podemos usar o método .forEach para iterar sobre um array e realizar operações com os elementos.
var colors = ["Red", "Green", "Blue"];
colors.forEach((color) => console.log("Color:", color));
// Saída:
// Color: Red
// Color: Green
// Color: Blue



// Também podemos usar o método .forEach para acessar e exibir os elementos do array.
var fruits = ["Apple", "Banana", "Orange"];
fruits.forEach((fruit) => console.log("Fruit:", fruit));
// Saída:
// Fruit: Apple
// Fruit: Banana
// Fruit: Orange



// Se o array estiver vazio, o método .forEach não será executado.
var emptyArray = [];
emptyArray.forEach((item) => console.log(item));
// Não há saída, pois o array está vazio.