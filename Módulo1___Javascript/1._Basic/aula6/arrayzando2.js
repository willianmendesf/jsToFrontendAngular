// Método .unshift
// O método .unshift adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.
var numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers);
// Saída: [1, 2, 3, 4]



// Também podemos adicionar múltiplos elementos ao início do array com o método .unshift.
var colors = ["Green", "Blue"];
colors.unshift("Red", "Yellow");
console.log(colors);
// Saída: [ 'Red', 'Yellow', 'Green', 'Blue' ]



// Se o array estiver vazio, o método .unshift adicionará o elemento ao início e retornará 1.
var fruits = [];
fruits.unshift("Orange");
console.log(fruits);
// Saída: [ 'Orange' ]



// Se não fornecermos argumentos, o método .unshift não adicionará nenhum elemento ao array.
var emptyArray = [];
emptyArray.unshift();
console.log(emptyArray);
// Saída: []



// Podemos adicionar múltiplos elementos ao início do array, na ordem em que são fornecidos.
var numbers = [2, 3, 4];
numbers.unshift(1, 0);
console.log(numbers);
// Saída: [0, 1, 2, 3, 4]










// Método .splice
// O método .splice pode ser usado para adicionar elementos em uma posição específica do array.
var numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 0, 6);
console.log(numbers);
// Saída: [1, 2, 6, 3, 4, 5]



// Também podemos usar o método .splice para substituir elementos existentes no array.
var fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 1, "Mango");
console.log(fruits);
// Saída: [ 'Apple', 'Mango', 'Orange' ]



// O método .splice pode remover elementos do array e retorná-los em um novo array.
var colors = ["Red", "Green", "Blue"];
var removedColors = colors.splice(1, 2);
console.log(removedColors);
console.log(colors);
// Saída: [ 'Green', 'Blue' ]
// Saída: [ 'Red' ]



// Se especificarmos apenas o índice de início, o método .splice removerá todos os elementos do array a partir desse índice.
var numbers = [1, 2, 3, 4, 5];
var removedNumbers = numbers.splice(2);
console.log(removedNumbers);
console.log(numbers);
// Saída: [3, 4, 5]
// Saída: [1, 2]



// Podemos remover e substituir elementos ao mesmo tempo com o método .splice.
var numbers = [1, 2, 3, 4, 5];
var removedNumbers = numbers.splice(1, 3, 6, 7, 8);
console.log(removedNumbers);
console.log(numbers);
// Saída: [2, 3, 4]
// Saída: [1, 6, 7, 8, 5]









// Método .indexOf
// O método .indexOf retorna o primeiro índice no array em que o elemento especificado é encontrado.
var fruits = ["Apple", "Banana", "Orange"];
var index = fruits.indexOf("Banana");
console.log(index);
// Saída: 1




// Também podemos usar o método .indexOf para encontrar o índice de um número em um array.
var numbers = [1, 2, 3, 4, 5];
var index = numbers.indexOf(3);
console.log(index);
// Saída: 2



// Se o elemento especificado não for encontrado no array, o método .indexOf retornará -1.
var colors = ["Red", "Green", "Blue"];
var index = colors.indexOf("Yellow");
console.log(index);
// Saída: -1



// Se o elemento especificado não for encontrado no array, o método .indexOf retornará -1.
var numbers = [1, 2, 3, 4, 5];
var index = numbers.indexOf(6);
console.log(index);
// Saída: -1



// Se o array estiver vazio, o método .indexOf retornará -1.
var emptyArray = [];
var index = emptyArray.indexOf("Hello");
console.log(index);
// Saída: -1









// Método .lastIndexOf
// O método .lastIndexOf retorna o último índice no array em que o elemento especificado é encontrado.
var numbers = [1, 2, 3, 4, 5, 3];
var lastIndex = numbers.lastIndexOf(3);
console.log(lastIndex);
// Saída: 5



// Também podemos usar o método .lastIndexOf para encontrar o último índice de uma string em um array.
var fruits = ["Apple", "Banana", "Orange", "Banana"];
var lastIndex = fruits.lastIndexOf("Banana");
console.log(lastIndex);
// Saída: 3



// Se o elemento especificado não for encontrado no array, o método .lastIndexOf retornará -1.
var colors = ["Red", "Green", "Blue"];
var lastIndex = colors.lastIndexOf("Yellow");
console.log(lastIndex);
// Saída: -1



// Se o elemento especificado não for encontrado no array, o método .lastIndexOf retornará -1.
var numbers = [1, 2, 3, 4, 5];
var lastIndex = numbers.lastIndexOf(6);
console.log(lastIndex);
// Saída: -1




// Se o array estiver vazio, o método .lastIndexOf retornará -1.
var emptyArray = [];
var lastIndex = emptyArray.lastIndexOf("Hello");
console.log(lastIndex);
// Saída: -1









// Método .every
// O método .every verifica se todos os elementos do array passam em um teste implementado pela função fornecida.
var numbers = [1, 2, 3, 4, 5];
var allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);
// Saída: false



// Também podemos usar o método .every para verificar se todos os elementos do array atendem a determinados critérios.
var words = ["Hello", "World", "JavaScript"];
var allLong = words.every((word) => word.length > 4);
console.log(allLong);
// Saída: true



// Podemos usar o método .every para verificar se todos os elementos do array atendem a uma condição específica.
var ages = [20, 25, 30, 35];
var allOver18 = ages.every((age) => age > 18);
console.log(allOver18);
// Saída: true



