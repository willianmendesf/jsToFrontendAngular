// AULA NIVEL INTERMEDIÁRIO 1

// Estruturas Condicionais
// if / else 

// Primeira: if...else:
// Utilizado para executar um bloco de código se uma condição for verdadeira, e outro bloco de código se a condição for falsa.


if (habilitado == true) {
    console.log('true is true')
    //bloco de código a ser executado se a condição for verdadeira
} else {
    console.log('true is false')
    //bloco de código a ser executado se a condição for falsa
}


// Exemplo:
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}


// Segunda: switch...case:
// Utilizado para executar diferentes blocos de código dependendo do valor de uma expressão.
switch (expressão) {
    case valor1:
        //bloco de código a ser executado se a expressão for igual a valor1
        break;
    case valor2:
        //bloco de código a ser executado se a expressão for igual a valor2
        break;
    default:
        //bloco de código a ser executado se nenhum dos casos anteriores for verdadeiro
        break;
}


// Exemplo:

// let dia = "Sábado";
// if (dia == "segunda-feira") {
//     console.log('Hoje é Segunda.') 
// } else if (dia == "terça-feira") {
//     console.log('Hoje é Terça.') 
// } else if (dia == "quarta-feira") {
//     console.log('Hoje é Quarta.') 
// } else {
//     console.log('Sua data de entrada está incorreta.')
// }

let dia = "Sábado";
switch (dia) {
    case "segunda-feira":
        console.log("Hoje é segunda-feira.");
        break;
    case "terça-feira":
        console.log("Hoje é terça-feira.");
        break;
    case "quarta-feira":
        console.log("Hoje é quarta-feira.");
        break;
    default:
        console.log("Hoje é outro dia da semana.");
        break;
}



// Terceira: Operador ternário:
// Utilizado para atribuir um valor a uma variável dependendo de uma condição.

variável = (condição) ? valor1 : valor2;

//Se a condição for verdadeira, a variável recebe o valor1, caso contrário, a variável recebe o valor2.

//Exemplo:

let idade2 = 18;
let mensagem = (idade2 >= 18) ? "Você é maior de idade." : "Você é menor de idade.";

console.log(mensagem); // Você é maior de idade.



// Quarta: Try Catch:
// Utilizado para validar erros em determinados retornos.
erro = { message: "O recuso não existe ou não funciona adequadamente." }

let vetor = [1, 2, 3];

try {
    console.log(vetor[5]); // A posição 5 não existe no vetor
} catch (erro) {
    console.log("Ocorreu um erro: " + erro.message);
}