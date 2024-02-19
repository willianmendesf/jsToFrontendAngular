// 1. Método .concat
// O método .concat concatena duas ou mais strings e retorna uma nova string.
var str1 = "Hello";
var str2 = "World";
var result = str1.concat(" ", str2);
console.log(result);
// Saída: Hello World


// Podemos concatenar variáveis e strings utilizando o método .concat.
var name = "John";
var greeting = "Hello, ".concat(name, "!");
console.log(greeting);
// Saída: Hello, John!


// Também podemos concatenar arrays utilizando o método .concat.
var fruits = ["Banana", "Orange"];
var moreFruits = fruits.concat(["Apple", "Mango"]);
console.log(moreFruits);
// Saída: [ 'Banana', 'Orange', 'Apple', 'Mango' ]


// Também podemos concatenar elementos individuais com um array utilizando o método .concat.
var numbers = [1, 2, 3];
var moreNumbers = numbers.concat(4, 5, 6);
console.log(moreNumbers);
// Saída: [ 1, 2, 3, 4, 5, 6 ]







// 2. Método .split
// O método .split divide uma string em substrings com base em um delimitador e retorna um array.
var str = "How are you doing today?";
var res = str.split(" ");
console.log(res);
// Saída: [ 'How', 'are', 'you', 'doing', 'today?' ]


// Se não especificarmos um delimitador, o método .split dividirá a string em caracteres individuais.
var str = "Hello World";
var res = str.split("");
console.log(res);
// Saída: [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]


// Podemos usar o método .split para dividir uma string em substrings com base em vírgulas.
var str = "apple,banana,kiwi";
var res = str.split(",");
console.log(res);
// Saída: [ 'apple', 'banana', 'kiwi' ]


// Podemos especificar um limite para o número de substrings a serem retornadas.
var str = "How are you doing today?";
var res = str.split(" ", 3);
console.log(res);
// Saída: [ 'How', 'are', 'you' ]


// ele splita encima do que for solicitado.
// Se não especificarmos um limite, o método .split retornará todas as substrings possíveis.
var str = "How are you doing today?";
var res = str.split("");
console.log(res);
// Saída: [ 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', ' ', 'd', 'o', 'i', 'n', 'g', ' ', 't', 'o', 'd', 'a', 'y', '?' ]



// Exemplo de .concat  +  .split
// Podemos dividir uma frase em palavras, adicionar mais palavras e depois unir novamente.
var sentence = "The quick brown fox";
var words = sentence.split(" ")
var newSentence = words.concat(["jumps", "over", "the", "lazy", "dog"]).join(" ");
console.log(newSentence);
// Saída: The quick brown fox jumps over the lazy dog







// 3. Método .includes
// O método .includes verifica se uma string contém outra string e retorna true se encontrar.
var str = "Hello world, welcome to the universe.";
var n = str.includes("world");
console.log(n);
// Saída: true


// Também podemos usar o método .includes em arrays para verificar a existência de um elemento.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var result = fruits.includes("Banana");
console.log(result);
// Saída: true


// Se a string não estiver presente, o método .includes retorna false.
var sentence = "The quick brown fox jumps over the lazy dog";
var word = "cat";
console.log(sentence.includes(word));
// Saída: false


// Podemos especificar um índice a partir do qual a busca deve começar.
var text = "Hello world";
console.log(text.includes("world", 7));
// Saída: false






// 4. Método .length
// O método .length retorna o comprimento (número de caracteres) de uma string.
var str = "Hello World!";
var length = str.length;
console.log(length);
// Saída: 12


// Também podemos usar o método .length para obter o número de elementos em um array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var arrayLength = fruits.length;
console.log(arrayLength);
// Saída: 4


// O método .length funciona corretamente mesmo para strings vazias.
var emptyString = "";
console.log(emptyString.length);
// Saída: 0