// Se o array estiver vazio, o método .every retornará true, pois não há elementos para testar.
var emptyArray = [];
var result = emptyArray.every((item) => item > 0);
console.log(result);
// Saída: true



// Podemos usar o método .every para verificar se todos os números em um array são pares.
var numbers = [2, 4, 6, 8];
var allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);
// Saída: true







// Método .some
// O método .some verifica se pelo menos um elemento do array passa em um teste implementado pela função fornecida.
var numbers = [1, 2, 3, 4, 5];
var someEven = numbers.some((num) => num % 2 === 0);
console.log(someEven);
// Saída: true



// Também podemos usar o método .some para verificar se pelo menos um elemento do array atende a determinados critérios.
var words = ["Hello", "World", "JavaScript"];
var someLong = words.some((word) => word.length > 7);
console.log(someLong);
// Saída: false



// Podemos usar o método .some para verificar se pelo menos um elemento do array atende a uma condição específica.
var ages = [20, 25, 30, 35];
var someOver40 = ages.some((age) => age > 40);
console.log(someOver40);
// Saída: false



// Se o array estiver vazio, o método .some retornará false, pois não há elementos para testar.
var emptyArray = [];
var result = emptyArray.some((item) => item > 0);
console.log(result);
// Saída: false



// Podemos usar o método .some para verificar se pelo menos um número em um array é par.
var numbers = [1, 3, 5, 7];
var someEven = numbers.some((num) => num % 2 === 0);
console.log(someEven);
// Saída: false



// Método .findIndex
// O método .findIndex retorna o índice do primeiro elemento no array que satisfaz a função de teste fornecida.
var numbers = [1, 2, 3, 4, 5];
var index = numbers.findIndex((num) => num > 2);
console.log(index);
// Saída: 2



// Também podemos usar o método .findIndex para encontrar o índice do primeiro elemento que atenda a determinados critérios.
var words = ["Hello", "World", "JavaScript"];
var index = words.findIndex((word) => word.length > 7);
console.log(index);
// Saída: -1



// Podemos usar o método .findIndex para encontrar o índice do primeiro elemento que atenda a uma condição específica.
var ages = [20, 25, 30, 35];
var index = ages.findIndex((age) => age > 25);
console.log(index);
// Saída: 2




// Se o array estiver vazio, o método .findIndex retornará -1.
var emptyArray = [];
var index = emptyArray.findIndex((item) => item > 0);
console.log(index);
// Saída: -1



// Se nenhum elemento passar no teste, o método .findIndex retornará -1.
var numbers = [1, 2, 3, 4, 5];
var index = numbers.findIndex((num) => num === 6);
console.log(index);
// Saída: -1










// Método .sort
// O método .sort classifica os elementos de um array in-place e retorna o array classificado.
var numbers = [3, 1, 4, 1, 5];
numbers.sort();
console.log(numbers);
// Saída: [1, 1, 3, 4, 5]



// Também podemos usar o método .sort para classificar strings em ordem alfabética.
var words = ["Apple", "Banana", "Orange"];
words.sort();
console.log(words);
// Saída: [ 'Apple', 'Banana', 'Orange' ]



// Se o array contiver tipos mistos de elementos, o método .sort classificará os elementos como strings.
var mixed = ["Apple", 10, "Banana", 5];
mixed.sort();
console.log(mixed);
// Saída: [ 10, 5, 'Apple', 'Banana' ]



// Podemos usar uma função de comparação personalizada para classificar os elementos em ordem numérica.
var numbers = [10, 5, 20, 15];
numbers.sort((a, b) => a - b);
console.log(numbers);
// Saída: [ 5, 10, 15, 20 ]



// Também podemos classificar os elementos em ordem decrescente com uma função de comparação personalizada.
var numbers = [3, 1, 4, 1, 5];
numbers.sort((a, b) => b - a);
console.log(numbers);
// Saída: [ 5, 4, 3, 1, 1 ]









// Método .reverse
// O método .reverse inverte a ordem dos elementos de um array in-place e retorna o array invertido.
var numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);
// Saída: [5, 4, 3, 2, 1]



// Também podemos usar o método .reverse para inverter a ordem das strings em um array.
var colors = ["Red", "Green", "Blue"];
colors.reverse();
console.log(colors);
// Saída: [ 'Blue', 'Green', 'Red' ]



// Se o array contiver tipos mistos de elementos, o método .reverse inverterá a ordem dos elementos como um todo.
var mixed = ["Apple", 10, "Banana", 5];
mixed.reverse();
console.log(mixed);
// Saída: [ 5, 'Banana', 10, 'Apple' ]




// Se o array estiver vazio, o método .reverse não alterará o array.
var emptyArray = [];
emptyArray.reverse();
console.log(emptyArray);
// Saída: []






// Método .join
// O método .join une todos os elementos de um array em uma string, separados por vírgula por padrão.
var fruits = ["Apple", "Banana", "Orange"];
var joined = fruits.join();
console.log(joined);
// Saída: Apple,Banana,Orange



// Também podemos especificar um separador personalizado para o método .join.
var numbers = [1, 2, 3, 4, 5];
var joined = numbers.join("-");
console.log(joined);
// Saída: 1-2-3-4-5



// Podemos usar o método .join sem especificar um separador para obter uma string sem caracteres de separação.
var characters = ["A", "B", "C"];
var joined = characters.join("");
console.log(joined);
// Saída: ABC



// Se o array estiver vazio, o método .join retornará uma string vazia.
var emptyArray = [];
var joined = emptyArray.join();
console.log(joined);
// Saída: ""