let dados = [
  { id: 1, nome: "Alice", idade: 25, cidade: "São Paulo" },
  { id: 2, nome: "Bob", idade: 30, cidade: "Rio de Janeiro" },
  { id: 3, nome: "Charlie", idade: 22, cidade: "Belo Horizonte" },
  { id: 4, nome: "Diana", idade: 28, cidade: "Porto Alegre" },
  { id: 5, nome: "Eduardo", idade: 35, cidade: "Salvador" },
  { id: 6, nome: "Fernanda", idade: 27, cidade: "Recife" },
  { id: 7, nome: "Gabriel", idade: 32, cidade: "Brasília" },
  { id: 8, nome: "Heloisa", idade: 26, cidade: "Fortaleza" },
  { id: 9, nome: "Igor", idade: 29, cidade: "Manaus" },
  { id: 10, nome: "Julia", idade: 24, cidade: "Curitiba" },
  { id: 11, nome: "Kaique", idade: 31, cidade: "Belém" },
  { id: 12, nome: "Larissa", idade: 23, cidade: "Natal" },
  { id: 13, nome: "Miguel", idade: 34, cidade: "Florianópolis" },
  { id: 14, nome: "Natalia", idade: 33, cidade: "Goiânia" },
  { id: 15, nome: "Oliver", idade: 28, cidade: "Porto Velho" },
  { id: 16, nome: "Fernanda", idade: 30, cidade: "Sao Paulo" },
];


// O método .concat concatena duas strings.
// Exemplo de .concat
let str1 = "Hello";
let str2 = " World";
let resultadoConcat = str1.concat(str2)
console.log(resultadoConcat)
// Saída: Hello World




// O método .includes verifica se a string contém a substring "JS".
// Exemplo de .includes
let frase = "JavaScript é incrível";
let contemJS = frase.includes("JS")
console.log(contemJS)
// Saída: true




// O método .length retorna o comprimento (número de caracteres) da string.
// Exemplo de .length
let palavra = "OpenAI";
let comprimento = palavra.length;
console.log(comprimento)
// Saída: 6




// O método .match encontra correspondências usando uma expressão regular.
// Exemplo de .match
let texto = "Aprender JavaScript é divertido!";
let matchResult = texto.match(/JavaScript/)
console.log(matchResult)
// Saída: [ 'JavaScript', index: 9, input: 'Aprender JavaScript é divertido!' ]




// O método .replace substitui a primeira ocorrência de uma substring por outra.
// Exemplo de .replace
let fraseAntiga = "Eu gosto de Programação";
let novaFrase = fraseAntiga.replace("Programação", "JavaScript")
console.log(novaFrase)
// Saída: Eu gosto de JavaScript





// O método .replaceAll substitui todas as ocorrências de uma substring por outra.
// Exemplo de .replaceAll
let fraseComRepeticao = "JavaScript é incrível. JavaScript é poderoso.";
let novaFraseSemRepeticao = fraseComRepeticao.replaceAll("JavaScript", "JS")
console.log(novaFraseSemRepeticao)
// Saída: JS é incrível. JS é poderoso.




// O método .slice extrai uma parte da string com base nos índices de início e fim.
// Exemplo de .slice
let textoOriginal = "Manipulando Strings";
let novoTexto = textoOriginal.slice(0, 10)
console.log(novoTexto)
// Saída: Manipuland




// O método .substring extrai uma parte da string com base nos índices de início e fim.
// Exemplo de .substring
let textoCompleto = "Aprendendo JavaScript";
let parteTexto = textoCompleto.substring(0, 9)
console.log(parteTexto)
// Saída: Aprendend




// Exemplo de .toLowerCase
let textoMaiusculo = "TEXTO EM MAIÚSCULAS";
let textoMinusculo = textoMaiusculo.toLowerCase()
console.log(textoMinusculo)
// Saída: texto em maiúsculas
// O método .toLowerCase converte todos os caracteres da string para minúsculas.




// O método .toUpperCase converte todos os caracteres da string para maiúsculas.
// Exemplo de .toUpperCase
let textoMinusculoB = "texto em minúsculas";
let textoMaiusculoB = textoMinusculoB.toUpperCase()
console.log(textoMaiusculoB)
// Saída: TEXTO EM MINÚSCULAS





// O método .split divide a string em um array usando um delimitador.
// Exemplo de .split
let listaFrutas = "maçã,banana,uva,morango";
let arrayFrutas = listaFrutas.split(",")
console.log(arrayFrutas)
// Saída: [ 'maçã', 'banana', 'uva', 'morango' ]





// O método .endsWith verifica se uma string termina com uma determiada letra.
// Exemplo de .endsWith
let terminaCom_O = "JavaScript";
console.log(terminaCom_O.endsWith("o"))
// Saída: false




// O método .charAt verifica qual a letra de uma determinada posição.
// Exemplo de .charAt
let textoCurto = "Hello";
console.log(textoCurto.charAt(0))
// Saída: H



// O método trim() remove os espaços em branco do início e/ou fim de um texto.
// Confira se uma string é vazia ou composta apenas por espaços em branco.
var stringVazia = "   ";
console.log(stringVazia.trim() === "")
let stringVazia = "   Minha casa é linda   ";
console.log(stringVazia.trim())




// Confira se uma string contém pelo menos uma letra maiúscula. usando REGEX [A-Z]
let maiusculaTeste = "HelloWorld";
console.log(/[A-Z]/.test(maiusculaTeste))