// 5. Método .match
// O método .match encontra todas as ocorrências de uma expressão regular em uma string e retorna um array com elas.
var str = "The rain in SPAIN stays mainly in the plain";
var regex = /ain/g;
var matches = str.match(regex);
console.log(matches);
// Saída: [ 'ain', 'ain', 'ain' ]


// Podemos usar a flag 'gi' para fazer uma correspondência de maiúsculas e minúsculas.
var text = "Visit b3.com.br! B3 is a great company.";
var regex = /b3/gi;
var matches = text.match(regex);
console.log(matches);
// Saída: [ 'b3', 'B3' ]


// Também podemos criar uma expressão regular dinamicamente.
var sentence = "The quick brown fox jumps over the lazy dog";
var word = "dog";
var regex = new RegExp(word, "g");
var matches = sentence.match(regex);
console.log(matches);
// Saída: [ 'dog' ]


// Se a expressão regular não encontrar correspondências, o método .match retorna null.
var text = "The quick brown fox jumps over the lazy dog";
var regex = /cat/;
var matches = text.match(regex);
console.log(matches);
// Saída: null









// 6. Método .replace
// O método .replace substitui a primeira ocorrência de uma substring por outra.
var str = "Mr Blue has a blue house and a blue car";
var newStr = str.replace("Blue", "Red");
console.log(newStr);
// Saída: Mr Blue has a red house and a blue car


// Podemos usar expressões regulares para substituir todas as ocorrências.
var str = "Mr Blue has a blue house and a blue car";
var newStr = str.replace(/blue/g, "red");
console.log(newStr);
// Saída: Mr Blue has a red house and a red car


// O método .replace é sensível a maiúsculas e minúsculas.
var text = "Visit Microsoft!";
var newtext = text.replace("Microsoft", "B3");
console.log(newtext);
// Saída: Visit B3!


// Podemos usar expressões regulares com a flag 'gi' para substituir maiúsculas e minúsculas.
var text = "Visit Microsoft! microsoft is a great company.";
var regex = /microsoft/gi;
var newtext = text.replace(regex, "B3");
console.log(newtext);
// Saída: Visit B3! B3 is a great company.


// Se a substring não for encontrada, a string original será retornada.
var str = "Please visit Microsoft!";
var newStr = str.replace(/microsoft/g, "B3");
console.log(newStr);
// Saída: Please visit B3!









// 7. Método .replaceAll
// O método .replaceAll substitui todas as ocorrências de uma substring por outra.
var str = "Mr Blue has a blue house and a blue car";
var newStr = str.replaceAll("blue", "red");
console.log(newStr);
// Saída: Mr Blue has a red house and a red car


// Podemos usar expressões regulares para substituir todas as ocorrências.
var str = "Mr Blue has a blue house and a blue car";
var newStr = str.replaceAll(/blue/gi, "red");
console.log(newStr);
// Saída: Mr Blue has a red house and a red car


// O método .replaceAll é sensível a maiúsculas e minúsculas.
var text = "Visit Microsoft!";
var newtext = text.replaceAll("Microsoft", "B3");
console.log(newtext);
// Saída: Visit B3!


// Podemos usar expressões regulares com a flag 'gi' para substituir maiúsculas e minúsculas.
var text = "Visit Microsoft! Microsoft is a great company.";
var regex = /microsoft/gi;
var newtext = text.replaceAll(regex, "B3");
console.log(newtext);
// Saída: Visit B3! B3 is a great company.


// Se a substring não for encontrada, a string original será retornada.
var str = "Please visit Microsoft!";
var newStr = str.replaceAll(/microsoft/g, "B3");
console.log(newStr);
// Saída: Please visit B3!







// 8. Método .slice
// O método .slice extrai uma parte de uma string e retorna a parte extraída em uma nova string.
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 14);
console.log(res);
// Saída: Banana


// Podemos usar índices negativos para contar a partir do final da string.
var str = "Apple, Toledo, Kiwi";
var res = str.slice(-12, -6);
console.log(res);
// Saída: Banana


// Se omitirmos o segundo argumento, o método .slice extrairá até o final da string.
var str = "Apple, Banana, Kiwi";
var res = str.slice(7);
console.log(res);
// Saída: Banana, Kiwi


// Podemos usar índices negativos para extrair uma parte da string a partir do final.
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12);
console.log(res);
// Saída: Banana, Kiwi


// Se não especificarmos nenhum argumento, o método .slice retornará uma cópia da string original.
var str = "Apple, Banana, Kiwi";
var res = str.slice();
console.log(res);
// Saída: Apple, Banana, Kiwi


// Um exemplo de um possível tratamento de data com o slice
var str = "20240230";
var res = str.slice(6,8)+ "/" +str.slice(4,6)+ "/" +str.slice(0,4);
console.log(res);
// Saída: 30/02/2024

datas = [{data:20240230},20240230,20240230,20240230,20240230,20240230]
datas.forEarch(item => data = item.slice(6,8)+ "/" +item.slice(4,6)+ "/" +item.slice(0,4))




// 9. Método .substring
// O método .substring é semelhante ao .slice, mas não aceita índices negativos.
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log(res);
// Saída: Banana


// Se omitirmos o segundo argumento, o método .substring extrairá até o final da string.
var str = "Apple, Banana, Kiwi";
var res = str.substring(7);
console.log(res);
// Saída: Banana, Kiwi


// Podemos trocar a ordem dos índices, e o método .substring ainda funcionará corretamente.
var str = "Apple, Banana, Kiwi";
var res = str.substring(12, 7);
console.log(res);
// Saída: Banana


// Se não especificarmos nenhum argumento, o método .substring retornará uma cópia da string original.
var str = "Apple, Banana, Kiwi";
var res = str.substring();
console.log(res);
// Saída: Apple, Banana, Kiwi







// 10. Método .toLowerCase
// O método .toLowerCase converte todos os caracteres em minúsculas.
var str = "HELLO WORLD!";
var res = str.toLowerCase();
console.log(res);
// Saída: hello world!


// Se a string já estiver em minúsculas, o método .toLowerCase não afetará os caracteres.
var str = "Hello World!";
var res = str.toLowerCase();
console.log(res);
// Saída: hello world!


// Podemos comparar diretamente strings em diferentes caixas usando o método .toLowerCase.
var str = "HellO WOrLd!";
var res = str.toLowerCase();
console.log(res === "hello world!");
// Saída: true


// O método .toLowerCase retorna uma nova string, deixando a original intacta.
var str = "Hello World!";
var res = str.toLowerCase();
console.log(res !== str);
// Saída: true


// Se não houver valores maiúsculas na string, o método .toLowerCase não fará nada.
var str = "hello world!";
var res = str.toLowerCase();
console.log(res);
// Saída: hello world!








// 11. Método .toUpperCase
// O método .toUpperCase converte todos os caracteres em maiúsculas.
var str = "hello world!";
var res = str.toUpperCase();
console.log(res);
// Saída: HELLO WORLD!


// Se a string já estiver em maiúsculas, o método .toUpperCase não afetará os caracteres.
var str = "HELLO WORLD!";
var title = str.toUpperCase();
console.log(res);
// Saída: HELLO WORLD!


// Podemos comparar diretamente strings em diferentes caixas usando o método .toUpperCase.
var str = "Hello World!";
var res = str.toUpperCase();
console.log(res === "HELLO WORLD!");
// Saída: true


// O método .toUpperCase retorna uma nova string, deixando a original intacta.
var str = "Hello World!";
var res = str.toUpperCase();
console.log(res !== str);
// Saída: true


// Se não houver varras minúsculas na string, o método .toUpperCase não fará nada.
var str = "Hello World!";
var res = str.toUpperCase();
console.log(res);
// Saída: HELLO WORLD!